export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+500px)] lg:h-[calc(100vh+600px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[500px] lg:h-[600px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-500px)] lg:top-[calc(100vh-600px)]">
          <div className="bg-neutral-900 py-8 px-6 h-full w-full flex flex-col justify-between">
            <div className="flex flex-wrap gap-12 lg:gap-20">
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-rose-400/70 text-xs tracking-widest">Студия</h3>
                <a href="#about" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  О нас
                </a>
                <a href="#schedule" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Расписание
                </a>
                <a href="#prices" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Цены
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mb-2 uppercase text-rose-400/70 text-xs tracking-widest">Контакты</h3>
                <p className="text-white/70 text-sm">Казань</p>
                <a href="tel:+78001234567" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  +7 (800) 123-45-67
                </a>
                <a href="#signup" className="text-rose-400 hover:text-rose-300 transition-colors duration-300 text-sm">
                  Записаться →
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mt-6">
              <h1 className="text-[18vw] sm:text-[16vw] lg:text-[12vw] leading-[0.85] text-white/10 font-serif italic font-light tracking-tight select-none">
                Гибкость
              </h1>
              <p className="text-white/30 text-xs shrink-0">{new Date().getFullYear()} © Студия растяжки «Гибкость»</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
