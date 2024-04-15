import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";
import data from "../data/navBar.json";
function NavBar() {
  return (
    <div>
      <div className={styles.header}>
        <h4>Booking Website</h4>
        <div className={styles.button}>
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      <ul className={styles.container}>
        {data.map((item, index) => (
          <NavBarItem
            key={index}
            type={item.type}
            icon={item.icon}
            active={item.active}
          />
        ))}
      </ul>
    </div>
  );
}
export default NavBar;
