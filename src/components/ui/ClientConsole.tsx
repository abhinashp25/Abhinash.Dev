'use client';

import { useEffect } from 'react';

export default function ClientConsole() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;

    // Prevent running multiple times in StrictMode
    if ((window as any)._consoleLogged) return;
    (window as any)._consoleLogged = true;

    const style1 = [
      'color: #ffffff',
      'background: #0f172a',
      'font-size: 24px',
      'font-weight: bold',
      'padding: 20px 40px',
      'border-radius: 8px',
      'border: 1px solid #6366f1',
      'text-shadow: 0 0 10px rgba(99, 102, 241, 0.5)',
      'font-family: inherit'
    ].join(';');

    const style2 = [
      'color: #94a3b8',
      'font-size: 14px',
      'padding: 10px 0',
      'font-family: monospace'
    ].join(';');

    const style3 = [
      'color: #38bdf8',
      'font-size: 14px',
      'font-weight: bold',
      'padding: 5px 0',
      'font-family: monospace'
    ].join(';');

    console.log('%c👋 Hello there, fellow developer!', style1);
    console.log(
      '%cIt looks like you enjoy inspecting code.\nI engineered this portfolio with Next.js, Framer Motion, and Tailwind CSS.\nClean architecture and attention to detail are my priorities.',
      style2
    );
    console.log(
      '%cLooking for a versatile Full Stack / AI Engineer?\nLet\'s connect! https://github.com/abhinashp25',
      style3
    );

  }, []);

  return null;
}
