// pages/blog/index.tsx
import Head from "next/head";
import Link from "next/link";

const blogPosts = [
     { slug: "adam-ungasan", title: "Ungasan Traditional Food - Adam" },
     { slug: "moreng-jimbaran", title: "Jimbaran Traditional Food - Moreng" },
];

export default function BlogList() {
  return (
     <>
      <Head>
        <title>Poweranggers - P5 Kearifan Lokal</title>
        <meta
          name="description"
          content="Adam Ungasan and Moreng Jimbaran - Traditional Balinese Food"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
       <h1>Blog List</h1>
       <ul>
         {blogPosts.map((post) => (
           <li key={post.slug}>
             <Link href={`/blog/${post.slug}`}>
               <a>{post.title}</a>
             </Link>
           </li>
         ))}
       </ul>
     </div>
     </>
  );
}
