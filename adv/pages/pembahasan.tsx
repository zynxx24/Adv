import { motion } from 'framer-motion';
import Layout from '../components/layout';

export default function Pembahasan() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-red-600 mb-6">Pembahasan</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Mujair Nyat-Nyat</h2>
          <p className="text-gray-700 mb-4">
            Makanan khas Kintamani berbahan dasar ikan mujair yang dipadukan dengan 
            rempah khas Bali.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>1 kg ikan mujair</li>
            <li>5 siung bawang putih</li>
            <li>...</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Sambal Adam</h2>
          <p className="text-gray-700 mb-4">
            Sambal khas Ungasan dengan perpaduan kacang panjang, kemangi, dan bumbu lokal.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Kacang panjang secukupnya</li>
            <li>Segenggam kemangi</li>
            <li>...</li>
          </ul>
        </section>
      </motion.div>
    </Layout>
  );
}
