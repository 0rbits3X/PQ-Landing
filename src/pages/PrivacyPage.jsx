// src/pages/PrivacyPage.jsx
export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-extrabold mt-6 mb-2">Privacy Policy</h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">Last updated: October 2026</p>

      <p className="mb-4">
        This Privacy Policy explains how PhotoQuizzer ("we", "us", "our") collects, uses, and protects
        your information when you use our Android application and website
        (<a href="https://photoquizzer.pages.dev" className="text-purple-600 dark:text-purple-400">photoquizzer.pages.dev</a>).
        By using PhotoQuizzer, you agree to this policy.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-purple-100 dark:border-purple-950 pb-2">1. Information We Collect</h2>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 my-4">
        <strong>Account information.</strong> When you create an account, we collect your{" "}
        <strong>email address</strong> and an encrypted password (stored by our authentication provider,
        Supabase). We do not store passwords in readable form.
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 my-4">
        <strong>Photos of your notes.</strong> When you scan or upload study notes, the photo is sent to
        Google's Gemini AI service to generate your quiz and flashcards. Photos are processed to produce
        the study material and are <strong>not stored on our servers</strong> after processing.
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 my-4">
        <strong>Generated content.</strong> The quizzes and flashcards generated from your notes, and
        lightweight embeddings used to improve future results, are stored in our database and associated
        with your account.
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 my-4">
        <strong>App preferences.</strong> Your display name, chosen avatar, theme preference, and referral
        status are stored <strong>locally on your device</strong>. Deleting the app removes them.
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 my-4">
        <strong>Advertising data.</strong> We show ads through Unity LevelPlay (ironSource/Unity Ads).
        Ad partners may collect device identifiers (such as the advertising ID), approximate location,
        and device information to serve and measure ads. This is governed by their own privacy policies
        and your device's ad settings.
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-purple-100 dark:border-purple-950 pb-2">2. How We Use Information</h2>
      <p className="mb-4">
        We use collected information to: operate your account and save your credits; generate quizzes and
        flashcards from your notes; show advertisements that keep the app free; provide support when you
        contact us; and improve the app's performance and features.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-purple-100 dark:border-purple-950 pb-2">3. Third-Party Services</h2>
      <p className="mb-4">We rely on the following third parties, each with their own privacy policies:</p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Supabase</strong> — authentication and database (supabase.com/privacy)</li>
        <li><strong>Google Gemini API</strong> — AI processing of note photos (policies.google.com/privacy)</li>
        <li><strong>Unity LevelPlay / ironSource / Unity Ads</strong> — advertising (unity.com/legal/privacy-policy)</li>
        <li><strong>Cloudflare</strong> — website hosting</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-purple-100 dark:border-purple-950 pb-2">4. Children's Privacy</h2>
      <p className="mb-4">
        PhotoQuizzer is not directed to children under 13, does not knowingly collect personal
        information from children under 13, and requires an email account to use. If you believe a
        child under 13 has created an account, contact us and we will delete it.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-purple-100 dark:border-purple-950 pb-2">5. Data Retention &amp; Deletion</h2>
      <p className="mb-4">
        Your account data (email, credits, generated content) is kept while your account is active.
        You may request deletion of your account and all associated data at any time by emailing us
        at the address below, and we will process the request promptly.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-purple-100 dark:border-purple-950 pb-2">6. Your Rights</h2>
      <p className="mb-4">
        You may access, correct, or delete your personal information; withdraw consent; or request a
        copy of your data by contacting us. We respond to all requests promptly.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-purple-100 dark:border-purple-950 pb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this policy as the app evolves. The "Last updated" date above will always show
        the current version, and significant changes will be reflected in the app.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 border-b-2 border-purple-100 dark:border-purple-950 pb-2">8. Contact Us</h2>
      <p className="mb-4">
        Questions about this policy? Email us at{" "}
        <a href="mailto:orbits3x@gmail.com" className="text-purple-600 dark:text-purple-400">orbits3x@gmail.com</a>.
      </p>
    </div>
  );
}
