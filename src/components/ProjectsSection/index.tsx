'use client';

import { v4 as uuidv4 } from 'uuid';
import { merriweather } from '@/styles/fonts';
import style from './style.module.scss';
import Card from '@/components/Card';
import { Element } from 'react-scroll';
import { projects } from '@/data';

const Projects = () => {
  return (
    <Element name="projects">
      <div
        className={`section-top-margin section-line-height ${style.projectsSection}`}
      >
        <p>Projects</p>

        <h2 className={`colored-text ${merriweather.className}`}>
          Recent Projects
        </h2>

        <br />

        <div className={style.projectList}>
          {projects.map(p => (
            <Card
              key={uuidv4()}
              title={p.title}
              description={p.description}
              tags={p.skills}
              imageUrl={p.imageUrl}
              linkTo={p.url}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
