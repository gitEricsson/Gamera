import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  /*
  // In the case of no video background
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
        Welcome to Gamera
      </h1>
      <p className="mx-auto mb-8 max-w-2xl text-xl">
        The ultimate Web3 gaming platform with crypto payments and AI-driven
        personalization
      </p>
      <Button className="transform bg-purple-600 text-white transition-colors hover:scale-105 hover:bg-purple-700">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
  */

  return (
    <section className="container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-5rem)] text-center">
      <div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to Gamera
        </h1>
        <p className="mb-8 text-[16px] font-medium md:mt-[12px] md:leading-[28px] leading-[24px] text-white">
          The ultimate Web3 gaming platform with crypto payments and AI-driven personalization
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white transition-colors transform hover:scale-105">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};
