import Link from "next/link";
import { format } from "date-fns";

interface PostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
}

export default function PostCard({ slug, title, date, excerpt, category }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-white rounded-xl p-6 border border-[#E5E7EB] hover:shadow-lg hover:border-[#0EA5E9]/20 transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <time className="text-sm text-[#6B7280]">
            {format(new Date(date), "MMM d, yyyy")}
          </time>
          {category && (
            <>
              <span className="text-[#E5E7EB]">•</span>
              <span className="text-xs font-medium text-[#0EA5E9] bg-[#0EA5E9]/10 px-2 py-1 rounded-full">
                {category}
              </span>
            </>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#0EA5E9] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#6B7280] line-clamp-2 mb-4">
          {excerpt}
        </p>
        
        <span className="text-[#0EA5E9] font-medium text-sm group-hover:underline">
          Read more →
        </span>
      </article>
    </Link>
  );
}
