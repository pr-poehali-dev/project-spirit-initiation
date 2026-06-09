const benefits = [
  {
    icon: "🌸",
    title: "Подходит с нуля",
    desc: "Не нужно никакой подготовки — занятия разработаны специально для начинающих. Мы идём в твоём темпе.",
  },
  {
    icon: "🤍",
    title: "Безопасные техники",
    desc: "Все упражнения выполняются под наблюдением тренера. Никакой боли — только приятное растяжение.",
  },
  {
    icon: "✨",
    title: "Маленькие группы",
    desc: "Не более 8 человек в группе — тренер уделяет внимание каждой. Уютная атмосфера, никакого стресса.",
  },
  {
    icon: "🌿",
    title: "Результат за месяц",
    desc: "Уже через 4 занятия почувствуете разницу: легче в движениях, лучше осанка, меньше напряжения.",
  },
];

const reviews = [
  {
    name: "Алина, 31 год",
    text: "Пришла совсем деревянной — не могла дотянуться до пальцев ног. Через месяц делаю шпагат! Тренеры — золото.",
  },
  {
    name: "Марина, 38 лет",
    text: "Искала что-то мягкое после декрета. Здесь именно то: спокойная атмосфера, никто не торопит, всё объясняют.",
  },
  {
    name: "Катя, 26 лет",
    text: "Занимаюсь уже полгода. Спина перестала болеть, стала более гибкой и уверенной в себе. Очень рекомендую!",
  },
];

export default function Featured() {
  return (
    <>
      {/* Преимущества */}
      <section
        id="about"
        className="bg-[#fdf8f6] px-6 py-20 lg:py-28"
      >
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-xs tracking-[0.3em] text-rose-400 mb-3 text-center">
            Почему мы
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-center text-neutral-800 mb-16 italic font-light">
            Студия, созданная для вас
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-rose-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">{b.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Расписание */}
      <section id="schedule" className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-xs tracking-[0.3em] text-rose-400 mb-3 text-center">
            На неделю
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-center text-neutral-800 mb-16 italic font-light">
            Расписание занятий
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-rose-100">
                  <th className="text-left py-3 px-4 text-neutral-400 font-normal uppercase tracking-wide text-xs">День</th>
                  <th className="text-left py-3 px-4 text-neutral-400 font-normal uppercase tracking-wide text-xs">Время</th>
                  <th className="text-left py-3 px-4 text-neutral-400 font-normal uppercase tracking-wide text-xs">Занятие</th>
                  <th className="text-left py-3 px-4 text-neutral-400 font-normal uppercase tracking-wide text-xs">Уровень</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { day: "Понедельник", time: "10:00", name: "Стретчинг для начинающих", level: "Новички" },
                  { day: "Понедельник", time: "19:00", name: "Вечерний стретчинг", level: "Все уровни" },
                  { day: "Среда", time: "10:00", name: "Стретчинг для начинающих", level: "Новички" },
                  { day: "Среда", time: "19:00", name: "Йога и растяжка", level: "Все уровни" },
                  { day: "Пятница", time: "10:00", name: "Глубокий стретчинг", level: "Все уровни" },
                  { day: "Пятница", time: "19:00", name: "Вечерний стретчинг", level: "Все уровни" },
                  { day: "Суббота", time: "11:00", name: "Стретчинг выходного дня", level: "Все уровни" },
                  { day: "Воскресенье", time: "11:00", name: "Расслабляющий стретчинг", level: "Все уровни" },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-rose-50 hover:bg-rose-50/50 transition-colors duration-150"
                  >
                    <td className="py-4 px-4 text-neutral-700 font-medium">{row.day}</td>
                    <td className="py-4 px-4 text-rose-500 font-semibold">{row.time}</td>
                    <td className="py-4 px-4 text-neutral-700">{row.name}</td>
                    <td className="py-4 px-4">
                      <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-xs">
                        {row.level}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="prices" className="bg-[#fdf8f6] px-6 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-xs tracking-[0.3em] text-rose-400 mb-3 text-center">
            Абонементы
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-center text-neutral-800 mb-16 italic font-light">
            Цены
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Разовое",
                price: "700 ₽",
                desc: "Одно занятие",
                features: ["Любое занятие из расписания", "Подходит для знакомства"],
                highlighted: false,
              },
              {
                name: "8 занятий",
                price: "4 800 ₽",
                desc: "600 ₽ за занятие",
                features: ["Действует 2 месяца", "Любые дни и время", "Самый популярный"],
                highlighted: true,
              },
              {
                name: "Безлимит",
                price: "6 900 ₽",
                desc: "В месяц",
                features: ["Неограниченные занятия", "Приоритетная запись", "Лучшая цена за занятие"],
                highlighted: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col ${
                  plan.highlighted
                    ? "bg-rose-400 text-white shadow-xl shadow-rose-200 scale-105"
                    : "bg-white border border-rose-100 shadow-sm"
                }`}
              >
                <p className={`text-xs uppercase tracking-widest mb-2 ${plan.highlighted ? "text-rose-100" : "text-rose-400"}`}>
                  {plan.name}
                </p>
                <p className={`text-4xl font-bold mb-1 ${plan.highlighted ? "text-white" : "text-neutral-800"}`}>
                  {plan.price}
                </p>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-rose-100" : "text-neutral-400"}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className={`text-sm flex items-center gap-2 ${plan.highlighted ? "text-rose-50" : "text-neutral-500"}`}>
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#signup"
                  className={`mt-8 text-center py-3 text-sm uppercase tracking-widest transition-all duration-300 rounded-sm ${
                    plan.highlighted
                      ? "bg-white text-rose-500 hover:bg-rose-50"
                      : "bg-rose-400 text-white hover:bg-rose-500"
                  }`}
                >
                  Записаться
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase text-xs tracking-[0.3em] text-rose-400 mb-3 text-center">
            Отзывы
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-center text-neutral-800 mb-16 italic font-light">
            Говорят наши девочки
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-[#fdf8f6] rounded-2xl p-8 border border-rose-100">
                <p className="text-2xl text-rose-300 mb-4 font-serif italic">"</p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">{r.text}</p>
                <p className="text-neutral-800 font-medium text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
