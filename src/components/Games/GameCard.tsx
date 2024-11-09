import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface GameCardProps {
  title: string;
}

export const GameCard = ({ title }: GameCardProps) => {
  return (
    <Card className="group transform overflow-hidden border-gray-700 bg-gray-800 bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden bg-gray-700">
        <img
          src={`/${title}.png?height=200&width=300&text=${title}`}
          alt={title}
          className="absolute inset-0 h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <Button className="w-full bg-purple-600 transition-colors hover:bg-purple-700">
          Play Now
        </Button>
      </CardContent>
    </Card>
  );
};
