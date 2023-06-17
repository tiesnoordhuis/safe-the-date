import styles from './FeedbackForm.module.css'

export default function FeedbackForm() {
  return (
      <form
        className={styles.form}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="feedback"
        method="POST"
        action="/success"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <p className={styles.hidden}>
            <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
        </p>
  
        <label htmlFor="name">Name</label>
        <input id="name" className={styles['form-field']} type="text" name="name" required/>

        <p htmlFor="feedback">Ben je bij de ceremoni aanwezig?</p>
        <span>Ja</span><input id='aanwezigJa' name='aanwezig' type='radio' value="Ja" required/>
        <span>Nee</span><input id='aanwezigNee' name='aanwezig' type='radio' value="Ja" required/>
        <button className={styles.button} type="submit">Submit</button>
      </form>
  )
}
