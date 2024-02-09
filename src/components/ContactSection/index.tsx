'use client';

import React from 'react';
import style from './style.module.scss';
import { merriweather } from '@/styles/fonts';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { sectionVariants } from '@/helpers/variants';

const Contact = () => {
  return (
    <Element name="contact">
      <motion.div
        className={`${style.contactSection} section-top-margin section-line-height`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className={`colored-text ${merriweather.className}`}>
          Get In Touch
        </h2>

        <br />

        <p className={style.contactText}>
          Excited about the possibilities? Let&apos;s chat and explore how we
          can collaborate further! Drop a message, and let&apos;s keep the
          momentum going.
        </p>

        <br />

        <a
          href="mailto:phembarl@yahoo.com"
          className={`${style.contactLink} btn bold`}
        >
          Hi Femi 👋
        </a>
      </motion.div>
    </Element>
  );
};

export default Contact;
