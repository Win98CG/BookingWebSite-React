import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DetailBody.module.css";
import detailData from "./data/detail.json";
//phan body cua detail page
function DetailBody() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__info}>
          <h2>{detailData.name}</h2>
          <p>
            <FontAwesomeIcon className={styles.icon} icon="map-marker" />
            {detailData.address}
          </p>
          <p>{detailData.distance}</p>
          <p>{detailData.price}</p>
        </div>
        <div>
          <button className={styles.button}>Reserve or Book Now!</button>
        </div>
      </div>
      {/* render ra hinh anh */}
      <div className={styles.list__photo}>
        {detailData.photos.map((photo, index) => (
          <div key={index} className={styles.photo}>
            <img src={photo} />
          </div>
        ))}
      </div>
      <div className={styles.container__description}>
        <div className={styles.description}>
          <h2>{detailData.title}</h2>
          <p>{detailData.description}</p>
        </div>
        <div className={styles.description__price}>
          <h3>Perfect for 9-night stay!</h3>
          <p>
            Located in the real heart of Karkow, this property has an excellent
            location score of 9.8!
          </p>
          <p className={styles.price}>
            <span>${detailData.nine_night_price}</span> (9 nights)
          </p>
          <button className={`${styles.button} ${styles.button__price}`}>
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </div>
  );
}
export default DetailBody;
