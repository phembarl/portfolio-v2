'use client';

import { v4 as uuidv4 } from 'uuid';
import { skills } from '@/data';
import Tag from '@/components/Tag';
import { merriweather } from '@/styles/fonts';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import style from './style.module.scss';

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const skillsVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * i, ease: 'easeInOut' },
  }),
};

const Skills = () => {
  return (
    <Element name="skills">
      <motion.div
        className="section-top-margin section-line-height"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>Skills</p>
        <h2 className={`colored-text ${merriweather.className}`}>
          Recent technologies I&apos;ve worked with
        </h2>
        <motion.ul>
          {skills.map((skill, i) => (
            <motion.li
              key={uuidv4()}
              className={style.skillListItem}
              variants={skillsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <Tag text={skill} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </Element>
  );
};

export default Skills;
