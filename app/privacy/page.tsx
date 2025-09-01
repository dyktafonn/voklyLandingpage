import { Metadata } from "next";
import React from "react";

type Props = {};

const privacyPolicy: {
  label: string;
  description?: string;
  paragraphs: string[];
}[] = [
  {
    label: "Introduction",
    paragraphs: [
      "This Privacy Policy explains how Vokly – The Fetcher (“we”, “our”, “us”) collects, uses, and protects your personal data when you use our application inside Monday.com (“Service”).",
      "By installing or using the Service within your Monday.com account, you agree to the practices described in this Privacy Policy.",
    ],
  },
  {
    label: "Information We Collect",
    paragraphs: [
      "Account Information: We receive your basic account details (such as user ID, workspace ID, email) from Monday.com when you authorize our app.",
      "API Credentials: If you connect external APIs, your API keys are encrypted and securely stored in our database (Supabase).",
      "Usage Data: We collect metadata about your requests, including frequency, scheduling options, and responses, to enforce subscription limits and improve performance.",
      "Billing Information: When you subscribe to a paid plan, payment details are processed by Monday.com or our payment provider. We do not directly store full payment details.",
      "Technical Data: We may collect IP address, browser type, and error logs for security and analytics purposes.",
    ],
  },
  {
    label: "How We Use Your Information",
    paragraphs: [
      "To provide and operate the Service within Monday.com.",
      "To store and manage your API requests, schedules, and saved configurations.",
      "To track subscription usage (runs, responses, saved requests) and enforce plan limits.",
      "To send important notifications, such as errors, usage warnings, or billing updates.",
      "To comply with legal obligations and prevent abuse or fraudulent use.",
    ],
  },
  {
    label: "Payments and Subscriptions",
    paragraphs: [
      "Our Service offers both free and paid subscription plans.",
      "Payments are handled securely through Monday.com’s marketplace or approved providers.",
      "We do not store your payment card information. Billing records are managed through Monday.com’s payment infrastructure.",
      "Usage limits and pricing are described on our website and marketplace listing.",
    ],
  },
  {
    label: "Data Security",
    paragraphs: [
      "Sensitive data such as API keys is encrypted before being stored in our database.",
      "We implement industry-standard security practices to protect your information.",
      "No method of transmission or storage is 100% secure, but we continuously monitor and update our systems to reduce risk.",
    ],
  },
  {
    label: "Data Sharing",
    paragraphs: [
      "We do not sell or rent your data to third parties.",
      "We may share limited information with trusted providers (Supabase for authentication, Resend for email notifications) strictly to operate the Service.",
      "We may disclose data if required by law, legal process, or to protect our legal rights.",
    ],
  },
  {
    label: "User Rights",
    paragraphs: [
      "You may access, update, or request deletion of your data at any time by contacting our support.",
      "You may cancel your subscription within Monday.com, which will also stop future billing.",
      "If you are located in the EU or other jurisdictions, you may have additional rights such as data portability or objection to processing.",
    ],
  },
  {
    label: "Third-Party Integrations",
    paragraphs: [
      "Our Service integrates with Monday.com and external APIs that you connect.",
      "We are not responsible for the privacy practices of third-party APIs you choose to connect to.",
      "You should review the privacy policies of Monday.com and any external services before using them with our Service.",
    ],
  },
  {
    label: "Data Retention",
    paragraphs: [
      "We retain data related to your account and API requests as long as your subscription is active.",
      "After cancellation or deletion of your account, we may delete or anonymize your data, unless retention is required by law.",
    ],
  },
  {
    label: "Children’s Privacy",
    paragraphs: [
      "The Service is not intended for individuals under the age of 18.",
      "We do not knowingly collect data from children. If we learn that we have, we will delete it promptly.",
    ],
  },
  {
    label: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in technology, legal requirements, or our services.",
      "If significant updates are made, we will notify you through Monday.com or by email.",
      "Continued use of the Service after changes means acceptance of the updated Privacy Policy.",
    ],
  },
  {
    label: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how we handle your data, please contact us: Email: help@vokly.pl",
    ],
  },
];
export const metadata: Metadata = {
  title: "The Fetcher - Privacy",
  description: "Connect any API to Monday, without code",
};
export default function page({}: Props) {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl gap-2 lg:p-0 px-4">
      <p className="w-full text-center text-6xl font-bold">Privacy Policy</p>
      <p className="w-full text-center text-muted-foreground">
        Last update: 31.08.2025
      </p>
      <div className="flex flex-col gap-4">
        {privacyPolicy.map(({ label, paragraphs, description }, indx) => (
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
  );
}
