import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ippo | Cruce Saunders",
  description: "An effort-based running game for Apple Watch that makes running actually fun.",
};

export default function IppoPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 text-[#0EA5E9] px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0EA5E9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0EA5E9]"></span>
            </span>
            Currently in Development
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#111827] dark:text-white mb-6">
            Ippo
          </h1>
          
          <p className="text-xl text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto mb-8">
            An effort-based running game for Apple Watch that makes running actually fun.
            Not another tracker. A game.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-all"
            >
              Join the Waitlist
            </a>
            <Link
              href="/blog/why-im-building-ippo"
              className="text-[#0EA5E9] font-medium hover:underline"
            >
              Read the story →
            </Link>
          </div>
        </div>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111827] dark:text-white mb-6">
            The Problem with Running Apps
          </h2>
          <div className="bg-white dark:bg-[#1F2937] rounded-2xl p-8 border border-[#E5E7EB] dark:border-[#374151]">
            <p className="text-lg text-[#374151] dark:text-[#D1D5DB] mb-4">
              Every running app is obsessed with <strong>pace</strong>. Faster is better. Always.
            </p>
            <p className="text-lg text-[#374151] dark:text-[#D1D5DB] mb-4">
              But here&apos;s what nobody talks about: a 10-minute mile for a beginner pushing their limits is 
              <strong> more impressive</strong> than a 7-minute mile for an experienced runner jogging easy.
            </p>
            <p className="text-lg text-[#374151] dark:text-[#D1D5DB]">
              <strong>Effort matters. Pace doesn&apos;t tell the whole story.</strong>
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111827] dark:text-white mb-6">
            How Ippo is Different
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#1F2937] rounded-2xl p-6 border border-[#E5E7EB] dark:border-[#374151]">
              <div className="text-3xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
                Effort-Based
              </h3>
              <p className="text-[#6B7280] dark:text-[#9CA3AF]">
                We measure how hard you&apos;re working relative to YOUR capacity. 
                Not compared to anyone else.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#1F2937] rounded-2xl p-6 border border-[#E5E7EB] dark:border-[#374151]">
              <div className="text-3xl mb-4">⌚</div>
              <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
                Haptic Chases
              </h3>
              <p className="text-[#6B7280] dark:text-[#9CA3AF]">
                Feel enemies approaching through your Apple Watch. 
                No screen staring required.
              </p>
            </div>
            
            <div className="bg-white dark:bg-[#1F2937] rounded-2xl p-6 border border-[#E5E7EB] dark:border-[#374151]">
              <div className="text-3xl mb-4">🐣</div>
              <h3 className="text-xl font-semibold text-[#111827] dark:text-white mb-2">
                Pet Collection
              </h3>
              <p className="text-[#6B7280] dark:text-[#9CA3AF]">
                Collect and level up virtual pets. 
                Tamagotchi meets running.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111827] dark:text-white mb-6">
            Key Features
          </h2>
          <div className="space-y-4">
            {[
              { icon: "🎮", title: "Gamified Running", desc: "Turn every run into an adventure with quests, achievements, and rewards." },
              { icon: "📊", title: "Smart Effort Tracking", desc: "AI-powered analysis of your effort level based on heart rate, pace, and history." },
              { icon: "🏆", title: "Fair Competition", desc: "Compete with runners at similar fitness levels, not just similar paces." },
              { icon: "🔔", title: "Haptic Feedback", desc: "Feel the game through your Apple Watch without looking at a screen." },
              { icon: "📈", title: "Progress Visualization", desc: "See your fitness improve over time with beautiful charts and insights." },
              { icon: "🤝", title: "Social Features", desc: "Run with friends, join challenges, and share your achievements." },
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 bg-white dark:bg-[#1F2937] rounded-xl p-4 border border-[#E5E7EB] dark:border-[#374151]">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <h3 className="font-semibold text-[#111827] dark:text-white">{feature.title}</h3>
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="mb-16">
          <div className="bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Be the First to Play
            </h2>
            <p className="text-white/80 mb-8 max-w-md mx-auto">
              Join the waitlist to get early access when we launch. 
              Plus, help shape the product with your feedback.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl text-[#111827] placeholder-[#6B7280]"
              />
              <button
                type="submit"
                className="bg-white text-[#0EA5E9] px-6 py-3 rounded-xl font-medium hover:bg-white/90 transition-all"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </section>

        {/* Follow the Journey */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-[#111827] dark:text-white mb-4">
            Follow the Journey
          </h2>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-6">
            I&apos;m building Ippo in public. Read about the process on my blog.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#111827] dark:bg-white text-white dark:text-[#111827] px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-all"
          >
            Read the Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
