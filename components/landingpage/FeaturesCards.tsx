import {
  Clock,
  Download,
  File,
  Key,
  KeyIcon,
  KeyRound,
  LucideIcon,
  RefreshCcw,
} from "lucide-react";
import React from "react";

const features: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Import data to Monday",
    description: "Import data from any API directly into Monday",
    icon: Download,
  },
  {
    title: "Access secured APIs",
    description: "Access authenticated APIs via common authentication methods",
    icon: KeyRound,
  },
  {
    title: "Schedule requests",
    description:
      "Run your data operations exactly when you need them, up to every 5 minutes",
    icon: Clock,
  },
  {
    title: "Sync data",
    description: "Keep data synced between Monday and another application",
    icon: RefreshCcw,
  },
  {
    title: "Smart Field Mapping",
    description:
      "Map JSON keys to item names, create or update columns, and tailor data imports to your use case",
    icon: File,
  },
];

export default function FeaturesCards() {
  return (
    <div className="lg:grid-cols-2 grid-cols-1 gap-4 h-full grid">
      {features.map((feature) => (
        <div
          className="rounded-xl p-4 bg-background w-full h-full  col-span-1 row-span-1 flex flex-col gap-4 shadow-xs"
          key={feature.title}
        >
          <div className="flex items-center gap-4 ">
            <feature.icon className="text-primary size-8" />
            <p className="font-semibold text-xl">{feature.title}</p>
          </div>
          <p className="">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
