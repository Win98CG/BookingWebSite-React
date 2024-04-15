import styles from "./HeaderForm.module.css";
import InputForm from "./InputForm";
function HeaderForm() {
  return (
    <div>
      <div className={styles.container}>
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          get rewarded for your travels - unlock instant 10% or more with a free
          account
        </p>
        <button className={styles.button}>Sign in / Register</button>
      </div>
      <InputForm className={styles.input} />
    </div>
  );
}
export default HeaderForm;
