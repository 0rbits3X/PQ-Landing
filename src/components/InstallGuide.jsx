export default function InstallGuide() {
  const steps = [
    {
      icon: '📥',
      title: 'Download the APK',
      desc: 'Tap the download button above; PhotoQuizzer.apk saves to your phone\u2019s Downloads folder via Chrome, Firefox, or Edge.',
    },
    {
      icon: '🔓',
      title: 'Allow installation',
      desc: 'When your phone shows a security warning, tap Settings and enable \u201CAllow from this source\u201D for your browser. This appears because the app isn\u2019t from the Play Store \u2014 it is safe.',
    },
    {
      icon: '📲',
      title: 'Install',
      desc: 'Swipe down your notifications or open your Downloads/file manager, tap PhotoQuizzer.apk, and tap Install.',
    },
    {
      icon: '🚀',
      title: 'Launch & play',
      desc: 'Open PhotoQuizzer, sign up with your email, and get 5 free credits instantly \u2014 scan your first notes right away.',
    },
  ];

  return (
    <section id="install" className="py-20 sm:py-28 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          How to install
        </h2>
        <p className="mt-3 text-center text-slate-600 dark:text-slate-400">
          2 minutes — that\u2019s all it takes.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative reveal rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-sm border border-slate-200 dark:border-slate-700"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-white font-bold text-sm flex items-center justify-center shadow-md">
                {i + 1}
              </div>

              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-3 font-semibold text-slate-900 dark:text-white text-base">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {s.desc}
              </p>

              {/* Arrow on desktop */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-brand-300 text-2xl">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Warning callout */}
        <div className="mt-10 mx-auto max-w-2xl reveal">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <span className="text-xl shrink-0">⚠</span>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <span className="font-semibold">Don\u2019t see the install button?</span>{' '}
              Open Settings → Apps → Chrome → Install unknown apps → Allow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
