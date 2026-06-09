import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.poehali.dev/projects/57cf5f15-da54-48e5-a91c-81be0d6788ec/files/05e22911-9dcd-48a7-8b4d-39d23962ad2b.jpg"
          alt="Студия растяжки Гибкость"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.6) saturate(0.95)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/20 via-transparent to-rose-950/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] mb-4 text-rose-200/80 font-light">
          Студия растяжки · Казань
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 italic">
          Гибкость
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90 font-light leading-relaxed mb-10">
          Откройте тело заново — мягко, безопасно и с удовольствием.
          Для начинающих девушек 25–40 лет.
        </p>
        <a
          href="#signup"
          className="inline-block bg-rose-400/90 hover:bg-rose-400 text-white px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
          style={{ borderRadius: "2px" }}
        >
          Записаться на пробное
        </a>
      </div>
    </div>
  );
}