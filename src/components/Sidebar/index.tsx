'use client';

import { useState } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { merriweather } from '@/styles/fonts';
import { Icon } from '@iconify/react';

type ActiveTab = 'about' | 'experience' | 'projects';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('about');
  return (
    <div className={style.sidebar}>
      <div>
        <div className={style.topSection}>
          <Image
            src="/headshot.jpeg"
            alt="profile-pic"
            width={150}
            height={150}
            className={style.profilepic}
          />

          <h1 className={merriweather.className}>
            <span className="colored-text">Femi</span> Balogun
          </h1>
          <p>Senior Software Engineer</p>
        </div>

        <ul className={style.nav}>
          <li>
            <a
              href="#"
              className={activeTab === 'about' ? style.active : ''}
              onClick={() => setActiveTab('about')}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className={activeTab === 'experience' ? style.active : ''}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#"
              className={activeTab === 'projects' ? style.active : ''}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>

      <div>
        <a
          href="https://github.com/phembarl"
          target="_blank"
          style={{ paddingRight: '20px' }}
        >
          <Icon icon="mdi:github" width={40} height={40} />
        </a>

        <a
          href="https://www.linkedin.com/in/phembarl"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="mdi:linkedin" width={40} height={40} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
