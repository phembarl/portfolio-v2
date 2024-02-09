'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import ScrollLink from '../ScrollLink';

import style from './mobileNav.module.scss';
import SideNav from './SideNav';

const MobileNav = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  useEffect(() => {
    if (showSideNav) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showSideNav]);

  return (
    <div className={style.mobileNav}>
      <ul>
        <li className={style.brand}>
          <ScrollLink to="home">
            <Icon icon="fa6-solid:f" width="20" height="20" />
            <Icon icon="fa6-solid:bold" width="20" height="20" />
          </ScrollLink>
        </li>
      </ul>
      <ul>
        <li className={style.navItem}>
          <Icon
            icon="mdi:hamburger-open"
            width="35"
            height="35"
            onClick={() => setShowSideNav(true)}
          />
        </li>
      </ul>
      <SideNav
        showSideNav={showSideNav}
        closeSideNav={() => setShowSideNav(false)}
      />
    </div>
  );
};

export default MobileNav;
