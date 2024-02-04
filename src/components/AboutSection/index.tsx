import { merriweather } from '@/app/fonts';
import style from './style.module.scss';

const About = () => {
  return (
    <div className={`section-line-height ${style.aboutSection}`}>
      <p>About</p>
      <h2 className={`colored-text ${merriweather.className}`}>Who am I?</h2>

      <p>
        Hi! I&apos;m <span className="colored-text bold">Femi Balogun</span> 👋🏽
        Welcome to my corner of the internet. <br /> I&apos;m a Software
        Engineer with about 6 years in the game, actively involved in bringing
        various applications to life. I&apos;m all about solving problems and
        getting things done, and I&apos;ve managed to launch some cool projects
        along the way.
        <br />
        <br />I love diving into the nitty-gritty of product life cycles and
        making things happen. What keeps me going? A mix of innovation,
        integrity, and a solid dose of commitment. People often say I&apos;m a
        self-starter, and I&apos;ve got some pretty decent people skills too.
        <br />
        <br />
        Join me as I share my experiences, insights, and a sprinkle of tech
        magic on this platform. Looking forward to connecting and exploring the
        fascinating world of software engineering together!
      </p>

      <br />

      <a
        href="/resume.pdf"
        target="_blank"
        className={`bold ${style.resumeLink}`}
      >
        View résumé
      </a>
    </div>
  );
};

export default About;
