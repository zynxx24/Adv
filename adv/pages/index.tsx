// pages/index.tsx
import Head from "next/head";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
};

const blogPosts: BlogPost[] = [
  { slug: "adam-ungasan", title: "Ungasan Traditional Food - Adam" },
  { slug: "moreng-jimbaran", title: "Jimbaran Traditional Food - Moreng" },
];

export default function Home() {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Poweranggers - P5 Kearifan Lokal</title>
        <meta
          name="description"
          content="Adam Ungasan and Moreng Jimbaran - Traditional Balinese Food"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Content */}
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto p-6">
          {/* Header */}
          <div className="text-center">
            <p className="text-lg italic mb-4">
              This website was created for the P5 initiative and uses Vercel for deployment.
            </p>
            <h1 className="text-4xl font-bold mb-4 drop-shadow-md">
              Group Poweranggers
            </h1>
            <img
              src="https://bit.ly/3CLSPre"
              alt="Group Poweranggers"
              className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Description */}
          <article className="mt-8 text-center max-w-3xl mx-auto text-lg leading-relaxed bg-white text-gray-800 p-6 rounded-xl shadow-md">
            We have chosen this menu to showcase the traditional regional
            cuisine of Bali while preserving its rich cultural heritage passed
            down through generations. Through the implementation of the P5 Local
            Wisdom initiative, we aspire to promote and safeguard these local
            delicacies, ensuring they continue to thrive and remain a vital part
            of our cultural identity for generations to come.
          </article>

          {/* Blog Posts */}
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
          <li
               key={post.slug}
               className="bg-gradient-to-r from-purple-400 to-blue-500 p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl ">
               <Link href={`/blog/${post.slug}`} legacyBehavior>
               <a className="block text-xl font-semibold text-center hover:text-white">
                    {post.title}
               </a>
               </Link>
          </li>
          ))}
          </ul>
        </div>
      </div>
    </>
  );
}
