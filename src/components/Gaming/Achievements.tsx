import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface Achievement {
  name: string;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  { name: 'Master Strategist', unlocked: true },
  { name: 'Speed Demon', unlocked: true },
  { name: 'Team Player', unlocked: false }
];

export const Achievements = () => {
  return (
    <Card className="bg-gray-800 bg-opacity-50 border-gray-700">
      <CardContent className="p-6">
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li 
              key={index} 
              className="flex items-center justify-between py-2 border-b border-gray-700"
            >
              <span className="text-lg">{achievement.name}</span>
              <Trophy 
                className={`h-6 w-6 ${
                  achievement.unlocked ? 'text-yellow-400' : 'text-gray-400'
                }`} 
              />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
