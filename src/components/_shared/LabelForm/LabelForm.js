import { ErrorMessage } from "formik";
import styles from "./sass/LabelForm.module.scss";

const LabelForm = ({ type, handleChange, handleBlur, values }) => {
  return (
    <>
      <label className={styles.inputLabel} htmlFor={type}>
        <span> {type}</span>
        <input
          type={type}
          name={type}
          placeholder={type}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.type}
        />
        {/* {touched.password && errors.password && alert(errors.password)} */}
        <ErrorMessage
          component="div"
          name={type}
          className={styles.errorMessage}
        />
      </label>
    </>
  );
};

export default LabelForm;
