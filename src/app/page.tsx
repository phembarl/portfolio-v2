import About from '@/components/AboutSection';
import styles from './page.module.scss';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div>
        <About />
      </div>
    </main>
  );
}
