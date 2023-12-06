import React from "react";
import Sidebar from "@/components/ui/loggedInUsers/Sidebar";

export default function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex p-3 gap-3 h-full w-full">
      <Sidebar />

      <div className="ml-[220px] w-full h-full">{children}</div>
    </section>
  );
}
