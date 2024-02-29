'use client';

import { v4 as uuidv4 } from 'uuid';
import { merriweather } from '@/styles/fonts';
import style from './style.module.scss';
import Card from '@/components/Card';
import { Element } from 'react-scroll';
import { articles } from '@/data';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const articlesVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 * i, ease: 'easeInOut', duration: 0.5 },
  }),
};

const Articles = () => {
  return (
    <Element name="articles">
      <motion.div
        className={`section-top-margin section-line-height ${style.articlesSection}`}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p>Articles</p>

        <h2 className={`colored-text ${merriweather.className}`}>
          Stuff I&apos;ve Written
        </h2>

        <br />

        <div className={style.articleList}>
          {articles.map((a, i) => (
            <motion.span
              key={uuidv4()}
              variants={articlesVariants}
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
                title={a.title}
                description={a.description}
                // tags={a.skills}
                date={a.year}
                imageUrl={a.imageUrl}
                linkTo={a.url}
              />
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Element>
  );
};

export default Articles;
