import Image from 'next/image';
import styles from './page.module.scss';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div>
        <h1>My Portfolio</h1>
      </div>
    </main>
  );
}
