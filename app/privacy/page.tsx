'use client';

import { motion } from 'framer-motion';
import { useI18n } from '../i18n/I18nContext';

export default function PrivacyPage() {
  const { t } = useI18n();

  return (
    <section className="max-w-3xl mx-auto px-6 pt-16 pb-32 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
          {t.privacy.title}
        </h1>
        <p className="text-sm text-gray-400 dark:text-gray-500 mb-8">
          {t.privacy.lastUpdated}
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-lg">
          {t.privacy.intro}
        </p>

        <div className="space-y-8">
          {t.privacy.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {section.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
