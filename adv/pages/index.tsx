// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

type BlogPost = {
  slug: string;
  title: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    slug: "adam-ungasan",
    title: "Ungasan Traditional Food - Adam",
    image: "https://shorturl.at/LYkVR",
  },
  {
    slug: "mujair-nyat-nyat-kintamani",
    title: "Kintamani Traditional Food - Mujair Nyat Nyat",
    image: "https://shorturl.at/LYkVR",
  },
];

export default function Home() {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Powerangers - P5 Kearifan Lokal</title>
        <meta
          name="description"
          content="Adam Ungasan and Mujair Nyat Nyat Kintamani - Traditional Balinese Food"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="bg-black/80 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-white text-2xl font-bold">Powerangers</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:text-white transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="#about" legacyBehavior>
                  <a className="text-gray-300 hover:text-white transition-colors">About</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-[url('https://shorturl.at/LDiQH')] bg-cover bg-center bg-no-repeat text-white flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
            Group Powerangers
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Showcasing the beauty of Bali's traditional cuisine
          </p>
          <a
            href="#blog-posts"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
          >
            Explore Now
          </a>
        </div>
      </motion.div>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-gradient-to-b from-gray-800 to-black text-gray-300 text-center"
      >
        <div className="container mx-auto">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed"
          >
            We have chosen this menu to showcase the traditional regional cuisine of Bali while
            preserving its rich cultural heritage passed down through generations. Through the P5
            Local Wisdom initiative, we aim to promote and safeguard these local delicacies.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold mb-12">Featured Dishes</h2>
          <motion.ul
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delayChildren: 0.3, staggerChildren: 0.2 },
              },
            }}
          >
            {blogPosts.map((post) => (
              <motion.li
                key={post.slug}
                className="group bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              >
                {/* Blog Post Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-md mb-4 group-hover:opacity-90 transition-opacity duration-300"
                />
                {/* Blog Post Title */}
                <Link href={`/blog/${post.slug}`} legacyBehavior>
                  <a className="block text-2xl font-semibold text-center text-gray-200 group-hover:text-white transition-colors duration-300">
                    {post.title}
                  </a>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Proposal Card Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Download Our Proposal</h2>
          <div className="max-w-xl mx-auto bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Proposal Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-center"
            >
              <img
                src="https://shorturl.at/LDiQH"
                alt="Proposal Cover"
                className="w-40 h-40 object-cover mx-auto rounded-full shadow-lg"
              />
            </motion.div>
            {/* Proposal Content */}
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Learn about Bali's culinary heritage and traditions with our detailed proposal. Through
              the P5 Local Wisdom initiative, we aim to preserve these cultural treasures.
            </p>
            {/* Download Button */}
            <a
              href="/files/proposal.pdf"
              download
              className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
            >
              Download Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6">
        <div className="container mx-auto">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Powerangers. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
