import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Link from "next/link";

type BlogPost = {
  title: string;
  content: string;
  image: string;
  extraContent: string;
};

// Simulated blog post data
const blogData: Record<string, BlogPost> = {
  "adam-ungasan": {
    title: "Ungasan Traditional Food - Adam",
    content: "This Old food in the Ungasan.",
    image: "https://shorturl.at/LYkVR",
    extraContent: "This is a famous traditional food originating from the Ungasan area.",
  },
  "mujair-nyat-nyat-kintamani": {
    title: "Kintamani Traditional Food - Mujair Nyat Nyat",
    content: "This Old food in the Jimbaran.",
    image: "https://shorturl.at/LYkVR",
    extraContent: "Moreng is a unique delicacy well-known in Jimbaran for its spicy taste.",
  },
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(blogData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: BlogPost }> = async ({ params }) => {
  const slug = params?.slug as string;

  if (!blogData[slug]) {
    return { notFound: true };
  }

  return {
    props: {
      post: blogData[slug],
    },
  };
};

export default function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{post.title} | Powerangers</title>
        <meta name="description" content={post.extraContent} />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-5xl font-extrabold mt-6 text-gradient">{post.title}</h1>
          <img
            src={post.image}
            alt={post.title}
            className="w-full rounded-lg shadow-lg mt-6 mb-8 hover:scale-105 transition-transform"
          />
          <p className="text-lg leading-relaxed text-gray-200">{post.content}</p>
          <p className="mt-6 text-xl text-gray-400">{post.extraContent}</p>
          <Link href="/blog" legacyBehavior>
            <a className="inline-block bg-blue-500 text-white py-2 px-4 mt-6 rounded-lg shadow-md hover:bg-blue-600 transition">
              Back
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
