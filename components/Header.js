import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <h5 className={styles.curve}>With great exitement you are invited to</h5>
        <h2 className={styles.curve}>The partnership ceremony of</h2>
        <h1 className={styles.title}>Quan & Ties</h1>
      </div>
    </>
  );
}
