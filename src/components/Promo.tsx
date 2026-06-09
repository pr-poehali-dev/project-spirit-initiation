import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";

const BACKEND_URL = "https://functions.poehali.dev/d723739f-359c-431c-ba3b-6c15b0ba02b5";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  const [form, setForm] = useState({ name: "", phone: "", time: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Не удалось отправить заявку. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
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
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="bg-rose-400 hover:bg-rose-500 disabled:opacity-60 text-white py-4 text-sm uppercase tracking-widest transition-all duration-300 rounded-lg mt-2 hover:scale-[1.02] disabled:hover:scale-100"
              >
                {loading ? "Отправляем..." : "Записаться на пробное занятие"}
              </button>
              <p className="text-center text-neutral-300 text-xs">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Карта и адрес */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="uppercase text-xs tracking-[0.3em] text-rose-400 mb-3 text-center">
            Как нас найти
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-center text-neutral-800 mb-16 italic font-light">
            Мы в Казани
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="w-full lg:w-2/3 rounded-2xl overflow-hidden shadow-sm border border-rose-100 h-[400px]">
              <iframe
                src="https://yandex.ru/map-widget/v1/?text=%D1%83%D0%BB.%20%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD%D0%B0%2C%2010%2C%20%D0%9A%D0%B0%D0%B7%D0%B0%D0%BD%D1%8C&z=16&l=map"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Карта — студия Гибкость"
                allowFullScreen
              />
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-6 pt-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-rose-400 mb-2">Адрес</p>
                <p className="text-neutral-800 font-medium">ул. Пушкина, 10</p>
                <p className="text-neutral-400 text-sm">Казань</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-rose-400 mb-2">Режим работы</p>
                <p className="text-neutral-700 text-sm">Пн–Пт: 9:00–21:00</p>
                <p className="text-neutral-700 text-sm">Сб–Вс: 10:00–18:00</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-rose-400 mb-2">Телефон</p>
                <a href="tel:+78001234567" className="text-neutral-800 font-medium hover:text-rose-400 transition-colors">
                  +7 (800) 123-45-67
                </a>
              </div>
              <a
                href="#signup"
                className="inline-block text-center bg-rose-400 hover:bg-rose-500 text-white py-3 px-6 text-sm uppercase tracking-widest transition-all duration-300 rounded-lg"
              >
                Записаться
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
