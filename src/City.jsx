import styles from "./City.module.css";
import data from "./data/city.json";
//Hiển thị các thành phố
function City() {
  return (
    <div className={styles.container}>
      {data.map((city, index) => (
        <div className={styles.item} key={index}>
          <img src={city.image} />
          <div className={styles.info}>
            <h4>{city.name}</h4>
            <p>{city.subText}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default City;
