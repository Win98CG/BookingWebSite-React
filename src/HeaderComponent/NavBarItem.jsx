import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./NavBarItem.module.css";
//xu ly cac props nhan tu component NavBar
function NavBarItem(props) {
  //tao border dua vao thuoc tinh active
  const [isActive, setIsActive] = useState(props.active);
  const changeActiveHandle = function () {
    setIsActive(!isActive);
  };
  return (
    <li
      onClick={changeActiveHandle}
      className={`${styles.navbar__item} ${
        isActive && styles.navbar__item_active
      }`}
    >
      <FontAwesomeIcon icon={props.icon} />
      <p>{props.type}</p>
    </li>
  );
}
export default NavBarItem;
