import Newsletter from "@/components/Newsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter | Cruce Saunders",
  description: "Weekly updates on building Ippo, fitness insights, and lessons learned.",
};

export default function NewsletterPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <Newsletter variant="full" />
    </div>
  );
}
