import { fetchUser, fetchUserStats } from "../../../lib/mockAPI";
import ProfileHeader from "../ProfileHeader"
import StatsBar from "../StatsBar";
import PostList from "../PostList";
import { Suspense } from "react";

interface Props {
  params: { id: string };
}

export default async function ProfilePage({ params }: Props) {
  const { id } = params;

  const userPromise = fetchUser(id);
  const statsPromise = fetchUserStats(id);

  const [user, stats] = await Promise.all([userPromise, statsPromise]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <ProfileHeader user={user} />

      <StatsBar stats={stats} />

      <hr className="border-gray-200 dark:border-gray-800" />

      <Suspense fallback={<div>Loading...</div>}>
        <PostList userId={user.id} username={user.username} />
      </Suspense>
    </main>
  );
}