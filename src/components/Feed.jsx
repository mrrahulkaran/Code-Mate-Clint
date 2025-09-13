// Feed.jsx
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice.js";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    // Only fetch if feed is empty or undefined
    if (feed && feed.length > 0) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error("Error fetching feed:", err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className='pt-20 flex justify-center my-10'>
      {feed && feed.length > 0 ? (
        <UserCard key={feed[0]._id} user={feed[0]} />
      ) : (
        <div className='text-gray-500'>No more users in the feed.</div>
      )}
    </div>
  );
};

export default Feed;
