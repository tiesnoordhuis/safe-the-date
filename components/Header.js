import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <h5>With great exitement you are invited to</h5>
        <h2>The partnership ceremony of</h2>
        <h1 className={styles.title}>Quan & Ties</h1>
      </div>
    </>
  );
}
