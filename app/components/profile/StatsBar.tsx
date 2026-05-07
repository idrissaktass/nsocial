import { UserStats } from "../../types";

export default function StatsBar({ stats }: { stats: UserStats }) {
  return (
    <div className="flex justify-around py-4 border-y border-gray-100 md:justify-start md:gap-12 md:border-none">
      <div className="flex flex-col items-center md:flex-row md:gap-2">
        <span className="font-bold text-gray-900">{stats.postCount}</span>
        <span className="text-gray-500 text-sm">posts</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:gap-2">
        <span className="font-bold text-gray-900">{stats.followerCount}</span>
        <span className="text-gray-500 text-sm">followers</span>
      </div>
      <div className="flex flex-col items-center md:flex-row md:gap-2">
        <span className="font-bold text-gray-900">{stats.followingCount}</span>
        <span className="text-gray-500 text-sm">following</span>
      </div>
    </div>
  );
}