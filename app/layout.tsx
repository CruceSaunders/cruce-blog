import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cruce Saunders",
  description: "17. Building Ippo. Documenting the journey.",
  openGraph: {
    title: "Cruce Saunders",
    description: "17. Building Ippo. Documenting the journey.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruce Saunders",
    description: "17. Building Ippo. Documenting the journey.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FAFAFA] text-[#111827] antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
