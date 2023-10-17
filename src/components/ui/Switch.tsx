"use client";
import React from "react";
import { Switch } from "@nextui-org/react";

import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./Sun";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SwitchBox() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const HandleClick = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Switch
      defaultSelected
      size="lg"
      color="success"
      onClick={HandleClick}
      thumbIcon={() =>
        theme === 'light' ? <SunIcon />:   <MoonIcon /> 
      }
    >

    </Switch>
  );
}
