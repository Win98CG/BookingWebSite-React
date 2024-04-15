import styles from "./HotelTypes.module.css";
import data from "./data/type.json";
//Hiển thị các loại khách sạn
function HotelTypes() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Browse by property type</h4>
      <div className={styles.list__items}>
        {data.map((type, index) => (
          <div className={styles.item} key={index}>
            <img src={type.image} />
            <h4>{type.name}</h4>
            <p>{type.count} Hotels</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HotelTypes;
