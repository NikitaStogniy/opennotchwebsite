'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { locales, Locale } from './locales';
import { Translations } from './locales/en';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'opennotch-locale';

// Helper function to get initial locale from localStorage
function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale;
  return savedLocale && locales[savedLocale] ? savedLocale : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  // Save locale to localStorage when it changes
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  };

  const value: I18nContextType = {
    locale,
    setLocale,
    t: locales[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
