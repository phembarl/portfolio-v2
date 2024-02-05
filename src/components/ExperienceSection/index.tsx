'use client';

import { useInView } from 'react-intersection-observer';
import { v4 as uuidv4 } from 'uuid';
import { merriweather } from '@/styles/fonts';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';
import { experience } from '@/data';
import style from './style.module.scss';
import { memo, useEffect, useState } from 'react';

const Experience = () => {
  const { ref, inView, entry } = useInView({ threshold: 0.1 });

  const [animationCount, setAnimationCount] = useState(0);

  useEffect(() => {
    setAnimationCount(animationCount + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className={`section-top-margin ${style.experienceSection}`}>
      <div style={{ lineHeight: '2' }}>
        <p>Experience</p>
        <h2 className={`colored-text ${merriweather.className}`}>
          Where I&apos;ve Worked
        </h2>
      </div>

      <div ref={ref}>
        <VerticalTimeline animate={animationCount < 3}>
          {experience.map(exp => (
            <VerticalTimelineElement
              key={uuidv4()}
              visible={inView}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#0F3460',
                color: '#fff',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #0F3460' }}
              date={exp.datePeriod}
              iconStyle={{
                background: '#0F3460',
                color: '#fff',
              }}
              icon={
                <Icon
                  icon="ion:briefcase-outline"
                  width="24"
                  height="24"
                  style={{ color: 'white' }}
                />
              }
            >
              <a href={exp.url} target="_blank">
                <h3
                  className={`vertical-timeline-element-title ${merriweather.className}`}
                >
                  {exp.company}
                </h3>
              </a>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.role} {exp.type && `- (${exp.type})`}
              </h4>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <div className={style.resumeLinkContainer}>
        <a
          href="/resume.pdf"
          target="_blank"
          className={`bold ${style.resumeLink}`}
        >
          View Full Résumé{' '}
          <Icon
            icon="solar:arrow-right-up-linear"
            width="16"
            height="16"
            className={style.resumeArrow}
          />
        </a>
      </div>
    </div>
  );
};

export default memo(Experience);
