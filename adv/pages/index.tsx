import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="relative text-center"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-red-300 to-yellow-300 opacity-30 -z-10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
      <h1 className="text-4xl font-bold text-red-600 mb-6">Proposal P5</h1>
      <p className="text-lg text-gray-700 mb-8">
        Tema: Kearifan Lokal - Mujair Nyat-Nyat x Sambal Adam
      </p>
      <Link href="/pendahuluan">
        <a className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded shadow hover:bg-yellow-700">
          Mulai Presentasi
        </a>
      </Link>
    </motion.div>
  );
}
