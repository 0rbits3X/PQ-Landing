export default function HowItWorks() {
  const steps = [
    {
      icon: '📸',
      title: 'Snap a photo',
      desc: 'Take a picture of your notes or textbook pages directly in the app.',
    },
    {
      icon: '🤖',
      title: 'AI generates a quiz',
      desc: 'Gemini AI analyzes the content and creates quizzes & flashcards instantly.',
    },
    {
      icon: '🏆',
      title: 'Take the quiz',
      desc: 'Answer interactive questions and track your score as you study.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          How it works
        </h2>
        <p className="mt-3 text-center text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
          Three simple steps from study notes to interactive quiz.
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative reveal rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-200 dark:border-slate-700 text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {s.desc}
              </p>
              {i < steps.length - 1 && (
                <span className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 text-brand-400 text-2xl">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
