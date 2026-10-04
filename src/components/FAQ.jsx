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