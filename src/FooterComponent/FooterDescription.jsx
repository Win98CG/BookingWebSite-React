import styles from "./FooterDescription.module.css";
import data from "../data/footer.json";
function FooterDescription() {
  return (
    <div className={styles.cols}>
      {data.map((item) => (
        <div key={item.col_number}>
          {item.col_values.map((row) => (
            <span className={styles.item} key={row}>
              {row}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
export default FooterDescription;
