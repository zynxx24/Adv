// pages/blog/index.tsx
import Link from "next/link";

const blogPosts = [
     { slug: "adam-ungasan", title: "Ungasan Traditional Food - Adam" },
     { slug: "moreng-jimbaran", title: "Jimbaran Traditional Food - Moreng" },
];

export default function BlogList() {
  return (
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
  );
}
