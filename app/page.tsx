import { fetchUser, fetchUserStats } from "./lib/mockAPI";
import ProfileHeader from "./components/profile/ProfileHeader";
import StatsBar from "./components/profile/StatsBar";
import PostList from "./components/profile/PostList";
import { Suspense } from "react";

const MOCK_USER_ID = "alexrivera-123";

export default async function Home() {
  const userPromise = fetchUser(MOCK_USER_ID);
  const statsPromise = fetchUserStats(MOCK_USER_ID);

  const [user, stats] = await Promise.all([userPromise, statsPromise]);

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12 space-y-8">
        
<section>
        <ProfileHeader user={user} />
      </section>

        <section className="border-y border-gray-100 py-2 md:border-none">
          <StatsBar stats={stats} />
        </section>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-sm font-bold uppercase tracking-widest text-center mb-8 border-t-2 border-black w-fit mx-auto pt-2">
            Posts
          </h2>
          
          <Suspense 
            fallback={
              <div className="flex justify-center p-10">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            }
          >
            <PostList userId={MOCK_USER_ID} username={user.username} />
          </Suspense>
        </div>
      </main>
    </div>
  );
}