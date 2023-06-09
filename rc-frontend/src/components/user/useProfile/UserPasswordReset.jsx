import React, { useRef, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import styles from "../loginsignup/loginSignup.module.css";
import InputField from '../loginsignup/InputField';
import { isPasswordStrong } from '../loginsignup/validation';
import { Link } from "react-router-dom";
import userProfileStyles from "./UserProfile.module.css";
import SubmitButton from '../loginsignup/SubmitButton';
import { useAuth } from '../../../customHook/AuthContext';
import showToast from '../showToast';
import { ToastContainer } from 'react-toastify';

const UserPasswordReset = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
  const [ formData, setFormData ] = useState({
    password: "",
    confirmPassword: "",
    passwordError: "",
    confirmPasswordError: ""
  });

  const { isLoggedIn, userEmail } = useAuth();
  const formPassword = useRef(null);
  const formConfirmPassword = useRef(null);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (!isLoggedIn) {
    return <div />;
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [ name ]: value,
      [ name + "Error" ]: ""
    });

  };
  const handleInputBlur = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "password": {
        if (!isPasswordStrong(value)) {
          setFormData({
            ...formData,
            password: value,
            passwordError: "Password should contain at least 6 characters",
            confirmPasswordError: ""
          });
          formPassword.current.classList.remove(`${ styles.valid }`);
          formPassword.current.classList.add(`${ styles.invalid }`);
        } else {
          setFormData({
            ...formData,
            password: value,
            passwordError: "",
            confirmPasswordError: ""
          });
          formConfirmPassword.current.classList.remove(`${ styles.invalid }`);
          formPassword.current.classList.remove(`${ styles.invalid }`);
          formPassword.current.classList.add(`${ styles.valid }`);
        }
        break;
      }
      case "confirmPassword": {
        if (value !== formData.password) {
          setFormData({
            ...formData,
            confirmPassword: value,
            confirmPasswordError: "Passwords do not match",
          });
          formConfirmPassword.current.classList.remove(`${ styles.valid }`);
          formConfirmPassword.current.classList.add(`${ styles.invalid }`);
        } else {
          setFormData({
            ...formData,
            confirmPassword: value,
            confirmPasswordError: "",
          });
          formConfirmPassword.current.classList.remove(`${ styles.invalid }`);
          formConfirmPassword.current.classList.add(`${ styles.valid }`);
        }
        break;
      }
      default: {
        return;
      }
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate  password
    let passwordValid = true;
    let confirmPasswordValid = true;

    // * check  password 
    if (!isPasswordStrong(formData.password)) {
      setFormData({
        ...formData,
        passwordError: "Password should contain at least 6 characters"
      });
      passwordValid = false;
      formPassword.current.classList.remove(`${ styles.valid }`);
      formPassword.current.classList.add(`${ styles.invalid }`);
    } else {
      setFormData({
        ...formData,
        passwordError: ""
      });
      formPassword.current.classList.remove(`${ styles.invalid }`);
      formPassword.current.classList.add(`${ styles.valid }`);
    }

    if (formData.confirmPassword !== formData.password) {
      setFormData({
        ...formData,
        confirmPasswordError: "Passwords do not match",
      });
      confirmPasswordValid = false;
      formPassword.current.classList.remove(`${ styles.valid }`);
      formPassword.current.classList.add(`${ styles.invalid }`);
    } else {
      setFormData({
        ...formData,
        confirmPasswordError: ""
      });
      formPassword.current.classList.remove(`${ styles.invalid }`);
      formPassword.current.classList.add(`${ styles.valid }`);
    }

    // * if email and password are valid, handle logic here
    if (passwordValid && confirmPasswordValid) {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';
        const route = '/user/userprofile/resetpassword';
        const url = baseUrl + route;
        const { password } = formData;
        const body = { userEmail, password };
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.message);
          showToast({ message: 'Password Updated Successfully!', type: 'success', });
        } else {
          console.log(data);
          if (data.message === 'User not found') {
            showToast({ message: 'User not found!', type: 'error' });
          }
        }
      } catch (error) {
        showToast({ message: 'server error occure!', type: 'error', });
      }


      setFormData({
        password: "",
        confirmPassword: "",
        passwordError: "",
        confirmPasswordError: ""
      });

    }


  };


  return (
    <div className={userProfileStyles.SettingContainer}>
      <div className={styles.SettingsButtonWrapper}>
        <Link to="/user/user-profile/password-reset" className={userProfileStyles.SettingsButtonLink}>
          Password
        </Link>
        <Link to="/user/user-profile/logout" className={userProfileStyles.SettingsButtonLink}>
          Logout
        </Link>
      </div>
      <ToastContainer />
      <h2>Update Password</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "560px" }}>
        {/* Password */}
        <div className={styles.PasswordInputWrapper}>
          <div className={styles.PasswordInputLabel}>
            <label>New Password:</label>
            <span onClick={handleShowPassword}>
              {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <InputField
            inputType={showPassword ? "text" : "password"}
            inputValue={formData.password}
            name="password"
            handleChange={handleInputChange}
            handleBlur={handleInputBlur}
            placeholder="example:Abc@123"
            formRef={formPassword}
          />
          <div className={styles.ErrorMessage}>{formData.passwordError}</div>
        </div>

        {/*confirm  Password */}
        <div className={styles.PasswordInputWrapper}>
          <div className={styles.PasswordInputLabel}>
            <label>Confirm Password:</label>
            <span onClick={handleShowConfirmPassword}>
              {showConfirmPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
              {showConfirmPassword ? "Hide" : "Show"}
            </span>
          </div>

          <InputField
            inputType={showConfirmPassword ? "text" : "password"}
            inputValue={formData.confirmPassword}
            name="confirmPassword"
            handleChange={handleInputChange}
            handleBlur={handleInputBlur}
            formRef={formConfirmPassword}
          />
          <div className={styles.ErrorMessage}>{formData.confirmPasswordError}</div>
        </div>

        <SubmitButton>Update Password</SubmitButton>
      </form>
    </div>
  );
};

export default UserPasswordReset;


















/*  else if codition in password for if password !==  comfirmPassword

else if (formData.confirmPassword !== "" && value !== formData.confirmPassword) {
          setFormData({
            ...formData,
            password: value,
            passwordError: "",
            confirmPasswordError: "Passwords do not match"
          });
          formPassword.current.classList.remove(`${ styles.valid }`);
          formPassword.current.classList.add(`${ styles.invalid }`);
        }
*/