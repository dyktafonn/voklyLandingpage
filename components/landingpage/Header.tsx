"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import CTAButton from "../cta-button";
import { cn } from "@/lib/utils";

const integrations: { label: string; href: string }[] = [
  { label: "Rest API", href: "/integration/rest-api" },
];

export default function Header() {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div className="mx-auto max-w-screen-xl my-8 lg:p-0 px-4 ">
      <nav
        className={cn(
          "lg:py-4 py-2 lg:px-8 px-4 shadow-xs rounded-full flex justify-between items-center bg-background",
          open && "shadow-none rounded-b-none"
        )}
      >
        <Link href={"/"}>
          <Image alt="logo" src={Logo} className="w-36" />
        </Link>
        <div className="lg:flex hidden gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"ghost"} className="group">
                Integrations
                <ChevronDown
                  className="size-4 shrink-0 transition-transform  duration-200
                   group-data-[state=open]:rotate-180 "
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col p-2">
              {integrations.map((integration) => (
                <Link
                  key={integration.label}
                  href={integration.href}
                  className={buttonVariants({
                    variant: "ghost",
                    className: "w-full justify-start",
                  })}
                >
                  {integration.label}
                </Link>
              ))}
            </PopoverContent>
          </Popover>
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button variant={"ghost"} className="group">
                Features
                <ChevronDown
                  className="size-4 shrink-0 transition-transform  duration-200
                   group-data-[state=open]:rotate-180 "
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"ghost"} className="group">
                Resources
                <ChevronDown
                  className="size-4 shrink-0 transition-transform  duration-200
                   group-data-[state=open]:rotate-180 "
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover> */}
          <Link
            href={"/pricing"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Pricing
          </Link>
        </div>
        <CTAButton className="max-lg:hidden">
          Try for free <ArrowRight />
        </CTAButton>
        <Button
          variant={"ghost"}
          size={"icon"}
          className="lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open && (
        <div className="px-4 py-2 bg-background rounded-b-2xl flex flex-col gap-2 shadow-xs">
          <Link
            href={"/monday-integrations"}
            className={buttonVariants({
              variant: "ghost",
              className: "w-full justify-start",
            })}
          >
            Integrations
          </Link>
          <Link
            href={"/pricing"}
            className={buttonVariants({
              variant: "ghost",
              className: "w-full justify-start",
            })}
          >
            Pricing
          </Link>
          <CTAButton className="">
            Try for free <ArrowRight />
          </CTAButton>
        </div>
      )}
    </div>
  );
}
