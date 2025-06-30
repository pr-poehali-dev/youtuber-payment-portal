import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
            <Icon name="Youtube" size={24} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            DonateYT
          </h2>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Создатели
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Категории
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            Как это работает
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:flex">
            Войти
          </Button>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Создать цель
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
