import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links | Cruce Saunders",
  description: "All my important links in one place.",
};

const links = [
  {
    title: "🏃 Ippo - Running Game",
    description: "The effort-based running game I'm building",
    url: "/ippo",
    internal: true,
  },
  {
    title: "📝 Blog",
    description: "Read about building, fitness, and lessons learned",
    url: "/blog",
    internal: true,
  },
  {
    title: "📬 Newsletter",
    description: "Weekly updates delivered to your inbox",
    url: "/newsletter",
    internal: true,
  },
  {
    title: "𝕏 Twitter / X",
    description: "Follow my journey in real-time",
    url: "https://twitter.com/crucesaunders",
    internal: false,
  },
  {
    title: "🎵 TikTok",
    description: "Behind-the-scenes content",
    url: "https://tiktok.com/@crucesaunders",
    internal: false,
  },
  {
    title: "💻 GitHub",
    description: "Check out my code",
    url: "https://github.com/crucesaunders",
    internal: false,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        {/* Profile */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-white">CS</span>
          </div>
          <h1 className="text-2xl font-bold text-[#111827] dark:text-white">
            Cruce Saunders
          </h1>
          <p className="text-[#6B7280] dark:text-[#9CA3AF]">
            17 · Building Ippo · Austin, TX
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.internal ? undefined : "_blank"}
              rel={link.internal ? undefined : "noopener noreferrer"}
              className="block bg-white dark:bg-[#1F2937] border border-[#E5E7EB] dark:border-[#374151] rounded-xl p-4 hover:border-[#0EA5E9] hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-[#111827] dark:text-white group-hover:text-[#0EA5E9]">
                    {link.title}
                  </h2>
                  <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                    {link.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-[#6B7280] group-hover:text-[#0EA5E9] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {link.internal ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  )}
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-[#9CA3AF] mt-8">
          © {new Date().getFullYear()} Cruce Saunders
        </p>
      </div>
    </div>
  );
}
