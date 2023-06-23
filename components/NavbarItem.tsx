import Link from 'next/link';
import React from 'react';

interface NavbarItemProps {
  label: string;
  active?: boolean;
  link:string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active,link }) => {
  return (
    <Link href={`/${link}`} className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'}>
      {label}
    </Link>
  )
}

export default NavbarItem;
