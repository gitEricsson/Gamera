import { Button } from '@/components/ui/button';

/*
  // In the case of no video background
export const MobileMenu = () => {
  return (
    <div className="bg-gray-800 py-4 md:hidden">
      <nav className="container mx-auto flex flex-col space-y-4 px-4">
        <a href="#features" className="transition-colors hover:text-purple-400">
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
    </div>
  );
};
*/

interface MobileMenuProps {
  isMenuOpen: boolean;
}

export const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden bg-gray-800 py-4">
      <nav className="container mx-auto px-4 flex flex-col space-y-4">
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
    </div>
  );
};
