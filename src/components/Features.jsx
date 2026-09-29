export default function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Quizzes',
      desc: 'Snap a photo of notes or textbooks and get interactive multiple-choice quizzes and flashcards in seconds.',
    },
    {
      icon: '💰',
      title: 'Earn Credits',
      desc: 'Start with 5 free credits. Watch a short rewarded ad or redeem a promo code to keep scanning.',
    },
    {
      icon: '🎨',
      title: 'Light & Dark Mode',
      desc: 'A beautiful dual-theme interface that\u2019s easy on the eyes, day or night.',
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      desc: 'Your notes and account are protected with industry-standard authentication and row-level security.',
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Features you\u2019ll love
        </h2>
        <p className="mt-3 text-center text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Everything you need to turn study material into effective learning.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg text-slate-900 dark:text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
