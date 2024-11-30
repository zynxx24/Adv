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
          name="Bali Traditional Food"
          content="Adam Ungasan and Moreng Jimbaran"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page Content */}
      <div>
        {/* Description above the title */}
        <p>
          This website made for work P5 and use Vercel for Deployment
        </p>

        <h1>Group Poweranggers</h1>
        <img src="https://bit.ly/3CLSPre"></img> {/* Profile Photo */}
        <article> We have chosen this menu to showcase the traditional regional cuisine of Bali while preserving its rich cultural heritage passed down through generations. Through the implementation of the P5 Local Wisdom initiative, we aspire to promote and safeguard these local delicacies, ensuring they continue to thrive and remain a vital part of our cultural identity for generations to come. </article>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link> {/* Two Button */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
