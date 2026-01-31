"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#E5E7EB]">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#111827] hover:text-[#0EA5E9] transition-colors">
          CS
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-[#6B7280] hover:text-[#111827] transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-[#6B7280] hover:text-[#111827] transition-colors">
            About
          </Link>
          <Link 
            href="/newsletter" 
            className="bg-[#0EA5E9] text-white px-4 py-2 rounded-lg hover:bg-[#0284C7] transition-colors"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white">
          <div className="px-6 py-4 space-y-4">
            <Link 
              href="/blog" 
              className="block text-[#6B7280] hover:text-[#111827]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className="block text-[#6B7280] hover:text-[#111827]"
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
