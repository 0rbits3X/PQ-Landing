// App.jsx
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import DownloadSection from './components/DownloadSection';
import InstallGuide from './components/InstallGuide';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Verified from './pages/Verified';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// The landing page
function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DownloadSection />
        <InstallGuide />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

// Legal page layout — same Navbar + Footer as the landing page
function LegalLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/privacy"
        element={
          <LegalLayout>
            <PrivacyPage />
          </LegalLayout>
        }
      />
      <Route
        path="/terms"
        element={
          <LegalLayout>
            <TermsPage />
          </LegalLayout>
        }
      />
      <Route path="/verified" element={<Verified />} />
    </Routes>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}