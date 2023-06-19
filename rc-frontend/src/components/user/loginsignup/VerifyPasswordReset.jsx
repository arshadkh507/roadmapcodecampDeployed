import styles from "./loginSignup.module.css";
import { FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { Link, useLocation } from "react-router-dom";
import ModalHeader from "./ModalHeader";
import { isEmailValid, isPasswordStrong } from "./validation.js";
import { useAuth } from "../../../customHook/AuthContext";
import { useNavigate } from 'react-router-dom';
import showToast from "../showToast";
import { ToastContainer } from "react-toastify";
const VerifyPasswordReset = () => {

  const [ formData, setFormData ] = useState({
    otp: "",
    email: "",
    password: "",
    otpError: "",
    emailError: "",
    passwordError: ""
  });

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showSignupModal, setShowSignupModal ] = useState(false);
  const modalRef = useRef(null);
  const formOtp = useRef(null);
  const formEmail = useRef(null);
  const formPassword = useRef(null);


  const { userEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signup") {
      setShowSignupModal(true);
    } else {
      setShowSignupModal(false);
    }
  }, [ location.pathname ]);

  // hide body scroll
  useEffect(() => {
    if (location.pathname === "/signup") {
      document.body.classList.add(`${ styles.noScroll }`);
    }
  }, [ location.pathname ]);

  const removeNoScrollClass = () => {
    document.body.classList.remove(`${ styles.noScroll }`);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
      case "otp": {
        const trimmedValue = value.trim();
        const regex = /^[0-9]{6}$/;
        if (!regex.test(trimmedValue)) {
          setFormData({
            ...formData,
            otp: trimmedValue,
            otpError: "Please enter a valid 6-digit OTP"
          });
          formOtp.current.classList.remove(`${ styles.valid }`);
          return formOtp.current.classList.add(`${ styles.invalid }`);
        } else {
          setFormData({
            ...formData,
            otp: trimmedValue,
            otpError: ""
          });
          formOtp.current.classList.remove(`${ styles.invalid }`);
          return formOtp.current.classList.add(`${ styles.valid }`);
        }
      }

      case "email": {
        if (!isEmailValid(value)) {
          setFormData({
            ...formData,
            email: value,
            emailError: "Invalid email address format. Please enter a valid email address in the format user@example.com."
          });
          formEmail.current.classList.remove(`${ styles.valid }`);
          return formEmail.current.classList.add(`${ styles.invalid }`);
        } else {
          setFormData({
            ...formData,
            email: value,
            nameError: ''
          });
          formEmail.current.classList.remove(`${ styles.invalid }`);
          return formEmail.current.classList.add(`${ styles.valid }`);
        }
      }
      case "password": {
        if (!isPasswordStrong(formData.password)) {
          setFormData({
            ...formData,
            password: value,
            passwordError: "Password should contain at least 6 characters"
          });
          formPassword.current.classList.remove(`${ styles.valid }`);
          return formPassword.current.classList.add(`${ styles.invalid }`);
        } else {
          setFormData({
            ...formData,
            password: value,
            nameError: ''
          });
          formPassword.current.classList.remove(`${ styles.invalid }`);
          return formPassword.current.classList.add(`${ styles.valid }`);
        }
      }
      default: {
        return;
      }
    }

  };




  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate name , email and password
    let emailValid = true;
    let otpValid = true;
    let passwordValid = true;

    // validate otp
    const regex = /^[0-9]{6}$/;
    if (!regex.test(formData.otp)) {
      setFormData({
        ...formData,
        otpError: 'Please enter a valid OTP (6-digit number)'
      });
      formOtp.current.classList.remove(`${ styles.valid }`);
      formOtp.current.classList.add(`${ styles.invalid }`);
      otpValid = false;
    } else {
      setFormData({
        ...formData,
        otpError: ''
      });
      formOtp.current.classList.remove(`${ styles.invalid }`);
      formOtp.current.classList.add(`${ styles.valid }`);
    }

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

    // * if name, email and password are valid, handle verify password  logic here
    if (emailValid && passwordValid && otpValid) {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
        const route = '/user/reset-password/verify';
        const url = baseUrl + route;
        const { otp, email, password } = formData;
        const body = { otp, email, password };
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if (response.ok) {
          showToast({ message: 'Password reset successfully!', type: 'success' });
          // navigate('/user/login'); // replace '/home' with the correct route for your app
          setTimeout(() => {
            navigate('/user/login');
          }, 2000); // delay for 2 seconds before navigating to the login URL
        } else {
          if (data.error === "Invalid or expired OTP") {
            showToast({ message: 'Invalid or expired OTP!', type: 'error' });
          } else {
            showToast({ message: 'Internal server error!', type: 'error' });
          }
        }
      } catch (error) {
        showToast({ message: 'Internal server error!', type: 'error' });
      }
    }
  };


  return (
    <>
      <div
        className={`${ styles.signupContainer } ${ showSignupModal ? styles.open : ""
          }`}
        ref={modalRef}
      >
        <ToastContainer />
        <ModalHeader removeNoScrollClass={removeNoScrollClass} />

        <main>
          <div className={styles.modal}>
            <div className={styles.closeIconContainer}>
              <Link to="/" onClick={removeNoScrollClass}>
                <FaTimes className={styles.closeIcon} />
              </Link>
            </div>
            <div className={styles.heading}>
              <h1>Password Reset</h1>
            </div>
            <div ref={modalRef} className={styles.modalContent}>
              <form onSubmit={handleSubmit}>

                {/* OTP */}
                <div className={styles.EmailInputWrapper}>
                  <div className={styles.EmailInputLabel}>
                    <label>Enter Otp:</label>
                  </div>
                  <InputField
                    inputType="number"
                    inputValue={formData.otp}
                    handleChange={handleInputChange}
                    handleBlur={handleInputBlur}
                    name="otp"
                    formRef={formOtp}
                  />
                  <div className={styles.ErrorMessage}>{formData.otpError}</div>
                </div>

                {/* Email */}
                <div className={styles.EmailInputWrapper}>
                  <div className={styles.EmailInputLabel}>
                    <label>Email:</label>
                  </div>
                  <InputField
                    inputType="email"
                    inputValue={userEmail}
                    name="email"
                    handleChange={handleInputChange}
                    handleBlur={handleInputBlur}
                    placeholder="example:abc123@example.com"
                    formRef={formEmail}
                  />
                  <div className={styles.ErrorMessage}>{formData.emailError}</div>
                </div>

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

                <SubmitButton>Reset Password</SubmitButton>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default VerifyPasswordReset;





