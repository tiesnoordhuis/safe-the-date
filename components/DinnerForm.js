import styles from "./DinnerForm.module.css";
import { useState, useEffect } from "react";

function BringPlusOneInput({ showPlusOne, setShowPlusOne }) {
  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="bringPlusOne"
        checked={showPlusOne}
        value={showPlusOne}
        onClick={() => {
          setShowPlusOne(!showPlusOne);
        }}
      />
      <label class="form-check-label" for="bringPlusOne">
        Are you bring a plus one?
      </label>
    </div>
  );
}

function PlusOneNameInput() {
  return (
    <div className={styles["form-row"]}>
        <label htmlFor="plusOneName">Name</label>
        <input
          id="plusOneName"
          className={styles["form-field"]}
          type="text"
          name="plusOneName"
          placeholder="Fill in their name"
          required
        />
      </div>
  )
}

export default function DinnerForm() {
  const [primaryName, setPrimaryName] = useState("");
  const [plusOneAllowed, setPlusOneAllowed] = useState(false);
  const [showPlusOne, setShowPlusOne] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setPrimaryName(queryParams.get("name") ?? "");
    setPlusOneAllowed(queryParams.get("plus-one") == "true" ? true : false);
  }, []);

  return (
    <form
      className={styles.form}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="rsvp"
      method="POST"
      action="/success"
    >
      <input type="hidden" name="form-name" value="dinner" />
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <div className={styles["form-row"]}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          className={styles["form-field"]}
          type="text"
          name="name"
          defaultValue={primaryName}
          placeholder="Fill in your name"
          required
        />
      </div>

      <h5>Please let us know if you will be joining our dinner</h5>

      <div className={`${styles["form-row"]} ${styles.good}`}>
        <input
          id="dinner1Yes"
          name="dinner1"
          type="radio"
          value="Yes"
          required
        />
        <label htmlFor="dinner1Yes" className={styles["form-label-fixed"]}>
          Yes, I will join the dinner
        </label>
      </div>

      <div className={`${styles["form-row"]} ${styles.bad}`}>
        <input id="dinner1No" name="dinner1" type="radio" value="No" required />
        <label htmlFor="dinner1No" className={styles["form-label-fixed"]}>
          No, I will not join the dinner
        </label>
      </div>

      {plusOneAllowed ? (
        <BringPlusOneInput
          setShowPlusOne={setShowPlusOne}
          showPlusOne={showPlusOne}
        />
      ) : null}

      {showPlusOne ? (
        <PlusOneNameInput />
      ) : null}

      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
}
