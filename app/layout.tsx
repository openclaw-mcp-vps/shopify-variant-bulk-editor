import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Variant Bulk Editor – Bulk Edit Products via CSV",
  description: "Upload a CSV to bulk edit Shopify product variants, pricing, and inventory across thousands of products instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e2f53106-1dda-4b49-8054-b5f8b92cc369"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
