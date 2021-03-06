import { Formik } from "formik";
// import { authValidationSchema } from "../../utils/validation/AuthValid";
import LabelForm from "../../components/_shared/LabelForm/LabelForm";
import styles from "./sass/LoginView.module.scss";
import Link from "next/link";
const LoginView = () => {
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
            <h2 className={styles.authFormTitle}>Увійти</h2>
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
              <Link href="/forgotpassword">
                <a className={styles.forgotPass}>Забули пароль?</a>
              </Link>

              <button type="button" className={styles.btn}>
                Увійти
              </button>

              <Link href="/registration">
                <a className={styles.btn}>Реєстрація</a>
              </Link>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginView;
