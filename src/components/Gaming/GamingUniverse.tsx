import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Achievements } from './Achievements';
import { Leaderboard } from './Leaderboard';

export const GamingUniverse = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        Your Gaming Universe
      </h2>
      <Tabs defaultValue="achievements" className="mx-auto w-full max-w-3xl">
        <TabsList className="mb-8 grid w-full grid-cols-2">
          <TabsTrigger value="achievements" className="text-lg">
            Achievements
          </TabsTrigger>
          <TabsTrigger value="leaderboard" className="text-lg">
            Leaderboard
          </TabsTrigger>
        </TabsList>
        <TabsContent value="achievements">
          <Achievements />
        </TabsContent>
        <TabsContent value="leaderboard">
          <Leaderboard />
        </TabsContent>
      </Tabs>
    </section>
  );
};
