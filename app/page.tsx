import Link from "next/link";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-full mx-auto mb-8 flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-white">CS</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#111827] mb-4 tracking-tight">
            Cruce Saunders
          </h1>
          
          <p className="text-xl text-[#6B7280] mb-8">
            17. Building{" "}
            <span className="text-[#0EA5E9] font-semibold">Ippo</span>. 
            Documenting the journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="bg-[#0EA5E9] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#0284C7] transition-colors"
            >
              Read the Blog →
            </Link>
            <Link
              href="/about"
              className="text-[#6B7280] hover:text-[#111827] px-8 py-3 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://twitter.com/crucesaunders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@crucesaunders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://github.com/crucesaunders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B7280] hover:text-[#0EA5E9] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      {posts.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-[#111827]">Latest Posts</h2>
              <Link
                href="/blog"
                className="text-[#0EA5E9] font-medium hover:underline"
              >
                View all →
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
