'use client';

import { Icon } from '@iconify/react/dist/iconify.js';
import ScrollLink from '../ScrollLink';
import { motion } from 'framer-motion';

import style from './style.module.scss';
import { navbarVariants } from '@/helpers/variants';

const Navbar = () => {
  return (
    <motion.div
      className={`${style.navbar} navbar-global`}
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
        <li className={style.navItem}>
          <ScrollLink to="articles">Blog</ScrollLink>
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
