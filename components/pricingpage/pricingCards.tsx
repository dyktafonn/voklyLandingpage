"use client";
import NumberFlow from "@number-flow/react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, BadgeCheck, BadgeX } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const plans: {
  id: string;
  name: string;
  price: { monthly: string | number; yearly: string | number };
  features: {
    feature: string;
    available: boolean;
  }[];
  cta: string;
  description?: string;
  popular?: true;
}[] = [
  {
    id: "free",
    name: "Free",
    price: {
      monthly: "Free forever",
      yearly: "Free forever",
    },
    features: [
      { feature: "100 Runs", available: true },
      { feature: "10 000 Response fields", available: true },
      { feature: "5 Saved requests", available: true },
      { feature: "Schedule", available: false },
      { feature: "Basic email support", available: true },
    ],
    cta: "Get started for free",
  },
  {
    id: "starter",
    name: "Starter",
    price: {
      monthly: 29,
      yearly: 15,
    },

    features: [
      { feature: "3000 Runs", available: true },
      { feature: "300 000 Response fields", available: true },
      { feature: "Unlimited Saved requests", available: true },
      { feature: "Schedule every 30min", available: true },
      { feature: "Basic email support", available: true },
    ],
    cta: "Subscribe to Starter",
  },
  {
    id: "pro",
    name: "Pro",
    price: {
      monthly: 79,
      yearly: 49,
    },

    features: [
      { feature: "10 000 Runs", available: true },
      { feature: "1 000 000 Response fields", available: true },
      { feature: "Unlimited Saved requests", available: true },
      { feature: "Schedule every 5min", available: true },
      { feature: "Basic email support", available: true },
    ],
    cta: "Subscribe to Pro",
    popular: true,
  },
  {
    id: "business",
    name: "Business",
    price: {
      monthly: 99,
      yearly: 79,
    },

    features: [
      { feature: "40 000 Runs", available: true },
      { feature: "4 000 000 Response fields", available: true },
      { feature: "Unlimited Saved requests", available: true },
      { feature: "Schedule every 5min", available: true },
      { feature: "Priority email support", available: true },
    ],
    cta: "Subscribe to Business",
  },
  {
    id: "business_plus",
    name: "Business+",
    price: {
      monthly: 199,
      yearly: 115,
    },

    features: [
      { feature: "80 000 Runs", available: true },
      { feature: "8 000 000 Response fields", available: true },
      { feature: "Unlimited Saved requests", available: true },
      { feature: "Schedule every 5min", available: true },
      { feature: "Priority email support", available: true },
    ],
    cta: "Subscribe to Business+",
  },
];

export const Pricing = () => {
  const [frequency, setFrequency] = useState<string>("monthly");

  return (
    <div className="flex flex-col gap-16 px-8 py-24 text-center @container h-full ">
      <div className="flex flex-col items-center justify-center gap-8 flex-1 ">
        <h1 className="mb-0 text-balance font-medium text-5xl tracking-tighter!">
          Chose your plan
        </h1>
        <p className="mx-auto mt-0 mb-0 max-w-2xl text-balance text-lg text-muted-foreground">
          Save time, reduce manual work, and scale seamlessly with our flexible
          plans.
        </p>
        <Tabs defaultValue={frequency} onValueChange={setFrequency}>
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">
              Yearly
              <Badge variant="secondary">(save up to 50% off)</Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mt-8 grid w-full max-w-3/4 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 h-full ">
          {plans.map((plan) => (
            <Card
              className={cn(
                "relative w-full text-left",
                plan.popular && "ring-2 ring-primary"
              )}
              key={plan.id}
            >
              {plan.popular && (
                <Badge className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 rounded-full">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="font-medium text-xl">
                  {plan.name}
                </CardTitle>
                <CardDescription>
                  <p>{plan.description}</p>
                  {typeof plan.price[frequency as keyof typeof plan.price] ===
                  "number" ? (
                    <NumberFlow
                      className="font-medium text-foreground text-2xl"
                      format={{
                        style: "currency",
                        currency: "USD",
                        currencyDisplay: "narrowSymbol",
                        maximumFractionDigits: 0,
                      }}
                      suffix={`/month`}
                      value={
                        plan.price[
                          frequency as keyof typeof plan.price
                        ] as number
                      }
                    />
                  ) : (
                    <span className="font-medium text-foreground text-2xl">
                      {plan.price[frequency as keyof typeof plan.price]}.
                    </span>
                  )}
                </CardDescription>
                {plan.id === "free" ? (
                  <p className="w-full text-center text-sm font-semibold">
                    Free forever
                  </p>
                ) : (
                  <p className="w-full text-center text-sm font-semibold">
                    billed {frequency}
                  </p>
                )}
              </CardHeader>
              <CardContent className="grid gap-2">
                {plan.features.map((feature, index) => (
                  <div
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                    key={index}
                  >
                    {feature.available ? (
                      <BadgeCheck className="h-4 w-4 text-lime-500" />
                    ) : (
                      <BadgeX className="h-4 w-4 text-destructive" />
                    )}
                    <p className="font-semibold">{feature.feature}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Link
                  className={cn(
                    buttonVariants({
                      variant: plan.popular ? "default" : "secondary",
                    }),
                    " w-full"
                  )}
                  href={"https://app.youform.com/forms/y2vx5ucm"}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
