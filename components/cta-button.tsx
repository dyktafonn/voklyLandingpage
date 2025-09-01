import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function CTAButton({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={"https://app.youform.com/forms/y2vx5ucm"}
      className={buttonVariants({ className })}
    >
      {children}
    </Link>
  );
}
