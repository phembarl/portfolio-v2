'use client';

import style from './style.module.scss';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const iconsVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
};

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <motion.div
        variants={iconsVariants}
        initial="hidden"
        whileInView="visible"
      >
        <div>
          <a
            href="https://github.com/phembarl"
            target="_blank"
            style={{ paddingRight: '20px' }}
          >
            <Icon
              icon="mingcute:github-line"
              width="24"
              height="24"
              className={style.socialIcon}
            />
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/phembarl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="streamline:linkedin"
              width="24"
              height="24"
              className={style.socialIcon}
            />
          </a>
        </div>

        <div>
          <a
            href="https://www.instagram.com/phembarl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="iconoir:instagram"
              width="24"
              height="24"
              className={style.socialIcon}
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
