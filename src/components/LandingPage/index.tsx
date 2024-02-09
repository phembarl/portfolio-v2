'use client';

import style from './style.module.scss';
import { chakraPetch, montserrat } from '@/styles/fonts';
import { Icon } from '@iconify/react/dist/iconify.js';
import ScrollLink from '../ScrollLink';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { y: 0 },
  bounce: { y: [-30, 30], transition: { repeat: Infinity, duration: 1 } },
  hover: { scale: 1.2, y: 0 },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Landing = () => {
  return (
    <Element name="home">
      <div className={`${style.landingPage}`}>
        <div className={style.landingPageContent}>
          <motion.div
            className={style.textContent}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className={`${style.name} ${montserrat.className}`}>
              <h1>
                <span className={style.firstName}>Femi</span>{' '}
                <span className={style.lastName}>Balogun</span>
              </h1>
            </div>
            <p className={`${style.role} ${chakraPetch.className}`}>
              Software Engineer, Frontend
            </p>
            <p className={`${style.catchphrase}`}>
              Crafting pixel-perfect magic on the web, I&apos;m the frontend
              engineer who brings your ideas to life... one line of code at a
              time
            </p>

            <br />

            <div>
              <a
                href="https://github.com/phembarl"
                target="_blank"
                style={{ paddingRight: '20px' }}
              >
                <Icon
                  className={style.socials}
                  icon="mdi:github"
                  width={40}
                  height={40}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/phembarl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ paddingRight: '20px' }}
              >
                <Icon
                  className={style.socials}
                  icon="mdi:linkedin"
                  width="40"
                  height="40"
                />
              </a>

              <a
                href="https://www.instagram.com/phembarl"
                target="_blank"
                style={{ paddingRight: '20px' }}
              >
                <Icon
                  className={style.socials}
                  icon="mdi:instagram"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </motion.div>

          <motion.img
            src="/headshot.jpeg"
            alt="profile-pic"
            width={300}
            height={300}
            className={style.profilePic}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>

        <motion.div
          className={style.btnContainer}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ScrollLink to="about">
            <motion.button
              className={style.btn}
              variants={buttonVariants}
              initial="initial"
              animate="bounce"
              whileHover="hover"
            >
              Meet Me{' '}
              <Icon
                icon="ph:arrow-down"
                width="20"
                height="20"
                className={style.btnArrow}
              />
            </motion.button>
          </ScrollLink>
        </motion.div>
      </div>
    </Element>
  );
};

export default Landing;
