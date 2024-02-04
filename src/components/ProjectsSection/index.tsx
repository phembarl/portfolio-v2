import { v4 as uuidv4 } from 'uuid';
import { merriweather } from '@/app/fonts';
import style from './style.module.scss';
import Card from '@/components/Card';
import { projects } from '@/data';

const Projects = () => {
  return (
    <div
      className={`section-top-margin section-line-height ${style.projectsSection}`}
    >
      <p>Projects</p>

      <h2 className={`colored-text ${merriweather.className}`}>
        Recent Projects
      </h2>
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
  );
};

export default Projects;
