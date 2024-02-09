'use client';

import { Link } from 'react-scroll';

interface ScrollLinkProps {
  to: string;
  onClick?(): void;
  children: React.ReactNode;
}

const ScrollLink = ({ to, onClick, children }: ScrollLinkProps) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-90}
      duration={500}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default ScrollLink;
