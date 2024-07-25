import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Instrument_Sans } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const instrumentSans = Instrument_Sans({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: "Devlinks",
  description: "A link sharing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#FAFAFA]" >
      <body className={`${inter.className} ${instrumentSans.className}`}>{children}</body>
    </html>
  );
}
