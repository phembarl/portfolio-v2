import About from '@/components/AboutSection';
import styles from './page.module.scss';
import Sidebar from '@/components/Sidebar';
import Experience from '@/components/ExperienceSection';
import Skills from '@/components/SkillsSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div>
        <About />
        <Skills />
        <Experience />
      </div>
    </main>
  );
}
