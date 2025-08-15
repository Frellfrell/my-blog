import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Home page</h1>
      <p>Welcome to my blog! Here you will find articles on various topics.</p>
    </div>
  );
}
