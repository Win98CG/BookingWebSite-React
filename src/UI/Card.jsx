import styles from "./Card.module.css";
//mau nen cua header va subcribeform
function Card(props) {
  return <div className={styles.background}>{props.children}</div>;
}
export default Card;
