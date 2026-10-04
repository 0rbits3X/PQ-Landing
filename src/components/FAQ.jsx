import { useState } from 'react';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: 'Is it free?',
      a: 'Yes — you get 5 free credits on signup. Credits are earned via short rewarded ads or promo codes, so you can keep scanning without paying.',
    },
    {
      q: 'Why isn’t it on Play Store?',
      a: 'PhotoQuizzer is distributed directly for now. The APK is signed and safe — you download it straight from this website.',
    },
    {
      q: 'What do I need?',
      a: 'Any Android 7.0+ phone and an internet connection for scanning your notes. That’s it.',
    },
  ];

  const badges = [
    '✅ 5 free credits on signup',
    '🎯 Built for students 13+',
    '⚡ Runs great on Android 7.0+ and low-RAM phones',
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {badges.map((b) => (
            <span
              key={b}
              className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
            >
              {b}
            </span>
          ))}
        </div>

        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Frequently asked questions
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="reveal rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-slate-900 dark:text-white">
                  {f.q}
                </span>
                <span
                  className={`text-brand-500 text-xl transition-transform ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-slate-600 dark:text-slate-400">
                  {f.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
