import { motion } from 'framer-motion';
import Layout from '../components/layout';

export default function Penutup() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-red-600 mb-6">Penutup</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Simpulan</h2>
          <p className="text-gray-700">
            Kuliner khas Bali seperti Mujair Nyat-Nyat dan Sambal Adam adalah bagian dari 
            warisan budaya yang harus dilestarikan.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Saran</h2>
          <p className="text-gray-700">
            Proposal ini masih jauh dari sempurna. Kami menerima kritik dan saran untuk 
            perbaikan di masa mendatang.
          </p>
        </section>
      </motion.div>
    </Layout>
  );
}
