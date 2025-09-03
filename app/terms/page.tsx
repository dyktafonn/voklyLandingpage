import { Metadata } from "next";
import Head from "next/head";
import React from "react";

const terms: { label: string; description?: string; paragraphs: string[] }[] = [
  {
    label: "Introduction",
    paragraphs: [
      "Welcome to Vokly – The Fetcher (“we”, “our”, “us”). By accessing or using our website, services, or applications (together, the “Service”), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Service.",
    ],
  },
  {
    label: "Account Registration",
    paragraphs: [
      "You must create an account to use the Service, authenticated via Supabase.",
      "You are responsible for maintaining the security of your account credentials.",
      "You agree not to share your account with others or use the Service in any unlawful way.",
    ],
  },
  {
    label: "Service Description",
    description: "Vokly – The Fetcher allows users to:",
    paragraphs: [
      "connect to external APIs,",
      "fetch and schedule requests,",
      "store and manage request results inside monday.com,",
      "save API keys (encrypted in our database),",
      "receive notifications about errors and limits.",
    ],
  },
  {
    label: "API Keys & Data Security",
    paragraphs: [
      "API keys and credentials you provide are stored securely and encrypted.",
      "You are solely responsible for the data you choose to fetch and store through our Service.",
      "We do not guarantee the accuracy, reliability, or legality of third-party data sources.",
    ],
  },
  {
    label: "Usage Limits",
    description:
      "Your access is subject to the plan you select (Free, Starter, Pro, Business, Business+).",
    paragraphs: [
      "Each plan has limits on requests, scheduling frequency, and response sizes.",
      "If you exceed your plan limits, requests may fail or require an upgrade.",
    ],
  },
];
export const metadata: Metadata = {
  title: "The Fetcher - Terms",
  description: "Connect any API to monday, without code",
};
export default function page() {
  return (
    <>
      <Head>
        <title>Terms</title>
      </Head>
      <div className="flex flex-col mx-auto max-w-screen-xl gap-2 lg:p-0 px-4">
        <p className="w-full text-center text-6xl font-bold">
          Terms of Service
        </p>
        <p className="w-full text-center text-muted-foreground">
          Last update: 31.08.2025
        </p>
        <div className="flex flex-col gap-4">
          {terms.map(({ label, paragraphs, description }, indx) => (
            <div className="flex flex-col gap-2" key={label}>
              <p className="text-4xl font-semibold">
                {indx + 1}. {label}
              </p>
              <p className="text-xl">{description}</p>
              {paragraphs.map((paragraph, pIndx) => (
                <p key={pIndx} className="text-lg">
                  {paragraphs.length > 1 ? (
                    <>
                      {indx + 1}.{pIndx + 1} {paragraph}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
