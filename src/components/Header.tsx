interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-serif tracking-widest italic">Гибкость</div>
        <nav className="flex gap-8">
          <a
            href="#schedule"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm tracking-wide"
          >
            Расписание
          </a>
          <a
            href="#prices"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm tracking-wide"
          >
            Цены
          </a>
          <a
            href="#signup"
            className="text-white/90 hover:text-white transition-colors duration-300 text-sm tracking-wide"
          >
            Записаться
          </a>
        </nav>
      </div>
    </header>
  );
}
