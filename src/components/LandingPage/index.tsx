'use client';
// 'use server';

import React, { useEffect } from 'react';
import style from './style.module.scss';
import { chakraPetch, montserrat } from '@/styles/fonts';
import Image from 'next/image';
import { Icon } from '@iconify/react/dist/iconify.js';
import ScrollLink from '../ScrollLink';
import { Element } from 'react-scroll';

const Landing = () => {
  return (
    <Element name="home">
      <div className={style.landingPage}>
        <div className={style.landingPageContent}>
          <div className={style.textContent}>
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
          </div>
          <Image
            src="/headshot.jpeg"
            alt="profile-pic"
            width={300}
            height={300}
            className={style.profilePic}
          />
        </div>

        <div className={style.btnContainer}>
          <ScrollLink to="about">
            <button className={style.btn}>
              Jump In{' '}
              <Icon
                icon="ph:arrow-down"
                width="20"
                height="20"
                className={style.btnArrow}
              />
            </button>
          </ScrollLink>
        </div>
      </div>
    </Element>
  );
};

export default Landing;
