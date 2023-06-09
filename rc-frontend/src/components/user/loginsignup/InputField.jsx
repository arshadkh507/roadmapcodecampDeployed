import styles from "./loginSignup.module.css";

const InputField = ({
  inputType,
  name,
  formRef,
  inputValue,
  handleBlur,
  handleChange,
  placeholder,
}) => {
  return (
    <div className={styles.InputFieldWrapper}>
      <input
        type={inputType}
        value={inputValue}
        name={name}
        onChange={handleChange}
        required
        ref={formRef}
        onBlur={handleBlur}
        placeholder={placeholder ? placeholder : ""}
        autoComplete="off"
      />
    </div>
  );
};

export default InputField;
