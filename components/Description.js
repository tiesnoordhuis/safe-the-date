import styles from './Description.module.css'

export default function Description({part}) {
  if (part === "cerimony") {
    return (
      <>
        <div className={styles.main}>
            <div className={styles.label}>
                Date
            </div>
            <div className={styles.big}>
                28th of June 2023
            </div>
            <div className={styles.medium}>
                at 10:30
            </div>
        </div>
        <div className={styles.main}>
            <div className={styles.label}>
                Location
            </div>
            <div className={styles.big}>
                Amsterdam
            </div>
            <div className={styles.medium}>
                municipality Oostpoort
            </div>
        </div>
        <div className={styles.second}>
            The ceremony will consist of the formal part of our partnership registration and will take a maximum of 10 minutes. <br/>
        </div>
      </>
    );
  } else if(part === 'dinner') {
    return (
        <>
          <div>
            In the morning we will be joined in a registerd partnership at the municipality building at Oostpoort Amsterdam. <br/>
            The ceremony will consist of the formal part of our partnership registration and will take a maximum of 10 minutes. <br/>
          </div>
        </>
      );
  }
}
