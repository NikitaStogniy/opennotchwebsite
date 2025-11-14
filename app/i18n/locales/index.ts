import { en } from './en';
import { ru } from './ru';
import { es } from './es';

export const locales = {
  en,
  ru,
  es,
} as const;

export type Locale = keyof typeof locales;

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  ru: '🇷🇺',
  es: '🇪🇸',
};
