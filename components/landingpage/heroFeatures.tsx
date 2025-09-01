import {
  CreditCardIcon,
  MessageCircleQuestionMark,
  Play,
  Workflow,
} from "lucide-react";
import React from "react";

type Props = {};

export default function HeroFeatures({}: Props) {
  const features: { label: string; icon: React.ReactNode }[] = [
    {
      icon: <Play className="size-4 text-primary/70" />,
      label: "Sync your data on autopilot",
    },
    {
      icon: <CreditCardIcon className="size-4 text-primary/70" />,
      label: "Generous free plan",
    },
    {
      icon: <MessageCircleQuestionMark className="size-4 text-primary/70" />,
      label: "Fast and helpful support",
    },
    {
      icon: <Workflow className="size-4 text-primary/70" />,
      label: "Easy-to-use integrations",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-2">
      {features.map((feature) => (
        <div className="flex gap-2 items-center col-span-1" key={feature.label}>
          <div className="bg-primary/10 aspect-square size-7 rounded-full flex items-center justify-center p-px">
            {feature.icon}
          </div>
          <p className="text-sm">{feature.label}</p>
        </div>
      ))}
    </div>
  );
}
