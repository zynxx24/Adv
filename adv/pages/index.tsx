import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

type BlogPost = {
  slug: string;
  title: string;
  image: string;
  pdf?: string;
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
  {
    slug: "download-pdf",
    title: "Download Proposal",
    image: "https://shorturl.at/LYkVR",
    pdf: "/files/proposal.pdf",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Balinese Traditional Food - P5 Kearifan Lokal</title>
        <meta name="description" content="Explore the beauty of Balinese traditional food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="bg-gray-900/80 fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-white text-2xl font-bold">Powerangers</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#blog-posts" className="text-gray-300 hover:text-white transition">
                  Dishes
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
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('https://shorturl.at/LDiQH')" }}
      >
        <div className="bg-black/50 p-8 rounded-lg text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">Balinese Traditional Food</h1>
          <p className="text-lg text-gray-300 mb-6">
            Discover the rich flavors and heritage of Bali through its traditional dishes.
          </p>
          <Link
            href="/blog"
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            Explore Dishes
          </Link>
        </div>
      </motion.div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800 text-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="max-w-2xl mx-auto text-lg">
            We celebrate the culinary heritage of Bali by showcasing its most beloved traditional dishes.
            Through our platform, we aim to preserve and promote the cultural richness of these recipes for generations to come.
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-16 bg-gradient-to-br from-gray-800 to-black text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold mb-12">Featured Dishes</h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.div
                key={post.slug}
                className="group relative bg-white/10 backdrop-blur-xl rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500"
                whileHover={{
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.05,
                }}
              >
                {/* Image with overlay */}
                <div className="relative rounded-t-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-100">{post.title}</h3>
                  <p className="text-sm text-gray-300">
                    {post.pdf ? "Download this proposal for more info." : "Learn more about this dish."}
                  </p>
                  {/* Conditional CTA */}
                  {post.pdf ? (
                    <a
                      href={post.pdf}
                      download
                      className="text-yellow-500 hover:underline font-medium"
                    >
                      Download Proposal →
                    </a>
                  ) : (
                    <Link href={`/blog/${post.slug}`} className="text-yellow-500 hover:underline font-medium">
                      Read more →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GusWira X RPL. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
