"use client";

import { useState } from "react";
import { Post } from "../../types";
import { fetchUserPosts } from "../../lib/mockAPI";
import PostCard from "./PostCard";
import { useIntersectionObserver } from "../../hooks/useInfiniteScroll";
import SkeletonCard from "./SkeletonCard";

interface PostListProps {
  userId: string;
}

export default function PostList({ userId, username }: { userId: string; username: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = async () => {
    if (loading || !hasMore || error) return;

    setLoading(true);
    setError(null);

    try {
      const newPosts = await fetchUserPosts(userId, page);

      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prev) => [...prev, ...newPosts]);
        setPage((prev) => prev + 1);

        if (newPosts.length < 10) {
          setHasMore(false);
        }
      }
    } catch (err) {
      setError("There was an issue loading posts. Please check your connection.");
      console.error("Post fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const observerRef = useIntersectionObserver(loadMorePosts);

  if (!loading && posts.length === 0 && !error && !hasMore) {
    return (
      <div className="flex flex-col items-center justify-center py-24 px-4 bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-200">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">📸</span>
        </div>
        <p className="text-gray-900 font-semibold text-lg">No Posts Yet</p>
        <p className="text-gray-500 text-sm text-center mt-1">
          It looks like this user has not shared any photos yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-150 mx-auto w-full">
      <div className="flex flex-col">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} username={username}/>
        ))}
      </div>

      <div ref={observerRef} className="pb-20 mt-4">
        {loading && (
          <div className="space-y-8">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-100 p-6 rounded-xl text-center">
            <p className="text-red-600 text-sm mb-4 font-medium">{error}</p>
            <button
              onClick={() => {
                setError(null);
                loadMorePosts();
              }}
              className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all active:scale-95"
            >
              🔄 Retry
            </button>
          </div>
        )}

        {!hasMore && posts.length > 0 && (
          <div className="flex flex-col items-center gap-3 py-10">
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <p className="text-gray-400 text-sm font-medium tracking-wide italic">
              You have reached the end of the feed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
