import styles from "./FormSubcribe.module.css";
function FormSubcribe() {
  return (
    <div className={styles.container}>
      <h2>Save time, save money!</h2>
      <p>Sign up and We'll send the best deals to you</p>
      <div className={styles.form}>
        <input type="email" placeholder="Your Email" size="40" />
        <button className={styles.button}>Subcribe</button>
      </div>
    </div>
  );
}
export default FormSubcribe;
