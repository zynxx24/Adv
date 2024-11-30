// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

type BlogPost = {
  title: string;
  content: string;
};

// Simulated blog post data
const blogData: Record<string, BlogPost> = {
  "adam-ungasan": {
    title: "Ungasan Traditional Food - Adam",
    content: "This Old food in the Ungasan",
  },
  "moreng-jimbaran": {
    title: "Jimbaran Traditional Food - Moreng",
    content: "This Old food in the Jimbaran",
  },
};

// Generate paths for each blog post at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(blogData).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false, // Only generate the paths specified here
  };
};

// Fetch data for a specific blog post based on the slug
export const getStaticProps: GetStaticProps<{ post: BlogPost }> = async ({ params }) => {
  const slug = params?.slug as string;

  if (!blogData[slug]) {
    return {
      notFound: true, // Handle unknown slugs
    };
  }

  return {
    props: {
      post: blogData[slug],
    },
  };
};

export default function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
