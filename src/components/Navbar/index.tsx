'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import ScrollLink from '../ScrollLink';

import style from './style.module.scss';

const Navbar = () => {
  return (
    <div className={`${style.navbar} navbar-global`}>
      <ul>
        <li className={style.brand}>
          <ScrollLink to="home">
            <Icon icon="fa6-solid:f" width="24" height="24" />
            <Icon icon="fa6-solid:bold" width="24" height="24" />
          </ScrollLink>
        </li>
      </ul>
      <ul>
        <li className={style.navItem}>
          <ScrollLink to="about">About</ScrollLink>
        </li>
        <li className={style.navItem}>
          <ScrollLink to="skills">Skills</ScrollLink>
        </li>
        <li className={style.navItem}>
          <ScrollLink to="experience">Experience</ScrollLink>
        </li>
        <li className={style.navItem}>
          <ScrollLink to="projects">Projects</ScrollLink>
        </li>
        <li className={style.navItem}>
          <ScrollLink to="contact">Contact</ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
