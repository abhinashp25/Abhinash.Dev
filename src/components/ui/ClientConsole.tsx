'use client';

import { useEffect, useRef } from 'react';

export default function ClientConsole() {
  const isLogged = useRef(false);

  useEffect(() => {
    // Prevent running multiple times in StrictMode or SSR
    if (typeof window === 'undefined' || isLogged.current) return;
    isLogged.current = true;

    const mainHeaderStyle = [
      'color: #ffffff',
      'background: #050505',
      'font-size: 24px',
      'font-weight: 800',
      'padding: 20px 40px',
      'border-radius: 12px',
      'border: 1px solid rgba(255,255,255,0.1)',
      'text-shadow: 0 0 20px rgba(255, 255, 255, 0.5)',
      'font-family: Inter, system-ui, sans-serif'
    ].join(';');

    const subtitleStyle = [
      'color: #a1a1aa',
      'font-size: 14px',
      'padding: 10px 0',
      'font-family: monospace',
      'line-height: 1.6'
    ].join(';');

    const linkStyle = [
      'color: #38bdf8',
      'font-size: 14px',
      'font-weight: 600',
      'padding: 5px 0',
      'font-family: monospace'
    ].join(';');

    const asciiArt = `
    █████╗ ██████╗ ██╗  ██╗██╗███╗   ██╗ █████╗ ███████╗██╗  ██╗
   ██╔══██╗██╔══██╗██║  ██║██║████╗  ██║██╔══██╗██╔════╝██║  ██║
   ███████║██████╔╝███████║██║██╔██╗ ██║███████║███████╗███████║
   ██╔══██║██╔══██╗██╔══██║██║██║╚██╗██║██╔══██║╚════██║██╔══██║
   ██║  ██║██████╔╝██║  ██║██║██║ ╚████║██║  ██║███████║██║  ██║
   ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
    `;

    console.log('%c' + asciiArt, 'color: #38bdf8; font-weight: bold; font-family: monospace;');
    console.log('%c👋 Hello there, fellow developer!', mainHeaderStyle);
    console.log(
      '%cIt looks like you enjoy inspecting code as much as I do.\n\nI engineered this portfolio from the ground up using:\n⚡ Next.js 14 (App Router)  \n🎨 Tailwind CSS & Framer Motion \n🤖 Integrated AI endpoints',
      subtitleStyle
    );
    console.log(
      '%cIf you are looking for a versatile Full Stack Developer & AI Engineer who ships scalable, production-grade applications, let\'s connect!\n\nEmail  : abhinashpradhan7658@gmail.com\nGitHub : https://github.com/abhinashp25\nLinkedIn : https://www.linkedin.com/in/abhinash-pradhan-74b389294/',
      linkStyle
    );
  }, []);

  return null;
}
