import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/landingpage/Footer";
import Header from "@/components/landingpage/Header";
import { PostHogProvider } from "@/components/providers/PosthogProvider";

const geistSans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Fetcher",
  description: "Connect any API to Monday, without code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-screen min-h-screen overflow-x-hidden`}
      >
        <PostHogProvider>
          <Header />
          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
