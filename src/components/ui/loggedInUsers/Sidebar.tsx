"use client";
import React from "react";
import NavLinks from "@/components/Links";
import { MdDashboard, MdMenu, MdRequestPage } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navlink = [
  {
    id: 1,
    title: "Dashboard",
    link: "/users/dashboard",
    icon: MdDashboard,
  },
  {
    id: 2,
    title: "Request",
    link: "/users/request",
    icon: MdRequestPage,
  },
  {
    id: 3,
    title: "Create Form",
    link: "/users/create",
    icon: MdDashboard,
  },
];

const Sidebar = () => {
  const active = usePathname();

  return (
    <div className=" bg-[inherit] w-[220px]  flex flex-col gap-3 p-4 fixed font-nunito tracking-wider">
      <MdMenu size="35" className="cursor-pointer" />

      <div className="flex flex-col gap-4">
        {Navlink.map((x) => (
          <div className="" key={x.id}>
            <NavLinks
              key={x.id}
              {...x}
              className={`${
                active === x.link
                  ? " bg-[#d2d2d2]  text-textBlack rounded-md py-3 px-2 flex gap-6 w-[200px] font-normal font-nunito text-md text-opacity-70  cursor-pointer"
                  : " dark:text-white-100 dark:font-normal flex gap-6 w-[200px] text-textBlack px-2 font-normal font-nunito text-md text-opacity-70  cursor-pointer"
              } `}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
