import About from '@/sections/AboutSection';
import styles from './page.module.scss';
import Sidebar from '@/components/Sidebar';
import Experience from '@/sections/ExperienceSection';
import Skills from '@/sections/SkillsSection';
import Projects from '@/sections/ProjectsSection';
import Landing from '@/sections/LandingPage';
import Contact from '@/sections/ContactSection';
import Articles from '@/sections/ArticlesSection';

export default function Home() {
  return (
    <>
      <Landing />
      <main className={styles.main}>
        <Sidebar />
        <div>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Articles />
        </div>
      </main>
    </>
  );
}
