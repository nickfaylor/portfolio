import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const optima = localFont({
  src: "../public/fonts/optima.ttf",
  variable: "--font-optima",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nicholas Faylor | Software Engineer",
  description: "Portfolio of Nicholas Faylor — software engineer specializing in full-stack and AI engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${optima.variable} h-full`}>
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
