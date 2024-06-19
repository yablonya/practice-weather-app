import MainBlock from "@/components/main-block/MainBlock";
import DetailsBlock from "@/components/details-block/DetailsBlock";
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <MainBlock/>
      <DetailsBlock/>
    </main>
  );
}
