// src/pages/Verified.jsx
export default function Verified() {
  // Supabase adds the result to the URL hash. Expired or reused links include "error".
  const failed = window.location.hash.includes('error');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 24,
        background: '#0f172a',
        color: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      <div>
        <h1 style={{ fontSize: 28, margin: '0 0 12px' }}>
          {failed ? '⚠️ Link expired' : '✅ Email verified!'}
        </h1>
        <p style={{ color: '#cbd5e1', fontSize: 17, lineHeight: 1.5 }}>
          {failed
            ? 'This link has expired or was already used. Open the app and sign in, or sign up again to get a new link.'
            : 'Your PhotoQuizzer account is ready. Go back to the app and sign in.'}
        </p>
      </div>
    </div>
  );
}