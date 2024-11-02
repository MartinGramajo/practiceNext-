"use client";

import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const SidebarItem = ({ title, icon, path }: Props) => {
  const pathName = usePathname();

  return (
    <li>
      <a
        href={path}
        className={` px-4 py-3 flex items-center space-x-4 rounded-md  group
            hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
            ${
              path === pathName
                ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                : ""
            }
            `}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </a>
    </li>
  );
};

export default SidebarItem;
