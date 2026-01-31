import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-[#0EA5E9] mb-4">404</div>
        <h1 className="text-3xl font-bold text-[#111827] dark:text-white mb-4">
          Page not found
        </h1>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-8 max-w-md">
          Looks like you&apos;ve wandered off the path. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="bg-[#0EA5E9] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0284C7] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="text-[#0EA5E9] font-medium hover:underline"
          >
            Read the Blog →
          </Link>
        </div>
      </div>
    </div>
  );
}
