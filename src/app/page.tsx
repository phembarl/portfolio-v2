import About from '@/components/AboutSection';
import styles from './page.module.scss';
import Sidebar from '@/components/Sidebar';
import Experience from '@/components/ExperienceSection';
import Skills from '@/components/SkillsSection';
import Projects from '@/components/ProjectsSection';
import Landing from '@/components/LandingPage';
import Contact from '@/components/ContactSection';
import Articles from '@/components/ArticlesSection';

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
          <Articles />
          <Contact />
        </div>
      </main>
    </>
  );
}
