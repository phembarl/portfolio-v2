import About from '@/components/AboutSection';
import styles from './page.module.scss';
import Sidebar from '@/components/Sidebar';
import Experience from '@/components/ExperienceSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div>
        <About />
        <Experience />
      </div>
    </main>
  );
}
