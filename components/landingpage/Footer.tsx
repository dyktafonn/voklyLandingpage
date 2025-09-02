import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Mail, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo-white.svg";
import CTAButton from "../cta-button";
import EarlyAccess from "./EarlyAcces";

const footerLinks: {
  label: string;
  links?: { link: string; label: string }[];
}[] = [
  {
    label: "Resources",
    links: [
      {
        label: "Contact",
        link: "/contact",
      },
      {
        label: "Blog",
        link: "/blog",
      },
      {
        label: "Integrations",
        link: "/monday-integrations",
      },
    ],
  },
  {
    label: "Company",
    links: [
      {
        label: "Pricing",
        link: "/pricing",
      },
      {
        label: "Youtube",
        link: "https://www.youtube.com/channel/UCBk3yvx3QirqnAf_szTxX3g",
      },
      {
        label: "Terms",
        link: "/terms",
      },
      {
        label: "Privacy",
        link: "/privacy",
      },
    ],
  },
];
export default function Footer() {
  return (
    <div className="flex flex-col">
      {/* <div className="mx-auto max-w-screen-xl">
        <div className="flex w-full flex-col gap-4 items-center justify-center py-12 max-lg:px-4">
          <h3 className="text-5xl font-semibold text-center lg:text-left">
            Ready to build on Monday?
          </h3>
          <h4 className="text-xl text-center lg:text-left">
            Start importing data in minutes with The Fetcher
          </h4>
          <CTAButton className="lg:w-fit w-full">
            Get your discount <ArrowRight />
          </CTAButton>
        </div>
      </div> */}
      <EarlyAccess />

      <footer className="bg-[#1e1a08]">
        <div className="mx-auto max-w-screen-xl text-lilac-bush-50">
          <div className="w-full py-12 lg:grid-cols-3 gap-4 grid max-lg:px-4 text-xl border-b border-lilac-bush-400">
            <div className="flex flex-col gap-4">
              <Link href={"/"}>
                <Image alt="logo" src={Logo} className="w-48" />
              </Link>
              <div className="flex gap-4 lg:gap-2">
                <p>Get in touch with us</p>
                <Link href={"mailto:help@vokly.pl"}>
                  <Mail />
                </Link>
                <Link href={"https://x.com/dyktafon1"}>
                  <Twitter />
                </Link>
                <Link
                  href={
                    "https://www.youtube.com/channel/UCBk3yvx3QirqnAf_szTxX3g"
                  }
                >
                  <Youtube />
                </Link>
              </div>
              <CTAButton>
                Get your discount <ArrowRight />
              </CTAButton>
            </div>

            {footerLinks.map((footerLink) => (
              <div className="flex flex-col gap-2" key={footerLink.label}>
                <p className="font-semibold">{footerLink.label}</p>
                {footerLink.links?.map((links) => (
                  <Link
                    className="text-base"
                    href={links.link}
                    key={links.label}
                  >
                    {links.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="text-xs text-lilac-bush-50 p-4">
            <p>@Vokly - The Fetcher - All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
