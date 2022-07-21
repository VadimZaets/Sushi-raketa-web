import { Formik } from "formik";
// import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../../components/_shared/LabelForm/LabelForm";
import styles from "./sass/RegisterView.module.scss";
import Link from "next/link";
const RegisterView = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        //  validationSchema={authValidationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <div className={styles.wrapper}>
            <h2 className={styles.authFormTitle}>Реєстрація</h2>
            <form onSubmit={handleSubmit} className={styles.authFormInput}>
              <LabelForm
                type="email"
                placeholder="Логін"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />
              <LabelForm
                type="password"
                placeholder="Пароль"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />

              <LabelForm
                type="password"
                placeholder="Повторіть пароль"
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
              />

              <button type="button" className={styles.btn}>
                Зареєструватись
              </button>
              <Link href="/login">
                <a className={styles.login}>Повернутись до входу</a>
              </Link>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterView;
