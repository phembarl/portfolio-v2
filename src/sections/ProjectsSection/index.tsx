'use client';

import { v4 as uuidv4 } from 'uuid';
import { merriweather } from '@/styles/fonts';
import style from './style.module.scss';
import Card from '@/components/Card';
import { Element } from 'react-scroll';
import { projects } from '@/data';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const projectsVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 * i, ease: 'easeInOut', duration: 0.5 },
  }),
};

const Projects = () => {
  return (
    <Element name="projects">
      <motion.div
        className={`section-top-margin section-line-height ${style.projectsSection}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>Projects</p>

        <h2 className={`colored-text ${merriweather.className}`}>
          Recent Projects
        </h2>

        <br />

        <div className={style.projectList}>
          {projects.map((p, i) => (
            <motion.span
              key={uuidv4()}
              variants={projectsVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true }}
              custom={i}
            >
              <Card
                title={p.title}
                description={p.description}
                tags={p.skills}
                imageUrl={p.imageUrl}
                linkTo={p.url}
              />
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Element>
  );
};

export default Projects;
