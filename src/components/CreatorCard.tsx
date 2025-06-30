import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface Creator {
  id: number;
  name: string;
  channel: string;
  avatar: string;
  subscribers: string;
  goal: string;
  targetAmount: number;
  currentAmount: number;
  description: string;
}

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  const progressPercentage =
    (creator.currentAmount / creator.targetAmount) * 100;
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 group-hover:from-purple-400/20 group-hover:to-pink-400/20 transition-all duration-300" />

        <div className="relative flex items-center space-x-4">
          <Avatar className="w-16 h-16 ring-4 ring-white shadow-lg">
            <AvatarImage src={creator.avatar} alt={creator.name} />
            <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl">
              {creator.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="font-bold text-xl text-gray-800 group-hover:text-purple-600 transition-colors">
              {creator.name}
            </h3>
            <p className="text-gray-500 font-mono text-sm">{creator.channel}</p>
            <Badge
              variant="secondary"
              className="mt-1 bg-purple-100 text-purple-700"
            >
              <Icon name="Users" size={12} className="mr-1" />
              {creator.subscribers}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-bold text-lg text-gray-800 mb-2 flex items-center">
            <Icon name="Target" size={18} className="mr-2 text-purple-600" />
            {creator.goal}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {creator.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Прогресс сбора</span>
            <span className="text-sm font-bold text-purple-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>

          <Progress value={progressPercentage} className="h-3 bg-gray-100" />

          <div className="flex justify-between items-center text-sm">
            <span className="font-bold text-gray-800">
              {formatAmount(creator.currentAmount)}
            </span>
            <span className="text-gray-500">
              из {formatAmount(creator.targetAmount)}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-3">
        <Button
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 group-hover:shadow-lg transition-all duration-300"
          size="lg"
        >
          <Icon name="Heart" size={18} className="mr-2" />
          Поддержать
        </Button>

        <div className="flex space-x-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
            <Icon name="Share2" size={16} className="mr-1" />
            Поделиться
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Icon name="Bookmark" size={16} className="mr-1" />
            Сохранить
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CreatorCard;
