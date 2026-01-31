import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Cruce Saunders",
  description: "Thoughts on building, fitness, and figuring it out.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Blog
          </h1>
          <p className="text-lg text-[#6B7280]">
            Thoughts on building, fitness, and figuring it out.
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                excerpt={post.excerpt}
                category={post.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#6B7280] text-lg">
              No posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
