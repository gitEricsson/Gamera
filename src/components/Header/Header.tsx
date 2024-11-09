// import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
// import { MobileMenu } from './MobileMenu';

/*
  // In the case of no video background
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
          Gamera
        </div>
        <nav className="hidden space-x-4 md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-purple-400"
          >
            Features
          </a>
          <a href="#games" className="transition-colors hover:text-purple-400">
            Games
          </a>
          <a href="#wallet" className="transition-colors hover:text-purple-400">
            Wallet
          </a>
          <Button
            variant="outline"
            className="border-purple-400 text-purple-400 transition-colors hover:bg-purple-400 hover:text-white"
          >
            Sign Up
          </Button>
        </nav>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </header>
      {isMenuOpen && <MobileMenu />}
    </>
  );
};
*/

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Gamera
      </div>
      <nav className="hidden md:flex space-x-4 text-white">
        <a href="#features" className="hover:text-purple-400 transition-colors">
          Features
        </a>
        <a href="#games" className="hover:text-purple-400 transition-colors">
          Games
        </a>
        <a href="#wallet" className="hover:text-purple-400 transition-colors">
          Wallet
        </a>
        <Button
          variant="outline"
          className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
        >
          Sign Up
        </Button>
      </nav>
      <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
    </header>
  );
};
