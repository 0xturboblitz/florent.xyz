import { getPosts } from "@/lib/getPosts";
import Link from "next/link";

const Page = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post, idx) => (
        <div key={idx} className="flex flex-col">
          <Link
            href={`/posts/${post.slug}`}
            className="text-gray-600 hover:text-gray-800 no-underline"
          >
            {post.title}
          </Link>
          <span className="text-gray-400">{post.date}</span>
        </div>
      ))}
    </div>
  );
};
export default Page;
