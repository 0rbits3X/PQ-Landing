export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-400/20 dark:bg-brand-600/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + CTAs */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-sm font-medium">
              🚀 Not on Play Store — direct APK download
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Turn your study notes &amp; photos into{' '}
              <span className="bg-gradient-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
                interactive quizzes
              </span>{' '}
              instantly with AI
            </h1>

            <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
              Snap a photo of your notes or textbook. PhotoQuizzer uses AI to
              generate multiple-choice quizzes and flashcards in seconds.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#download"
                onClick={(e) => scrollTo(e, '#download')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-white font-semibold text-base shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-0.5 transition-all"
              >
                ⬇ Download APK
              </a>
              <a
                href="#features"
                onClick={(e) => scrollTo(e, '#features')}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-base hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                See how it works
              </a>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <div className="relative w-[280px] h-[560px] rounded-[2.5rem] bg-slate-900 dark:bg-slate-800 p-3 shadow-2xl shadow-brand-600/20">
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 dark:bg-slate-950 rounded-b-2xl z-10" />

                {/* Screen */}
                <div className="w-full h-full rounded-[2rem] bg-white dark:bg-slate-950 overflow-hidden flex flex-col">
                  {/* App header */}
                  <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-5 py-4 flex items-center justify-between">
                    <span className="text-white font-bold text-sm">📷 PhotoQuizzer</span>
                    <span className="text-xs bg-white/20 text-white px-2.5 py-1 rounded-full font-medium">
                      Credits: 5
                    </span>
                  </div>

                  {/* Quiz card */}
                  <div className="flex-1 p-5 flex flex-col">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                      Quiz · Biology
                    </p>
                    <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                      What organelle is the powerhouse of the cell?
                    </p>

                    <div className="mt-4 space-y-2.5">
                      {[
                        { label: 'Nucleus', correct: false },
                        { label: 'Mitochondria', correct: true },
                        { label: 'Ribosome', correct: false },
                        { label: 'Golgi apparatus', correct: false },
                      ].map((opt, i) => (
                        <div
                          key={opt.label}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium transition-colors ${
                            i === 1
                              ? 'border-green-400 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                              : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              i === 1
                                ? 'bg-green-500 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                            }`}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          {opt.label}
                          {i === 1 && <span className="ml-auto">✓</span>}
                        </div>
                      ))}
                    </div>

                    <button className="mt-auto w-full py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 transition-colors">
                      Submit Answer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
