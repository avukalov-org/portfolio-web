'use client';

import Link from 'next/link';
import { NavLink as INavLink } from '@/lib/definitions';
import { usePathname } from 'next/navigation';
import { m } from 'framer-motion';

function TransitionNavLink({ link, ...props }: { link: INavLink }) {
  const pathname = usePathname();

  return (
    <Link {...props} href={link.url} className="group">
      {link.title}

      <m.div
        className={`mt-1 flex h-[0.125rem] rounded-lg transition-colors duration-300 ${pathname === link.url && 'bg-violet-900'} ${pathname !== link.url && 'group-hover:bg-violet-300'} `}
      />
    </Link>
  );
}

export default TransitionNavLink;
