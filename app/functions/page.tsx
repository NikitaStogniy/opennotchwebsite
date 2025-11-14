'use client';

import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useI18n } from '../i18n/I18nContext';

export default function FunctionsPage() {
  const { t } = useI18n();

  const features = [
    {
      id: 1,
      title: t.features.fileDropZone.title,
      description: t.features.fileDropZone.description,
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderGradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: t.features.calculator.title,
      description: t.features.calculator.description,
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderGradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: t.features.quickAccess.title,
      description: t.features.quickAccess.description,
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderGradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: t.features.customizable.title,
      description: t.features.customizable.description,
      gradient: 'from-orange-500/10 to-amber-500/10',
      borderGradient: 'from-orange-500 to-amber-500'
    },
    {
      id: 5,
      title: t.features.privacy.title,
      description: t.features.privacy.description,
      gradient: 'from-red-500/10 to-rose-500/10',
      borderGradient: 'from-red-500 to-rose-500'
    },
    {
      id: 6,
      title: t.features.lightweight.title,
      description: t.features.lightweight.description,
      gradient: 'from-indigo-500/10 to-violet-500/10',
      borderGradient: 'from-indigo-500 to-violet-500'
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
            {t.features.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className={`relative p-6 bg-gradient-to-br ${feature.gradient} rounded-2xl border border-gray-200 hover:border-gray-300 transition-all group`}
            >
              <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${feature.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
