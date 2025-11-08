'use client';

import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const features = [
  { id: 1, icon: '⚡', title: 'Fast Performance', color: 'from-blue-400 to-blue-600' },
  { id: 2, icon: '🎨', title: 'Beautiful Design', color: 'from-purple-400 to-purple-600' },
  { id: 3, icon: '🚀', title: 'Easy to Use', color: 'from-green-400 to-green-600' },
  { id: 4, icon: '🔧', title: 'Customizable', color: 'from-orange-400 to-orange-600' },
];

export default function FunctionsPage() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold text-gray-900 mb-4"
        >
          Functions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 mb-8"
        >
          Explore the powerful features and capabilities
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl mb-4 flex items-center justify-center text-2xl shadow-lg`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                Description of this amazing feature goes here
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
