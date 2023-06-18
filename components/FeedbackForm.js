import styles from "./FeedbackForm.module.css";
import Description from "./Description";

export default function FeedbackForm() {
  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="rsvp"
      method="POST"
      action="/success"
    >
      
      <input type="hidden" name="form-name" value="rsvp" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <div className={styles['form-row']}>
        <label htmlFor="name">Naam</label>
        <input
          id="name"
          className={styles["form-field"]}
          type="text"
          name="name"
          required
        />
      </div>

      <h5>Please let us know if you will attend</h5>

      <div className={styles['form-row']}>
        <input id="ceremonyYes" name="ceremony" type="radio" value="Yes" required />
        <label htmlFor="ceremonyYes" className={styles['form-label-fixed']}>Yes, I will attend the ceremony</label>
      </div>

      <div className={styles['form-row']}>
        <input id="ceremonyNo" name="ceremony" type="radio" value="No" required />
        <label htmlFor="ceremonyNo" className={styles['form-label-fixed']}>No, I will not attend the ceremony</label>
      </div>

      {/* <hr />

      <p>Will you attend the dinner</p>

      <div className={styles['form-row']}>
        <label htmlFor="dinnerYes" className={styles['form-label-fixed']}>Yes</label>
        <input id="dinnerYes" name="dinner" type="radio" value="Yes" required />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="dinnerNo" className={styles['form-label-fixed']}>No</label>
        <input id="dinnerNo" name="dinner" type="radio" value="No" required />
      </div> */}

      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
