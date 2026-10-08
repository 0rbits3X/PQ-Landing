// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-sm">
              📷
            </span>
            PhotoQuizzer
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="/privacy" className="hover:text-brand-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-brand-400 transition-colors">
              Terms & Conditions
            </a>
            <a
              href="mailto:photoquizzersupport@gmail.com?subject=PhotoQuizzer%20Support"
              className="hover:text-brand-400 transition-colors"
            >
              Contact support
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 space-y-3 text-sm text-center">
          <p>
            © {year} Orbits3X. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto">
            PhotoQuizzer is not affiliated with Google, Unity, or Supabase.
            Gemini is a trademark of Google.
          </p>
          <p className="text-sm">Made with 💜 for students.</p>
        </div>
      </div>
    </footer>
  );
}
