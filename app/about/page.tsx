import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cruce Saunders",
  description: "17-year-old builder, fitness enthusiast, and founder of Ippo.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-4xl font-bold text-white">CS</span>
          </div>
          <h1 className="text-4xl font-bold text-[#111827] mb-2">
            Hey, I&apos;m Cruce 👋
          </h1>
          <p className="text-lg text-[#6B7280]">
            17 · Austin, TX · Builder
          </p>
        </div>

        {/* Bio */}
        <div className="prose prose-lg max-w-none">
          <p>
            I&apos;m a junior in high school with a simple mission: <strong>build cool things, get strong, and get smarter every day.</strong>
          </p>

          <h2>What I&apos;m Building</h2>
          <p>
            Right now, I&apos;m all-in on <strong>Ippo</strong> — an Apple Watch + iOS running game that makes running actually fun. Not just another tracker. A game where effort matters more than pace, where a beginner pushing hard gets the same rewards as an elite runner cruising.
          </p>
          <p>
            Think Tamagotchi meets running. You collect pets. You outrun enemies. You get hooked. That&apos;s the plan, anyway.
          </p>

          <h2>The Big Three</h2>
          <p>
            I care about three things:
          </p>
          <ol>
            <li><strong>Physical health</strong> — Gym every morning. Fitness is non-negotiable.</li>
            <li><strong>Mental ability</strong> — Always learning. Books, conversations, experiments.</li>
            <li><strong>Building something that matters</strong> — Not just for money, but because creating things is what makes life interesting.</li>
          </ol>

          <h2>Why I Write</h2>
          <p>
            This blog is my public notebook. I write to think clearly, to document the journey, and hopefully to help others who are trying to figure things out too.
          </p>
          <p>
            Expect posts about building Ippo, lessons from the gym, things I&apos;m learning, and occasional rants about whatever&apos;s on my mind.
          </p>

          <h2>Say Hi</h2>
          <p>
            I&apos;m most active on{" "}
            <a href="https://twitter.com/crucesaunders" target="_blank" rel="noopener noreferrer">
              Twitter/X
            </a>{" "}
            and{" "}
            <a href="https://tiktok.com/@crucesaunders" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
            . DMs are open. I love connecting with other builders, especially young ones.
          </p>
        </div>

        {/* Contact Links */}
        <div className="mt-12 pt-8 border-t border-[#E5E7EB]">
          <h3 className="font-semibold text-[#111827] mb-4">Connect</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://twitter.com/crucesaunders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </a>
            <a
              href="https://tiktok.com/@crucesaunders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
              TikTok
            </a>
            <a
              href="https://github.com/crucesaunders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
