import { motion } from 'framer-motion';
import Layout from '../components/layout';
import Image from 'next/image';

export default function Pendahuluan() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row items-center mb-8">
          <motion.div
            className="lg:w-1/2"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl font-bold text-red-600 mb-6">Pendahuluan</h1>
            <p className="text-gray-700">
              Projek P5 bertujuan memperkuat Profil Pelajar Pancasila dengan tema *Kearifan Lokal*. Kami
              mengangkat Mujair Nyat-Nyat dari Kintamani dan Sambal Adam dari Ungasan Bali sebagai kuliner khas
              dengan perpaduan rasa unik.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 mt-6 lg:mt-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              src="/images/pendahuluan.jpg"
              alt="Mujair Nyat-Nyat"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}
