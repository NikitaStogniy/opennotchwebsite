'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '../i18n/I18nContext';
import { Locale, localeFlags } from '../i18n/locales';

export default function InteractiveNotch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();

  const menuItems = [
    { name: t.nav.features, path: '/functions' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' },
  ];

  const languages: Locale[] = ['en', 'ru', 'es'];

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-50">
      {/* Notch Container */}
      <motion.div
        className="relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Main Notch */}
        <motion.div
          initial={false}
          animate={{
            width: isExpanded ? 480 : 180,
            height: isExpanded ? 56 : 32,
            borderBottomLeftRadius: isExpanded ? 24 : 16,
            borderBottomRightRadius: isExpanded ? 24 : 16,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
          className="bg-black shadow-xl overflow-hidden cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              // Compact State - Show Camera/Sensors
              <motion.div
                key="compact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full flex items-center justify-center gap-3 px-6"
              >
                {/* Camera */}
                <div className="w-2 h-2 rounded-full bg-gray-800 ring-2 ring-gray-700" />
                {/* Sensor dots */}
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-gray-800" />
                  <div className="w-1 h-1 rounded-full bg-gray-800" />
                </div>
              </motion.div>
            ) : (
              // Expanded State - Show Navigation and Language Switcher
              <motion.div
                key="expanded"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="h-full flex items-center justify-between px-4 gap-4"
              >
                {/* Navigation Menu */}
                <div className="flex items-center gap-2">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="group relative"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 py-2"
                        >
                          <span
                            className={`text-sm font-medium transition-colors ${
                              isActive
                                ? 'text-blue-400'
                                : 'text-gray-400 group-hover:text-white'
                            }`}
                          >
                            {item.name}
                          </span>
                        </motion.div>
                        {/* Active Indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full"
                            transition={{
                              type: 'spring',
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Language Switcher */}
                <div className="flex items-center gap-1 border-l border-gray-700 pl-3">
                  {languages.map((lang) => (
                    <motion.button
                      key={lang}
                      onClick={(e) => {
                        e.stopPropagation();
                        setLocale(lang);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-xl px-2 py-1 rounded-md transition-all ${
                        locale === lang
                          ? 'bg-blue-500/20 ring-1 ring-blue-400'
                          : 'opacity-50 hover:opacity-100 hover:bg-gray-800'
                      }`}
                      title={lang.toUpperCase()}
                    >
                      {localeFlags[lang]}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Glow Effect */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 -z-10 bg-blue-500/20 blur-xl rounded-3xl"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
