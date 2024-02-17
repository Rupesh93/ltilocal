import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          LTI&nbsp;
          <code className={styles.code}>Local</code>
        </p>
      </div>

    </main>
  );
}
