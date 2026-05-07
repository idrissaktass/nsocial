// components/profile/ProfileHeader.tsx
"use client";

import { User } from "../../types";
import { useState } from "react";

export default function ProfileHeader({ user }: { user: User }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = async () => {
    setIsFollowing(!isFollowing);

    try {
    } catch (error) {
      setIsFollowing((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
      <img
        src={user.avatarUrl}
        alt={user.displayName}
        className="w-32 h-32 rounded-full border-4 border-blue-500 p-1"
      />
      <div className="flex-1">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
          <h1 className="text-2xl font-bold">{user.displayName}</h1>
          {user.isVerified && <span className="text-blue-500 text-xl" title="Verified">✓</span>}
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-4">@{user.username}</p>
        <p className="text-lg mb-4">{user.bio}</p>
        <button
          onClick={handleFollow}
          className={`px-8 py-2 rounded-full font-semibold transition-colors cursor-pointer ${
            isFollowing 
              ? "bg-gray-200 text-black hover:bg-gray-300" 
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}