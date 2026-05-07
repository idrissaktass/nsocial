
export interface User {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  isVerified: boolean;
  createdAt: string;
}

export interface Post {
  id: string;
  content: string;
  imageUrl?: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
}

export interface UserStats {
  followerCount: number;
  followingCount: number;
  postCount: number;
}