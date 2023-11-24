"use client";
import { Button } from "@nextui-org/react";
import React, { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className=" flex w-full flex-col h-full items-center justify-center">
      <h2>Something went wrong !</h2>
      <Button href="/">Go Back</Button>
    </div>
  );
}
