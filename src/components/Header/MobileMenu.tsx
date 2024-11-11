import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

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
  toggleMenu: () => void;
}

export const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Dark overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleMenu}
          />

          {/* Mobile menu */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-[84px] md:hidden p-4 w-full text-white bg-black z-40 border-t border-gray-700 "
          >
            <nav className="container mx-auto px-4 flex flex-col space-y-4">
              <a
                href="#features"
                className="hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a
                href="#games"
                className="hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                Games
              </a>
              <a
                href="#wallet"
                className="hover:text-purple-400 transition-colors"
                onClick={toggleMenu}
              >
                Wallet
              </a>
              <Button
                variant="outline"
                className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
              >
                Sign Up
              </Button>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

<div className={`md:hidden py-4 w-full text-white bg-black`}>
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
</div>;
