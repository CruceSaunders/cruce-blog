import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterPopup from "@/components/NewsletterPopup";
import ReadingProgress from "@/components/ReadingProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cruce Saunders | Building Ippo",
  description: "17-year-old builder documenting the journey of creating Ippo, an effort-based running game for Apple Watch.",
  keywords: ["Cruce Saunders", "Ippo", "running app", "Apple Watch", "young entrepreneur", "fitness", "startup"],
  authors: [{ name: "Cruce Saunders" }],
  creator: "Cruce Saunders",
  openGraph: {
    title: "Cruce Saunders | Building Ippo",
    description: "17-year-old builder documenting the journey of creating Ippo, an effort-based running game for Apple Watch.",
    url: "https://cruce-blog.vercel.app",
    siteName: "Cruce Saunders",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruce Saunders | Building Ippo",
    description: "17-year-old builder documenting the journey.",
    creator: "@crucesaunders",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0EA5E9" />
      </head>
      <body className={`${inter.className} bg-[#FAFAFA] dark:bg-[#111827] text-[#111827] dark:text-[#F9FAFB] antialiased transition-colors duration-300`}>
        <ReadingProgress />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <NewsletterPopup />
      </body>
    </html>
  );
}
