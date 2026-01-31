"use client";

import { useEffect, useState } from "react";

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // Check if user has already seen or dismissed the popup
    const dismissed = localStorage.getItem("newsletterDismissed");
    const subscribed = localStorage.getItem("newsletterSubscribed");
    
    if (dismissed || subscribed) return;

    // Show popup after 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletterDismissed", "true");
  };

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
        localStorage.setItem("newsletterSubscribed", "true");
        
        // Close popup after success
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-[#1F2937] rounded-2xl shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[#E5E7EB] dark:hover:bg-[#374151] transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#111827] dark:text-white mb-2">You&apos;re in! 🎉</h3>
            <p className="text-[#6B7280] dark:text-[#9CA3AF]">Check your inbox to confirm.</p>
          </div>
        ) : (
          <>
            {/* Emoji */}
            <div className="text-5xl text-center mb-4">📬</div>
            
            {/* Heading */}
            <h3 className="text-2xl font-bold text-[#111827] dark:text-white text-center mb-2">
              Don&apos;t miss out
            </h3>
            
            {/* Description */}
            <p className="text-[#6B7280] dark:text-[#9CA3AF] text-center mb-6">
              Get weekly updates on building Ippo, fitness tips, and lessons from the journey.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-[#111827] text-[#111827] dark:text-white placeholder-[#9CA3AF] focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] text-white py-3 rounded-xl font-medium hover:opacity-90 disabled:opacity-50 transition-all"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe for free"}
                </button>
              </div>
              
              <p className="text-xs text-[#9CA3AF] text-center mt-4">
                No spam, ever. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
