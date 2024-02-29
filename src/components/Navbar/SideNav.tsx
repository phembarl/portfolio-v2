'use client';

import style from './mobileNav.module.scss';
import { Icon } from '@iconify/react';
import ScrollLink from '../ScrollLink';

interface SideNavProps {
  showSideNav: boolean;
  closeSideNav(): void;
}

const SideNav = ({ showSideNav, closeSideNav }: SideNavProps) => {
  return (
    <>
      <div
        className={`${style.overlay} ${showSideNav ? style.showOverlay : ''}`}
        onClick={closeSideNav}
      />
      <div
        className={`${style.sideNav} ${showSideNav ? style.showSideNav : ''}`}
      >
        <div className={style.hamburgerContainer}>
          <Icon
            icon="mdi:hamburger-close"
            width="35"
            height="35"
            onClick={closeSideNav}
          />
        </div>
        <div>
          <ul className={style.nav}>
            <li>
              <ScrollLink to="about" onClick={closeSideNav}>
                About
              </ScrollLink>
            </li>

            <li>
              <ScrollLink to="experience" onClick={closeSideNav}>
                Experience
              </ScrollLink>
            </li>

            <li>
              <ScrollLink to="projects" onClick={closeSideNav}>
                Projects
              </ScrollLink>
            </li>

            <li>
              <ScrollLink to="articles" onClick={closeSideNav}>
                Articles
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" onClick={closeSideNav}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideNav;
