'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import ScrollLink from '../ScrollLink';
import { motion } from 'framer-motion';

import style from './mobileNav.module.scss';
import SideNav from './SideNav';
import { navbarVariants } from '@/helpers/variants';

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
    <motion.div
      className={style.mobileNav}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  );
};

export default MobileNav;
