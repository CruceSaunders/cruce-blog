"use client";

import { useState } from "react";

interface NewsletterProps {
  variant?: "inline" | "card" | "full";
}

export default function Newsletter({ variant = "card" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (variant === "full") {
    return (
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
          Stay in the loop
        </h1>
        <p className="text-lg text-[#6B7280] mb-8 max-w-md mx-auto">
          Weekly updates on building Ippo, fitness insights, and lessons learned along the way.
        </p>
        
        {status === "success" ? (
          <div className="bg-green-50 text-green-700 px-6 py-4 rounded-xl max-w-md mx-auto">
            <p className="font-medium">You&apos;re in! 🎉</p>
            <p className="text-sm mt-1">Check your inbox to confirm your subscription.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="flex-1 px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#0EA5E9] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0284C7] disabled:opacity-50 transition-colors"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            <p className="text-sm text-[#6B7280] mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="bg-[#0EA5E9]/5 border border-[#0EA5E9]/20 rounded-xl p-6 my-8">
        <h3 className="text-lg font-semibold text-[#111827] mb-2">
          Enjoying this? Subscribe for more.
        </h3>
        {status === "success" ? (
          <p className="text-green-600 font-medium">You&apos;re subscribed! 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 px-4 py-2 rounded-lg border border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#0EA5E9] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#0284C7] disabled:opacity-50 transition-colors"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    );
  }

  // Default: card variant
  return (
    <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm max-w-xl mx-auto">
      <h3 className="text-2xl font-bold text-[#111827] mb-2 text-center">
        Join the journey
      </h3>
      <p className="text-[#6B7280] mb-6 text-center">
        Weekly updates on building Ippo, fitness, and lessons learned.
      </p>
      
      {status === "success" ? (
        <div className="bg-green-50 text-green-700 px-4 py-3 rounded-lg text-center">
          <p className="font-medium">Welcome aboard! 🎉</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="flex-1 px-4 py-3 rounded-xl border border-[#E5E7EB] focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#0EA5E9] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0284C7] disabled:opacity-50 transition-colors whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Subscribe"}
            </button>
          </div>
          <p className="text-xs text-[#6B7280] mt-3 text-center">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}
