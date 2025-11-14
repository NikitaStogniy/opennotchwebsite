'use client';

import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { useI18n } from '../i18n/I18nContext';

export default function AboutPage() {
  const { t } = useI18n();

  const coreValues = [
    {
      name: t.about.coreValues.openSource.name,
      description: t.about.coreValues.openSource.description,
      gradient: 'from-blue-500/10 to-cyan-500/10',
      borderGradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: t.about.coreValues.privacyFirst.name,
      description: t.about.coreValues.privacyFirst.description,
      gradient: 'from-purple-500/10 to-pink-500/10',
      borderGradient: 'from-purple-500 to-pink-500'
    },
    {
      name: t.about.coreValues.freeForeever.name,
      description: t.about.coreValues.freeForeever.description,
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderGradient: 'from-green-500 to-emerald-500'
    },
  ];

  const contributions = [
    {
      name: t.about.contribute.codeContributions.name,
      description: t.about.contribute.codeContributions.description,
      link: 'https://github.com/NikitaStogniy/OpenNotch/pulls'
    },
    {
      name: t.about.contribute.bugReports.name,
      description: t.about.contribute.bugReports.description,
      link: 'https://github.com/NikitaStogniy/OpenNotch/issues'
    },
    {
      name: t.about.contribute.featureIdeas.name,
      description: t.about.contribute.featureIdeas.description,
      link: 'https://github.com/NikitaStogniy/OpenNotch/discussions'
    },
    {
      name: t.about.contribute.documentation.name,
      description: t.about.contribute.documentation.description,
      link: 'https://github.com/NikitaStogniy/OpenNotch/wiki'
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 mb-6">
            {t.about.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-medium mb-6">
                {t.about.openSourceBadge}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t.about.makingNotchUseful}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                {t.about.description1}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                {t.about.description2}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/NikitaStogniy/OpenNotch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  {t.about.viewGithub}
                </a>
                <a
                  href="https://github.com/NikitaStogniy/OpenNotch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all font-medium"
                >
                  {t.about.starGithub}
                </a>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`relative p-6 bg-gradient-to-br ${value.gradient} rounded-2xl border border-gray-200 hover:border-gray-300 transition-all group`}
              >
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${value.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.about.contribute.title}</h2>
              <p className="text-gray-600">{t.about.contribute.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contributions.map((contribution, index) => (
                <motion.a
                  key={contribution.name}
                  href={contribution.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {contribution.name}
                      </h3>
                      <p className="text-sm text-gray-600">{contribution.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
