import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice.js";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserCardSkeleton = () => (
  <div className='w-full max-w-sm rounded-2xl bg-white shadow-lg overflow-hidden animate-pulse'>
    <div className='w-full h-64 bg-gray-200 rounded-t-2xl' />
    <div className='p-6 flex flex-col gap-4'>
      <div className='h-6 bg-gray-300 rounded w-1/2'></div>
      <div className='h-4 bg-gray-300 rounded w-full'></div>
      <div className='h-4 bg-gray-300 rounded w-full'></div>
      <div className='flex gap-6 mt-auto'>
        <div className='flex-1 h-10 bg-gray-300 rounded-full'></div>
        <div className='flex-1 h-10 bg-gray-300 rounded-full'></div>
      </div>
    </div>
  </div>
);

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const getFeed = async () => {
    if (feed && feed.length > 0) {
      setLoading(false);
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
      setLoading(false);
    } catch (err) {
      console.error("Error fetching feed:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  const handleUserRemove = (userId) => {
    dispatch(removeUserFromFeed(userId));
    setCurrentIndex((prev) => prev + 1);
  };

  if (loading) {
    return (
      <div className='pt-20 flex justify-center items-center my-10 w-full'>
        <UserCardSkeleton />
      </div>
    );
  }

  if (!feed || feed.length === 0 || currentIndex >= feed.length) {
    return (
      <div className='pt-20 flex justify-center items-center my-10 w-full'>
        <UserCardSkeleton />
      </div>
    );
  }

  return (
    <div className='relative pt-20 flex justify-center items-center my-10 w-full'>
      {/* Radial Gradient Glow Background */}
      <div className='card-glow-bg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0' />

      <div className='max-w-sm w-full relative z-10'>
        <UserCard
          key={feed[currentIndex]._id}
          user={feed[currentIndex]}
          onRemove={handleUserRemove}
        />
      </div>
    </div>
  );
};

export default Feed;
