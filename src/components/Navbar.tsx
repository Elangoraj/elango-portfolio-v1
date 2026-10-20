'use client';

import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { clsx } from 'clsx';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
  { href: '#speaking', label: 'Speaking' },
  { href: '#education', label: 'Education' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav
      className={clsx(
        'fixed top-0 w-full z-50 backdrop-blur-md transition-colors border-b',
        scrolled || open
          ? 'bg-white/85 dark:bg-slate-950/85 border-slate-200 dark:border-slate-800'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto py-4 px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" onClick={close} className="text-xl font-bold font-mono tracking-tight text-slate-900 dark:text-white">
          Elango<span className="text-sky-600 dark:text-sky-400">.Raj</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity font-semibold"
          >
            Contact
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 rounded-md text-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <ul id="mobile-menu" className="md:hidden px-6 pb-6 space-y-1 text-base font-medium text-slate-700 dark:text-slate-200">
          {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close} className="block py-2 hover:text-sky-600 dark:hover:text-sky-400">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
