import { Wallet, Gamepad2, Zap } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { Feature } from '../../types';

const features: Feature[] = [
  {
    icon: Wallet,
    title: 'Crypto Payments',
    description:
      'AI-optimized crypto selections for low-fee in-game transactions',
  },
  {
    icon: Gamepad2,
    title: 'Game Aggregation',
    description: 'Centralized player data and achievements from multiple games',
  },
  {
    icon: Zap,
    title: 'AI Recommendations',
    description: 'Personalized game suggestions and player matchmaking',
  },
];

export const Features = () => {
  return (
    <section id="features" className="container mx-auto px-4 py-20">
      <h2 className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        Key Features
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};
