'use client';

import { v4 as uuidv4 } from 'uuid';
import { skills } from '@/data';
import Tag from '@/components/Tag';
import { merriweather } from '@/styles/fonts';
import { Element } from 'react-scroll';

const Skills = () => {
  return (
    <Element name="skills">
      <div className="section-top-margin section-line-height">
        <p>Skills</p>
        <h2 className={`colored-text ${merriweather.className}`}>
          Recent technologies I&apos;ve worked with
        </h2>

        {skills.map(skill => (
          <Tag text={skill} key={uuidv4()} />
        ))}
      </div>
    </Element>
  );
};

export default Skills;
