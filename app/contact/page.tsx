'use client';

import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const contactChannels = [
  {
    title: 'GitHub',
    description: 'Report issues, contribute code, or browse the source',
    link: 'https://github.com/NikitaStogniy/OpenNotch',
    gradient: 'from-gray-500/10 to-slate-500/10',
    borderGradient: 'from-gray-500 to-slate-500'
  },
  {
    title: 'Discussions',
    description: 'Join the community and share your ideas',
    link: 'https://github.com/NikitaStogniy/OpenNotch/discussions',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    borderGradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Email',
    description: 'Get in touch for business inquiries',
    link: 'mailto:hello@opennotch.com',
    gradient: 'from-purple-500/10 to-pink-500/10',
    borderGradient: 'from-purple-500 to-pink-500'
  },
];

export default function ContactPage() {
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
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with the OpenNotch community and team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactChannels.map((channel, index) => (
            <motion.a
              key={channel.title}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`relative p-6 bg-gradient-to-br ${channel.gradient} rounded-2xl border border-gray-200 hover:border-gray-300 transition-all group`}
            >
              <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${channel.borderGradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {channel.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {channel.description}
                </p>
                <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                  <span className="group-hover:translate-x-1 transition-transform">Learn more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Join the Community
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              OpenNotch is built by contributors from around the world. Whether you&apos;re fixing bugs,
              adding features, or improving documentation, your contribution matters.
            </p>
            <a
              href="https://github.com/NikitaStogniy/OpenNotch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
