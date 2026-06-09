import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  const [form, setForm] = useState({ name: "", phone: "", time: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Параллакс-промо секция */}
      <div
        ref={container}
        className="relative flex items-center justify-center h-[70vh] overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <img
              src="/images/spiral-circles.jpg"
              alt="Студия растяжки атмосфера"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.5) saturate(0.6) hue-rotate(300deg)" }}
            />
            <div className="absolute inset-0 bg-rose-950/30" />
          </motion.div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
          <p className="text-rose-200/70 uppercase text-xs tracking-[0.3em] mb-4">Казань · Студия растяжки</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white italic font-light leading-tight max-w-2xl">
            Твоё тело заслуживает заботы
          </h2>
          <p className="text-white/70 mt-6 max-w-md text-sm leading-relaxed">
            Запишитесь на бесплатное пробное занятие и убедитесь сами.
          </p>
        </div>
      </div>

      {/* Форма записи */}
      <section id="signup" className="bg-[#fdf8f6] px-6 py-20 lg:py-28">
        <div className="max-w-lg mx-auto">
          <p className="uppercase text-xs tracking-[0.3em] text-rose-400 mb-3 text-center">
            Запись
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-center text-neutral-800 mb-4 italic font-light">
            Записаться на пробное
          </h2>
          <p className="text-center text-neutral-400 text-sm mb-12">
            Первое занятие — бесплатно. Мы свяжемся, чтобы подтвердить время.
          </p>

          {sent ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="font-serif text-2xl text-neutral-800 italic mb-2">Отлично!</h3>
              <p className="text-neutral-500 text-sm">Мы получили вашу заявку и скоро свяжемся с вами.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Мария"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-rose-200 rounded-lg px-4 py-3 text-sm text-neutral-700 placeholder-neutral-300 focus:outline-none focus:border-rose-400 bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (900) 000-00-00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-rose-200 rounded-lg px-4 py-3 text-sm text-neutral-700 placeholder-neutral-300 focus:outline-none focus:border-rose-400 bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Удобное время
                </label>
                <select
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full border border-rose-200 rounded-lg px-4 py-3 text-sm text-neutral-700 focus:outline-none focus:border-rose-400 bg-white transition-colors appearance-none"
                >
                  <option value="">Выберите время</option>
                  <option>Утро (10:00–12:00)</option>
                  <option>День (12:00–17:00)</option>
                  <option>Вечер (17:00–21:00)</option>
                  <option>Суббота или воскресенье</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-rose-400 hover:bg-rose-500 text-white py-4 text-sm uppercase tracking-widest transition-all duration-300 rounded-lg mt-2 hover:scale-[1.02]"
              >
                Записаться на пробное занятие
              </button>
              <p className="text-center text-neutral-300 text-xs">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
