import { User, Post, UserStats } from "../types";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchUser = async (id: string): Promise<User> => {
  await sleep(500);

  if (Math.random() < 0.05) {
    throw new Error("An error occurred while fetching user data.");
  }

  return {
    id,
    username: "alexrivera",
    displayName: "Alex Rivera",
    bio: "Coffee Lover",
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=Alex`,
    isVerified: true,
    createdAt: "2023-05-15T12:00:00Z",
  };
};

export const fetchUserStats = async (id: string): Promise<UserStats> => {
  await sleep(300);
  return {
    followerCount: 1024,
    followingCount: 512,
    postCount: 15,
  };
};

export const fetchUserPosts = async (id: string, page: number = 1, limit: number = 10): Promise<Post[]> => {
  await sleep(800);
  return Array.from({ length: limit }).map((_, i) => ({
    id: `post-${page}-${i}`,
    content: `Sample post for page ${page}. This is the ${i + 1} post on this page with awesome share content! #nextjs #typescript`,
    likeCount: Math.floor(Math.random() * 100),
    commentCount: Math.floor(Math.random() * 20),
    createdAt: new Date().toISOString(),
    imageUrl: i % 3 === 0 ? "https://picsum.photos/seed/post/600/400" : undefined,
  }));
};