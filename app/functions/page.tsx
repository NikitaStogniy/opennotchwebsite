'use client';

import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const features = [
  {
    id: 1,
    title: 'File Drop Zone',
    description: 'Drag and drop files directly into the notch for instant access. Keep your important documents at your fingertips without cluttering your desktop.',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    borderGradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Built-in Calculator',
    description: 'Perform quick calculations without opening a separate app. Access the calculator right from the notch for seamless productivity.',
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderGradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Quick Access',
    description: 'Instant access to your tools and files. The notch becomes your personal productivity hub, always ready when you need it.',
    gradient: 'from-green-500/10 to-emerald-500/10',
    borderGradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: 'Customizable Interface',
    description: 'Tailor the appearance and behavior to match your workflow. OpenNotch adapts to your unique working style.',
    gradient: 'from-orange-500/10 to-amber-500/10',
    borderGradient: 'from-orange-500 to-amber-500'
  },
  {
    id: 5,
    title: 'Privacy Focused',
    description: 'All data stays local on your Mac. No telemetry, no cloud services, no tracking—just pure functionality.',
    gradient: 'from-red-500/10 to-rose-500/10',
    borderGradient: 'from-red-500 to-rose-500'
  },
  {
    id: 6,
    title: 'Lightweight & Fast',
    description: 'Minimal resource consumption. OpenNotch runs efficiently in the background without slowing down your system.',
    gradient: 'from-indigo-500/10 to-violet-500/10',
    borderGradient: 'from-indigo-500 to-violet-500'
  },
];

export default function FunctionsPage() {
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
            Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your MacBook&apos;s notch into a powerful productivity tool
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
