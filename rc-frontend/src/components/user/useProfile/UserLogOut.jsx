import React, {  useRef, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import styles from "../loginsignup/loginSignup.module.css";
import InputField from '../loginsignup/InputField';
import { isEmailValid, isPasswordStrong } from '../loginsignup/validation';
import { Link, useNavigate } from "react-router-dom";
import userProfileStyles from "./UserProfile.module.css";
import SubmitButton from '../loginsignup/SubmitButton';
import { useAuth } from '../../../customHook/AuthContext';
import showToast from '../showToast';
import { ToastContainer } from 'react-toastify';

const UserLogOut = () => {



  const [ showPassword, setShowPassword ] = useState(false);

  const [ formData, setFormData ] = useState({
    password: "",
    email: "",
    passwordError: "",
    emailError: "",
  });

  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, userEmail, setUserEmail } = useAuth();
  const formPassword = useRef(null);
  const formEmail = useRef(null);


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
      case "email": {
        if (!isEmailValid(value)) {
          setFormData({
            ...formData,
            email: value,
            emailError:
              "Invalid email or password",
          });
          formEmail.current.classList.remove(`${ styles.valid }`);
          return formEmail.current.classList.add(`${ styles.invalid }`);
        } else {
          setFormData({
            ...formData,
            email: value,
            emailError: "",
          });
          formEmail.current.classList.remove(`${ styles.invalid }`);
          return formEmail.current.classList.add(`${ styles.valid }`);
        }
      }
      case "password": {
        if (!isPasswordStrong(value)) {
          setFormData({
            ...formData,
            password: value,
            passwordError: "invalid email or password",
          });
          formPassword.current.classList.remove(`${ styles.valid }`);
          formPassword.current.classList.add(`${ styles.invalid }`);
        } else {
          setFormData({
            ...formData,
            password: value,
            passwordError: "",
          });
          formPassword.current.classList.remove(`${ styles.invalid }`);
          formPassword.current.classList.add(`${ styles.valid }`);
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
    let emailValid = true;

    // check if email is valid
    if (!isEmailValid(formData.email)) {
      setFormData({
        ...formData,
        emailError: "Invalid email address format. Please enter a valid email address in the format user@example.com."
      });
      emailValid = false;
      formEmail.current.classList.remove(`${ styles.valid }`);
      formEmail.current.classList.add(`${ styles.invalid }`);
    } else {
      setFormData({
        ...formData,
        emailError: ""
      });
      formEmail.current.classList.remove(`${ styles.invalid }`);
      formEmail.current.classList.add(`${ styles.valid }`);
    }

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



    // * if email and password are valid, handle logic here
    if (passwordValid && emailValid) {
      try {
        const baseUrl = 'http://localhost:5000';
        const route = '/user/userprofile/logout';
        const url = baseUrl + route;
        const { password } = formData;
        const body = { userEmail, password };
        console.log({ userEmail, password });
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data.message);
          showToast({ message: 'User deleted successfully!', type: 'success', });
          setTimeout(() => {
            setIsLoggedIn(false);
            setUserEmail('');
            navigate('/');
          }, 2000); // delay for 2 seconds before navigating to the home URL
        } else {
          console.log(data);
          if (data.message === 'User not found') {
            showToast({ message: 'User not found!', type: 'error', });
          } else if (data.message === 'Invalid password') {
            showToast({ message: 'Invalid email or password', type: 'error', });
          }
        }
      } catch (error) {
        showToast({ message: 'server error occurred!', type: 'error', });
      }
    }
  };




  return (
    <>
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
        <h2>Delete  Account</h2>

        <form onSubmit={handleSubmit} style={{ maxWidth: "560px" }}>

          {/* Email */}
          <div className={styles.EmailInputWrapper}>
            <div className={styles.EmailInputLabel}>
              <label>Email:</label>
            </div>
            <InputField
              inputType="email"
              inputValue={userEmail}
              handleChange={handleInputChange}
              handleBlur={handleInputBlur}
              name="email"
              formRef={formEmail}
            />
            <div className={styles.ErrorMessage}>{formData.emailError}</div>
          </div>
          {/* Password */}
          <div className={styles.PasswordInputWrapper}>
            <div className={styles.PasswordInputLabel}>
              <label>Password:</label>
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



          <SubmitButton>Log Out</SubmitButton>
        </form>
      </div>
    </>
  );
};

export default UserLogOut;