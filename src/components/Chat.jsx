import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import socket from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import dayjs from "dayjs";

const Chat = () => {
  const userId = useSelector((state) => state.user?._id);
  const userName = useSelector((state) => state.user?.name || "You");
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const messagesRef = useRef(null);

  useEffect(() => {
    if (!targetUserId) return;

    const fetchRecipientName = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users/${targetUserId}`, {
          withCredentials: true,
        });
        setRecipientName(res.data.firstName || "Unknown");
      } catch (error) {
        console.error("Failed to fetch recipient name", error);
        setRecipientName("Unknown");
      }
    };

    fetchRecipientName();
  }, [targetUserId]);

  useEffect(() => {
    if (!targetUserId) return;

    const fetchChatMessages = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/chat/${targetUserId}`, {
          withCredentials: true,
        });
        setMessages(res.data.messages || []);
      } catch (error) {
        console.error("Failed to fetch chat messages", error);
      }
    };

    fetchChatMessages();
  }, [targetUserId]);

  useEffect(() => {
    if (!userId || !targetUserId) return;

    socket.emit("joinChat", { userIds: [userId, targetUserId] });

    const messageHandler = ({ senderId, text, createdAt }) => {
      setMessages((prev) => [...prev, { senderId, text, createdAt }]);
    };
    socket.on("messageReceived", messageHandler);

    return () => {
      socket.off("messageReceived", messageHandler);
    };
  }, [userId, targetUserId]);

  useEffect(() => {
    messagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const isSendingRef = useRef(false);

  const handleSend = () => {
    if (!newMessage) return;
    if (isSendingRef.current) return;

    isSendingRef.current = true;
    socket.emit("sendMessage", {
      senderId: userId,
      recipientId: targetUserId,
      text: newMessage,
    });

    setNewMessage("");
    setTimeout(() => {
      isSendingRef.current = false;
    }, 1000);
  };

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-start pt-[110px]'
      style={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #e3ecfc 100%)",
      }}
    >
      <div className='p-4 bg-white rounded-lg shadow-md max-w-xl w-full mb-4 sticky top-[110px] z-20'>
        <h2 className='text-xl font-semibold'>Chat with {recipientName}</h2>
      </div>

      <div
        className='flex-1 bg-white rounded-lg shadow p-4 max-w-xl w-full mb-4'
        style={{
          height: "60vh",
          overflowY: "auto",
          scrollBehavior: "smooth",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.senderId === userId ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg shadow ${
                msg.senderId === userId
                  ? "bg-blue-200 text-blue-900"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <div className='text-sm whitespace-pre-wrap'>{msg.text}</div>
              <div className='text-xs opacity-50 text-right'>
                {msg.createdAt ? dayjs(msg.createdAt).format("h:mm A") : ""}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesRef}></div>
      </div>

      <div className='flex w-full max-w-xl px-4 mb-8'>
        <textarea
          className='flex-1 p-3 border border-gray-300 rounded-md resize-none bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
          rows={2}
          placeholder='Type a message...'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" &&
            !e.shiftKey &&
            (e.preventDefault(), handleSend())
          }
        />
        <button
          className='ml-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md px-5 py-2 font-semibold shadow'
          disabled={!newMessage}
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
