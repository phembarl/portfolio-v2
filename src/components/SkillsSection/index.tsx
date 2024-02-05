import { v4 as uuidv4 } from 'uuid';
import { skills } from '@/data';
import style from './style.module.scss';
import Tag from '@/components/Tag';
import { merriweather } from '@/styles/fonts';

const Skills = () => {
  return (
    <div className="section-top-margin section-line-height">
      <p>Skills</p>
      <h2 className={`colored-text ${merriweather.className}`}>
        Recent technologies I&apos;ve worked with
      </h2>

      {skills.map(skill => (
        <Tag text={skill} key={uuidv4()} />
      ))}
    </div>
  );
};

export default Skills;
