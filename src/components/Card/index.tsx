'use client';

import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import style from './style.module.scss';
import Tag from '../Tag';
import { Icon } from '@iconify/react/dist/iconify.js';
import { motion } from 'framer-motion';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  linkTo?: string;
}

const Card = ({ imageUrl, title, description, tags, linkTo }: CardProps) => {
  return (
    <a
      href={linkTo}
      target="_blank"
      // whileHover={{
      //   scale: 1.05,
      //   transition: { duration: 0.3 },
      // }}
    >
      <div className={style.card}>
        <div>
          <Image
            src={imageUrl}
            alt="project-image"
            width={150}
            height={150}
            className={style.cardImage}
          />
        </div>

        <div className={style.textContent}>
          <h3 className={`${style.cardTitle}`}>
            {title}{' '}
            {linkTo && (
              <Icon
                icon="solar:arrow-right-up-linear"
                width="16"
                height="16"
                className={style.linkArrow}
              />
            )}
          </h3>
          <p className={style.cardDescription}>{description}</p>

          <div className={style.cardTags}>
            {tags.map(tag => (
              <Tag key={uuidv4()} text={tag} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
