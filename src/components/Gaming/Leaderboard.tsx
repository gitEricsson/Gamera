import { Card, CardContent } from "@/components/ui/card";
import { Player } from "../../types";

const leaderboardData: Player[] = [
  { name: 'CryptoGamer99', points: 10500 },
  { name: 'Web3Master', points: 9800 },
  { name: 'BlockchainWarrior', points: 9200 }
];

export const Leaderboard = () => {
  return (
    <Card className="bg-gray-800 bg-opacity-50 border-gray-700">
      <CardContent className="p-6">
        <ul className="space-y-4">
          {leaderboardData.map((player, index) => (
            <li 
              key={index} 
              className="flex items-center justify-between py-2 border-b border-gray-700"
            >
              <span className="text-lg">
                {`${index + 1}. ${player.name}`}
              </span>
              <span className="text-purple-400 font-semibold">
                {`${player.points.toLocaleString()} pts`}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};