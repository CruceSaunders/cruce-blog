"use client";

import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-1 z-50 bg-[#FAFAFA]/80 dark:bg-[#111827]/80 backdrop-blur-md border-b border-[#E5E7EB] dark:border-[#374151]">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#111827] dark:text-white hover:text-[#0EA5E9] transition-colors">
          CS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/ippo" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors">
            Ippo
          </Link>
          <Link href="/now" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors">
            Now
          </Link>
          <Link href="/about" className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white transition-colors">
            About
          </Link>
          <DarkModeToggle />
          <Link 
            href="/newsletter" 
            className="bg-[#0EA5E9] text-white px-4 py-2 rounded-lg hover:bg-[#0284C7] transition-colors"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile: Dark mode + Menu */}
        <div className="md:hidden flex items-center gap-2">
          <DarkModeToggle />
          <button 
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-[#111827] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] dark:border-[#374151] bg-white dark:bg-[#1F2937]">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="/blog" 
              className="block text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/ippo" 
              className="block text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ippo
            </Link>
            <Link 
              href="/now" 
              className="block text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Now
            </Link>
            <Link 
              href="/about" 
              className="block text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/newsletter" 
              className="block bg-[#0EA5E9] text-white px-4 py-2 rounded-lg text-center hover:bg-[#0284C7]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
