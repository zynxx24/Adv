import Head from "next/head";
import Link from "next/link";

const blogPosts = [
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

export default function BlogList() {
  return (
    <>
      <Head>
        <title>Blog | Powerangers</title>
        <meta
          name="description"
          content="Explore traditional Balinese food, including Adam Ungasan and Mujair Nyat Nyat Kintamani."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
        <div className="container mx-auto">
          <h1 className="text-center text-5xl font-extrabold mb-12 text-gradient">Blog</h1>
          <div className="grid gap-10 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} legacyBehavior>
                <a className="relative block bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition duration-300 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <h2 className="text-white text-xl font-semibold">{post.title}</h2>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <Link href="/" legacyBehavior>
            <a className="inline-block bg-blue-500 text-white py-2 px-4 mt-12 rounded-lg shadow-md hover:bg-blue-600 transition">
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
