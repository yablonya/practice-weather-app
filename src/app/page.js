import MainBlock from "@/components/main-block/MainBlock";
import styles from "./global.scss";
import DetailsBlock from "@/components/details-block/DetailsBlock";

export default function Home() {
  return (
    <main style={{display: 'flex'}}>
      <MainBlock/>
      <DetailsBlock/>
    </main>
  );
}
