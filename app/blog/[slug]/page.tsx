import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { getPostWithHtml, getAllPostSlugs, getAllPosts } from "@/lib/posts";
import Newsletter from "@/components/Newsletter";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Cruce Saunders`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);

  if (!post) {
    notFound();
  }

  // Get all posts for navigation
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <article className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Article Header */}
        <header className="mb-12 text-center">
          {post.category && (
            <span className="text-sm font-medium text-[#0EA5E9] bg-[#0EA5E9]/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mt-4 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-[#6B7280]">
            <time>{format(new Date(post.date), "MMMM d, yyyy")}</time>
            <span>•</span>
            <span>{Math.ceil(post.content.split(/\s+/).length / 200)} min read</span>
          </div>
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-[#111827] prose-p:text-[#374151] prose-a:text-[#0EA5E9] prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-[#0EA5E9] prose-blockquote:text-[#6B7280] prose-code:bg-[#F3F4F6] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
        />

        {/* Newsletter CTA */}
        <div className="mt-16">
          <Newsletter variant="inline" />
        </div>

        {/* Post Navigation */}
        <nav className="mt-12 pt-8 border-t border-[#E5E7EB]">
          <div className="flex justify-between gap-4">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex-1 p-4 rounded-xl border border-[#E5E7EB] hover:border-[#0EA5E9]/20 hover:shadow-md transition-all"
              >
                <span className="text-sm text-[#6B7280]">← Previous</span>
                <p className="font-medium text-[#111827] group-hover:text-[#0EA5E9] mt-1 line-clamp-1">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex-1 p-4 rounded-xl border border-[#E5E7EB] hover:border-[#0EA5E9]/20 hover:shadow-md transition-all text-right"
              >
                <span className="text-sm text-[#6B7280]">Next →</span>
                <p className="font-medium text-[#111827] group-hover:text-[#0EA5E9] mt-1 line-clamp-1">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>
        </nav>
      </div>
    </article>
  );
}
