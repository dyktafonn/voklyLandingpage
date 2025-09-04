import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "../globals.css";

import Footer from "@/components/landingpage/Footer";
import Header from "@/components/landingpage/Header";
import { PostHogProvider } from "@/components/providers/PosthogProvider";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import EarlyAccess from "@/components/landingpage/EarlyAcces";

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
  description: "Connect any API to monday, without code",
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
          <div className="h-fit w-full flex lg:flex-row flex-col bg-[#1e1a08] items-center justify-center lg:gap-2">
            <p className="text-lilac-bush-200">This is prelaunch page.</p>
            <p className="text-lilac-bush-200">
              Answer this form to get 15% discount.{" "}
              <a
                href="https://app.youform.com/forms/y2vx5ucm"
                className={cn(
                  buttonVariants({
                    variant: "link",
                  }),
                  "p-0 h-fit"
                )}
              >
                There
              </a>
            </p>
          </div>
          <Header />
          <EarlyAccess />

          <main className="min-h-screen flex flex-col">{children}</main>
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
