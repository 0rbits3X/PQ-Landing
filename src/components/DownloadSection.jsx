import { APK_FILE_PATH, APK_SIZE_MB } from '../config';

export default function DownloadSection() {
  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Download PhotoQuizzer
        </h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Get the APK directly from this site — no Play Store, no sign-up needed
          to download.
        </p>

        <div className="mt-10 reveal">
          <a
            href={APK_FILE_PATH}
            download
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-white font-bold text-lg sm:text-xl shadow-xl shadow-brand-600/30 hover:shadow-2xl hover:shadow-brand-600/40 hover:-translate-y-0.5 transition-all"
          >
            ⬇ Download PhotoQuizzer.apk
          </a>

          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Free • ~{APK_SIZE_MB} MB • Android 7.0+ • No sign-up needed to
            download
          </p>
        </div>

        {/* File card */}
        <div className="mt-10 mx-auto max-w-md reveal">
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center text-2xl">
              📦
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-900 dark:text-white text-sm">
                PhotoQuizzer.apk
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                v1.0.0 • ~{APK_SIZE_MB} MB • ✅ Virus-free, directly distributed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
