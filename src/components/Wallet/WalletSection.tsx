import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const wallets = ['MetaMask', 'WalletConnect', 'Coinbase'];

export const WalletSection = () => {
  return (
    <section id="wallet" className="container mx-auto px-4 py-20">
      <h2 className="mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
        Connect Your Wallet
      </h2>
      <Card className="mx-auto max-w-md border-gray-700 bg-gray-800 bg-opacity-50">
        <CardContent className="p-6">
          <div className="space-y-4">
            {wallets.map((wallet, index) => (
              <Button
                key={index}
                className="w-full justify-start text-left transition-colors hover:bg-purple-600"
                variant="outline"
              >
                <img
                  src={`/${wallet}.svg?height=24&width=24&text=${wallet[0]}`}
                  alt={wallet}
                  className="mr-2 h-6 w-6"
                />
                {wallet}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
