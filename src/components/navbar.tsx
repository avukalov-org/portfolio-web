'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { NavLink as INavLink } from '@/lib/definitions';
import { AnimatePresence, m } from 'framer-motion';
import TransitionNavLink from './transition-nav-link';

const links: Array<INavLink> = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
  // { url: '/blog', title: 'Blog' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(46, 16, 101)',
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
      backgroundColor: 'rgb(46, 16, 101)',
    },
  };

  const listVariant = {
    closed: {
      x: '100vw',
      transition: {
        type: 'tween',
        duration: 0.2,
      },
    },
    opened: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.2,
        when: 'beforeChildren',
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
      className="flex h-full items-center justify-between text-xl"
    >
      <div className="flex justify-start gap-8">
        {/* LOGO */}
        <div className="md:hidden lg:flex">
          <Link
            href="/"
            className="flex items-center justify-center rounded-md bg-violet-950 p-1 text-sm font-semibold"
          >
            <span className="mr-1 px-1 text-white">avukalov</span>
            <span className="flex h-8 w-12 items-center justify-center rounded bg-white text-violet-950">
              .com
            </span>
          </Link>
        </div>
        {/* LINKS */}
        <div className="hidden justify-start gap-6 md:flex">
          {links.map((link: INavLink, index: number) => (
            <TransitionNavLink link={link} key={index} />
          ))}
        </div>
      </div>

      {/* SOCIAL */}
      <div className="hidden justify-end gap-4 md:flex">
        <Link href="https://github.com/avukalov">
          <Image
            src="/images/skills/github.svg"
            alt="Github"
            width={30}
            height={30}
          />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="relative z-50 flex h-6 w-8 flex-col justify-between"
          onClick={() => setOpen((prev) => !prev)}
        >
          <m.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-8 origin-left rounded bg-violet-950"
          ></m.div>
          <m.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-8 rounded bg-violet-950"
          ></m.div>
          <m.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="h-1 w-8 origin-left rounded bg-violet-950"
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
              className="absolute left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-8 bg-white text-4xl text-violet-950"
            >
              {links.map((link: INavLink, index: number) => (
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
