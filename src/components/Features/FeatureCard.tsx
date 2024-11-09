import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Feature } from '../../types';

export const FeatureCard = ({ feature }: { feature: Feature }) => {
  const Icon = feature.icon;
  return (
    <Card className="group transform overflow-hidden border-gray-700 bg-gray-800 bg-opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl">
          <Icon className="mr-2 h-8 w-8 text-purple-400 transition-colors group-hover:text-pink-500" />
          {feature.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{feature.description}</p>
      </CardContent>
    </Card>
  );
};
