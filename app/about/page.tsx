'use client';

import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const coreValues = [
  { name: 'Innovation', icon: '💡', color: 'from-blue-50 to-blue-100' },
  { name: 'Design', icon: '✨', color: 'from-purple-50 to-purple-100' },
  { name: 'Technology', icon: '⚙️', color: 'from-green-50 to-green-100' },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-gray-900 mb-4"
        >
          About
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mb-8"
        >
          Learn more about this project
        </motion.p>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="p-8 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mb-6 flex items-center justify-center text-3xl shadow-lg"
            >
              👤
            </motion.div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This is a placeholder for your about content. You can add your mission statement,
              story, or any other information about your project here.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The interactive MacBook interface showcases modern web technologies and creates
              an engaging user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 bg-gradient-to-br ${value.color} rounded-xl border border-gray-200 text-center cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 20 }}
                  className="text-3xl mb-2"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.name}
                </h3>
                <p className="text-sm text-gray-600">
                  Core value description
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
