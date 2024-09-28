"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "@/components/nav-link";
import { NavLink as INavLink } from "@/lib/definitions";
import { AnimatePresence, m } from "framer-motion";
import TransitionNavLink from "./transition-nav-link";

const links: Array<INavLink> = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
  { url: "/blog", title: "Blog" },
];

interface NavbarProps {
  onStart: () => void;
  onExit: () => void;
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(46, 16, 101)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(46, 16, 101)",
    },
  };

  const listVariant = {
    closed: {
      x: "100vw",
      transition: {
        type: "tween",
        duration: 0.2,
      },
    },
    opened: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -20,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <m.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.75,
      }}
      className="h-full flex items-center justify-between text-xl"
    >
      <div className="flex gap-8 justify-start">
        {/* LOGO */}
        <div className="md:hidden lg:flex">
          <Link
            href="/"
            className="text-sm bg-violet-950 rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="text-white px-1 mr-1">avukalov</span>
            <span className="w-12 h-8 rounded bg-white text-violet-950 flex items-center justify-center">
              .com
            </span>
          </Link>
        </div>
        {/* LINKS */}
        <div className="hidden md:flex gap-6 justify-start">
          {links.map((link: any, index: number) => (
            <TransitionNavLink link={link} key={index} />
          ))}
        </div>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 justify-end">
        <Link href="https://www.linkedin.com/in/antonio-vukalovic/">
          <Image
            src="/images/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
        <Link href="https://github.com/avukalov">
          <Image src="/images/github.png" alt="Github" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/antoniovukalovic">
          <Image
            src="/images/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-8 h-6 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <m.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-violet-950 rounded origin-left"
          ></m.div>
          <m.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-violet-950 rounded"
          ></m.div>
          <m.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 h-1 bg-violet-950 rounded origin-left"
          ></m.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <AnimatePresence mode="wait">
            <m.div
              variants={listVariant}
              initial="closed"
              animate="opened"
              exit="closed"
              className="absolute top-0 left-0 w-screen h-screen bg-white text-violet-950 flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link: any, index: number) => (
                <m.div variants={listItemVariants} className="" key={index}>
                  <Link
                    href={link.url}
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    {link.title}
                  </Link>
                </m.div>
              ))}
            </m.div>
          </AnimatePresence>
        )}
      </div>
    </m.div>
  );
}

export default Navbar;
