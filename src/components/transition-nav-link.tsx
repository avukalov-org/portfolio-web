"use client";

import Link from "next/link";
import { NavLink as INavLink } from "@/lib/definitions";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function TransitionNavLink({ link, ...props }: { link: INavLink }) {
  const pathname = usePathname();

  return (
    <Link {...props} href={link.url} className="group">
      {link.title}

      <motion.div
        className={`flex h-[0.125rem] mt-1 rounded-lg transition-colors duration-300
          ${pathname === link.url && "bg-violet-900"}
          ${pathname !== link.url && "group-hover:bg-violet-300"}
        `}
      />
    </Link>
  );
}

export default TransitionNavLink;
