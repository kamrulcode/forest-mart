import type { Metadata } from "next";
// @ts-expect-error CSS side-effect imports are handled by Next.js.
import "./globals.css";
import { Header, Footer } from "@/components/Site";
export const metadata: Metadata = {
  title: "Forest Mart — Everyday things, thoughtfully found",
  description: "Discover thoughtful finds for every part of your everyday.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
