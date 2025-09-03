import { cn } from "@/lib/utils";
import {
  ArrowRightLeft,
  CircleX,
  ClipboardCopy,
  CodeXml,
  Copy,
  Database,
  File,
  LucideIcon,
  RefreshCcw,
  TriangleAlert,
} from "lucide-react";
import React from "react";

const values: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Your data + monday",
    description: "Bring your existing data from any application with an API",
    icon: Database,
  },
  {
    title: "Ditch copy and pasting",
    description:
      "Save time by eliminating manual copying and pasting between apps",
    icon: ClipboardCopy,
  },
  {
    title: "Eliminate manual errors",
    description:
      "Eliminate manual data entry errors by pulling your data straight from the source",
    icon: TriangleAlert,
  },
  {
    title: "Synchronize at scale",
    description:
      "Keep multiple data sources in sync, regardless of their size or complexity",
    icon: RefreshCcw,
  },
  {
    title: "No-code and low-code backend",
    description:
      "Bring your data into monday and power your no-code or low-code app",
    icon: CodeXml,
  },
  {
    title: "Streamline your operations",
    description:
      "Fewer tools and databases to manage. Run your product from inside monday",
    icon: ArrowRightLeft,
  },
];
export default function Values() {
  return (
    <div className="bg-background p-4 grid lg:grid-cols-2 rounded-2xl shadow-xs">
      {values.map((value, indx) => (
        <div
          className={cn(
            "flex flex-col gap-2 p-6 border-border",
            "border-b",
            indx === values.length - 1 && "max-lg:border-b-0",
            (indx === values.length - 1 || indx === values.length - 2) &&
              "lg:border-b-0",
            indx % 2 === 0 && "lg:border-r lg:border-border"
          )}
          key={value.title}
        >
          <value.icon className="text-primary size-8" />
          <p className="text-xl font-semibold">{value.title}</p>
          <p>{value.description}</p>
        </div>
      ))}
    </div>
  );
}
