import { useState } from "react";
import styles from "./SearchListItem.module.css";
//render cac props nhan duoc tu component SearchList
function SearchListItem(props) {
  const [isCancel, setIsCancel] = useState(props.free_cancel);
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.image} src={props.image_url} />
      </div>
      <div>
        <h3 className={styles.title}>{props.name}</h3>
        <p>{props.distance} from center</p>
        <p className={styles.tag}>{props.tag}</p>
        <p className={styles.description}>{props.description}</p>
        <p>{props.type}</p>
        {/* hien thi content khi free_cancel=true */}
        <p className={styles.cancel}>{isCancel ? "Free Cancel" : ""}</p>
        <p className={styles.cancel__descripton}>
          {isCancel
            ? "You can cancel later, so lock in this great price today!"
            : ""}
        </p>
      </div>
      <div className={styles.price_info}>
        <div className={styles.rate_container}>
          <p className={styles.rate_text}>{props.rate_text}</p>
          <p className={styles.rate}>{props.rate}</p>
        </div>
        <p className={styles.price}>${props.price}</p>
        <p className={styles.price_bonus}>Includes taxes and fees</p>
        <button>See availability</button>
      </div>
    </div>
  );
}
export default SearchListItem;
