import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fisal Alhakbani | Industrial Engineer & Local Content Specialist",
  description: "Professional portfolio of Fisal Alhakbani, focusing on Industrial Engineering, Local Content Monitoring, and Strategic Business Processes in Riyadh, Saudi Arabia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
      </head>
      <body className="antialiased overflow-x-hidden selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
