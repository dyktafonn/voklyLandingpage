// app/providers.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
      api_host: "/relay-7RpO/",
      person_profiles: "identified_only",
      ui_host: "https://us.posthog.com",
      defaults: "2025-05-24",
      secure_cookie: true,
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
