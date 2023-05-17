import React from "react";

/* import useValidateInput from "../../hooks/useValidateInput"; */

import styles from "./SearchForm.module.css";

/* const DUMMY_DATES = {
  future: "02/03/2053",
}; */

const DateOfBirthSearch = ({ onChangeHandler }) => {
  /* const [isDateValid, setIsDateValid] = useState(true); */

  /*  const formatDate = (date = "2001/04/02") => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return formattedDate;
  }; */

  return (
    <>
      <div className={styles.searchField}>
        <label className={styles.label} htmlFor="age">
          Date of birth:
        </label>
        <input
          onChange={onChangeHandler}
          className={styles.dateOfBirth}
          type="date"
        />
        {/* {!isDateValid && <p>invalid date.</p>} */}
      </div>
    </>
  );
};

export default DateOfBirthSearch;
