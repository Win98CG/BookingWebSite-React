import styles from "./Hotel.module.css";
import data from "./data/hotel_list.json";
//Hiển thị các khách sạn
function Hotel() {
  //chuyen trang khi click vao ten khach san
  const changePageHandle = function () {
    window.location.replace("./detail");
  };
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Home guests love</h4>
      <div className={styles.list__item}>
        {data.map((hotel, index) => (
          <div className={styles.item} key={index}>
            <img src={hotel.image_url} />
            <h4 onClick={changePageHandle}>{hotel.name}</h4>
            <p>{hotel.city}</p>
            <p className={styles.price}>Starting from ${hotel.price}</p>
            <p>
              <span className={styles.rate}>{hotel.rate}</span>
              {hotel.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hotel;
