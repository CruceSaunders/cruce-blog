import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now | Cruce Saunders",
  description: "What I'm focused on right now.",
};

export default function NowPage() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#111827] dark:text-white mb-4">
            What I&apos;m Doing Now
          </h1>
          <p className="text-[#6B7280] dark:text-[#9CA3AF]">
            Last updated: January 31, 2026 · Austin, TX
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>🏃 Building Ippo</h2>
          <p>
            My main focus right now is building <strong>Ippo</strong> — an effort-based running game for Apple Watch. 
            I&apos;m deep in MVP development, coding in Swift/SwiftUI and setting up Firebase for the backend.
          </p>
          <p>
            The core innovation: measuring effort rather than pace. A beginner pushing their limits gets the same 
            rewards as an elite runner cruising. We&apos;re gamifying the struggle, not just the achievement.
          </p>

          <h2>📚 Learning</h2>
          <ul>
            <li><strong>Swift & SwiftUI</strong> — Building iOS/watchOS apps from scratch</li>
            <li><strong>Firebase</strong> — Backend, auth, real-time data</li>
            <li><strong>Product thinking</strong> — How to make something people actually want</li>
            <li><strong>Writing</strong> — Documenting everything on this blog</li>
          </ul>

          <h2>🏋️ Health & Fitness</h2>
          <p>
            Gym at 6 AM, every day. Currently running a Push/Pull/Legs split. 
            Sleep optimization is a priority — no screens after 9 PM, consistent bedtime.
          </p>

          <h2>🎓 School</h2>
          <p>
            Junior at <strong>Alpha High School</strong> in Austin — an AI-powered school focused on 
            project-based learning. Mornings are academics, afternoons are dedicated to building Ippo.
          </p>

          <h2>🎯 Current Goals</h2>
          <ul>
            <li>Launch Ippo MVP by Q1 2026</li>
            <li>Get 100 beta testers</li>
            <li>Publish 2 blog posts per week</li>
            <li>Grow newsletter to 500 subscribers</li>
          </ul>

          <hr />

          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
            This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">/now page</a>. 
            If you have your own site, you should make one too.
          </p>
        </div>
      </div>
    </div>
  );
}
