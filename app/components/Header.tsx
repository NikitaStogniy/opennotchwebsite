'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';
import { Locale, localeFlags } from '../i18n/locales';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();

  const navItems = [
    { name: t.nav.features, path: '/features' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.support, path: '/support' },
  ];

  const languages: Locale[] = ['en', 'ru', 'es'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                <div className="w-3 h-1.5 bg-white dark:bg-black rounded-sm" />
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                OpenNotch
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: Language + CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center gap-0.5">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLocale(lang)}
                    className={`text-base px-1.5 py-1 rounded-md transition-all ${
                      locale === lang
                        ? 'bg-gray-100 dark:bg-gray-800'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                    title={lang.toUpperCase()}
                  >
                    {localeFlags[lang]}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="https://github.com/NikitaStogniy/OpenNotch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                {t.nav.download}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-3 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 mt-3">
                <div className="flex items-center gap-1">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLocale(lang)}
                      className={`text-lg px-2 py-1.5 rounded-md transition-all ${
                        locale === lang
                          ? 'bg-gray-100 dark:bg-gray-800'
                          : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      {localeFlags[lang]}
                    </button>
                  ))}
                </div>
                <Link
                  href="https://github.com/NikitaStogniy/OpenNotch"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium rounded-full"
                >
                  {t.nav.download}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
