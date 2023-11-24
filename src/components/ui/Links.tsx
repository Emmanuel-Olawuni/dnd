import React from "react";
import Link from "next/link";

type Links = {
  id: number;
  title: string;
  link: string;
  className?: string;
  icon: string;
};
const NavLinks = (props: Links) => {
  return (
    <>
      <Link key={props.id} href={props.link} className={props.className}>
     <div className="text-[30px]  text-textBlack text-opacity-70 dark:text-white-100">
     <props.icon  />
     </div>
        {props.title}{" "}
      </Link>
    </>
  );
};

export default NavLinks;
