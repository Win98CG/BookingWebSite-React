import styles from "./InputForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css";
import { useEffect, useRef, useState } from "react";
function InputForm() {
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
  //chuyen trang khi nhan vao nut search
  const changePageHandle = function () {
    window.location.replace("./search");
  };
  return (
    <form className={styles.form__controls}>
      <label className={styles.form__control}>
        <FontAwesomeIcon className={styles.icon} icon="bed" />
        <input type="text" size="30" placeholder="Where are you going?" />
      </label>
      <label className={`${styles.form__control} ${styles.calendarWrap}`}>
        <FontAwesomeIcon className={styles.icon} icon="calendar" />
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
      <label className={styles.form__control}>
        <FontAwesomeIcon className={styles.icon} icon="female" />
        <input
          type="text"
          size="30"
          placeholder="1 adult - 0 children - 1 room"
        />
      </label>
      <button
        onClick={changePageHandle}
        className={styles.button}
        type="button"
      >
        Search
      </button>
    </form>
  );
}
export default InputForm;
