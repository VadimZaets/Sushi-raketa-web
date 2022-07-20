import Layout from "../../layout/layout";
import styles from "./sass/AuthCard.module.scss";
const AuthCard = ({ children }) => {
  return (
    <div className={styles.auth_wrapper}>
      <div className={styles.auth_block}>
        <h2>Увійти</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
