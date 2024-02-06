'use client';

import { Link } from 'react-scroll';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const ScrollLink = ({ to, children }: ScrollLinkProps) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
