import CreatorCard from "@/components/CreatorCard";
import Header from "@/components/Header";

const creators = [
  {
    id: 1,
    name: "Алексей Технов",
    channel: "@technovblog",
    avatar: "/placeholder.svg",
    subscribers: "1.2M",
    goal: "Новая камера для влогов",
    targetAmount: 180000,
    currentAmount: 89500,
    description:
      "Хочу снимать качественные влоги в 4К! Помогите собрать на Sony A7S III",
  },
  {
    id: 2,
    name: "Мария Геймер",
    channel: "@mariagames",
    avatar: "/placeholder.svg",
    subscribers: "850K",
    goal: "Игровая студия мечты",
    targetAmount: 350000,
    currentAmount: 127000,
    description:
      "Собираю деньги на RTX 4090 и топовый процессор для стримов AAA игр",
  },
  {
    id: 3,
    name: "Дмитрий Кулинар",
    channel: "@dmitrycooks",
    avatar: "/placeholder.svg",
    subscribers: "2.1M",
    goal: "Профессиональная кухня",
    targetAmount: 250000,
    currentAmount: 203000,
    description: "Хочу оборудовать студийную кухню для съемок кулинарных шоу",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Поддержи любимых ютуберов! 🚀
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Помоги создателям контента собрать деньги на новое оборудование и
            улучшить качество видео
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
