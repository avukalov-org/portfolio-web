import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex h-full w-full items-center justify-center gap-4 text-gray-500">
      <h5>Copyright &copy; 2025</h5> - <Link href="/">avukalov.com</Link>
    </div>
  );
};

export default Footer;
