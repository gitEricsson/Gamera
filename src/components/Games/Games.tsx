import { GameCard } from './GameCard';

const games = ['PUBG Mobile', 'Genshin Impact', 'Candy Crush Saga', 'Clash of Clans'];

export const Games = () => {
  return (
    <section id="games" className="container mx-auto px-4 py-20">
      <h2 className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        Featured Games
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {games.map((game, index) => (
          <GameCard key={index} title={game} />
        ))}
      </div>
    </section>
  );
};
