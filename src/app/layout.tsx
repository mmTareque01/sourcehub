import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Noto_Sans } from "next/font/google";
import "../style/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto" });


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Open Source SaaS",
  description: "Discover Open Source SaaS Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${notoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
