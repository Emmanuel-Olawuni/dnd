'use client'
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export function NextUiContext  ({ children }: { children: React.ReactNode })  {
  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{children}</NextUIProvider>;
}

