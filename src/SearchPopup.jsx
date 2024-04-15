import styles from "./SearchPopup.module.css";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useEffect, useRef, useState } from "react";
//render phần popup nằm bên trái của Page
function SearchPopup() {
  //Lam phan Date nang cao
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  //dong mo modal
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideClickOutside, true);
  }, []);
  //dong khi bam nut Esc
  const hideOnEscape = function (e) {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };
  //dong khi click ben ngoai
  const refOne = useRef(null);
  const hideClickOutside = function (e) {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  return (
    <div className={styles.background}>
      <h3>Search</h3>
      <form className={styles.form__control}>
        <label>Destination</label>
        <input type="text" />
      </form>
      <form className={styles.form__control}>
        <label className={`${styles.form__control} ${styles.calendarWrap}`}>
          Check-in day
          <input
            readOnly
            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(
              range[0].endDate,
              "MM/dd/yyyy"
            )}`}
            size="30"
            placeholder="06/24/2022 to 06/24/2022"
            onClick={() => setOpen(!open)}
          />
          <div ref={refOne}>
            {open && (
              <DateRange
                date={new Date()}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={range}
                months={1}
                direction="horizontal"
                className={styles.calendarElement}
                onChange={(item) => setRange([item.selection])}
              />
            )}
          </div>
        </label>
      </form>
      <form className={styles.form__option}>
        <label>Options</label>
        <div className={styles.form__option__input}>
          <p>Min price per night</p>
          <input type="number" />
        </div>
        <div className={styles.form__option__input}>
          <p>Max price per night</p>
          <input type="number" />
        </div>
        <div className={styles.form__option__input}>
          <p>Adult</p>
          <input type="number" />
        </div>
        <div className={styles.form__option__input}>
          <p>Children</p>
          <input type="number" />
        </div>
        <div className={styles.form__option__input}>
          <p>Room</p>
          <input type="number" />
        </div>
        <button className={styles.form__button}>Search</button>
      </form>
    </div>
  );
}
export default SearchPopup;
