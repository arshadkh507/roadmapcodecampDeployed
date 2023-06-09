import styles from "./loginSignup.module.css";
const SubmitButton = ({ children }) => {
  return (
    <div className={styles.submitButton}>
      <button type="submit">{children}</button>
    </div>
  );
};


export default SubmitButton;