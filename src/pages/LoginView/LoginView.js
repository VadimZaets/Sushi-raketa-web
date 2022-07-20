import AuthCard from "../../components/AuthCard/AuthCard";
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
            <div className={styles.authForm}>
              <h2 className={styles.authFormTitle}>Увійти</h2>
              <form onSubmit={handleSubmit} className={styles.authFormInput}>
                <LabelForm
                  type="email"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <LabelForm
                  type="password"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <Link href="">
                  <a>Забули пароль?</a>
                </Link>
                <div className={styles.btn}>
                  <button type="button">Увійти</button>
                </div>
                <Link href="">
                  <a>Реєстрація</a>
                </Link>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default LoginView;
