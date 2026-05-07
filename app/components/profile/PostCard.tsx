import { Post } from "../../types";
import Image from "next/image";

interface PostCardProps {
  post: Post;
  username: string;
}

export default function PostCard({ post, username }: PostCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-sm mb-6 overflow-hidden">
      {post.imageUrl && (
        <div className="relative aspect-square w-full">
          <Image 
            src={post.imageUrl} 
            alt="Post content" 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex gap-4 mb-2">
          <span className="font-semibold text-sm">{post.likeCount} likes</span>
          <span className="font-semibold text-sm">{post.commentCount} comments</span>
        </div>
        <p className="text-sm leading-relaxed">
          <span className="font-bold mr-2 text-blue-600">{username}</span>
          {post.content}
        </p>
        <time className="text-[10px] text-gray-400 uppercase mt-2 block">
          {new Date(post.createdAt).toLocaleDateString('en-US')}
        </time>
      </div>
    </div>
  );
}