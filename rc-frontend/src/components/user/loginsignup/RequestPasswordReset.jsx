import React, { useEffect, useRef, useState } from "react";
import styles from "./loginSignup.module.css";
import ModalHeader from "./ModalHeader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { isEmailValid } from "./validation";
import { useAuth } from "../../../customHook/AuthContext";
import showToast from "../showToast";

const RequestPasswordReset = ({ closeModal, isOpen }) => {
  const [ email, setEmail ] = useState("");
  const [ emailError, setEmailError ] = useState(null);
  const [ showLoginModal, setShowLoginModal ] = useState(false);
  const modalRef = useRef(null);
  const formEmail = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const { setUserEmail } = useAuth();
  // show modal if path /login
  useEffect(() => {
    if (location.pathname === "/request-password-reset") {
      setShowLoginModal(true);
    } else {
      setShowLoginModal(false);
    }
  }, [ location.pathname ]);

  // hide body scroll
  useEffect(() => {
    if (location.pathname === "/request-password-reset") {
      document.body.classList.add(`${ styles.noScroll }`);
    }
  }, [ location.pathname ]);

  const removeNoScrollClass = () => {
    document.body.classList.remove(`${ styles.noScroll }`);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setEmailError('');
  };


  const handleInputBlur = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "email": {
        if (!isEmailValid(value)) {
          setEmail(value);
          setEmailError("Invalid email address format. Please enter a valid email address in the format user@example.com.");
          formEmail.current.classList.remove(`${ styles.valid }`);
          return formEmail.current.classList.add(`${ styles.invalid }`);
        } else {
          setEmail(value);
          setEmailError("");
          formEmail.current.classList.remove(`${ styles.invalid }`);
          return formEmail.current.classList.add(`${ styles.valid }`);
        }
      }
      default: {
        return;
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // validate email and password
    let emailValid = true;

    // check if email is empty
    if (!email) {
      setEmailError("Email is required");
      emailValid = false;
    } else if (!isEmailValid(email)) {
      setEmailError("Invalid email address format. Please enter a valid email address in the format user@example.com.");
      formEmail.current.classList.remove(`${ styles.valid }`);
      formEmail.current.classList.add(`${ styles.invalid }`);
      emailValid = false;
    } else {
      setEmailError("");
      formEmail.current.classList.remove(`${ styles.invalid }`);
      formEmail.current.classList.add(`${ styles.valid }`);
    }

    // if  email request to backend logic here
    if (emailValid) {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
        const route = '/user/reset-password/request';
        const url = baseUrl + route;
        const body = { email };
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
          showToast({ message: 'OTP sent successfully!', type: 'success', });
          setUserEmail(email);

          // if OTP sent successfully, navigate to the new route
          setTimeout(() => {
            navigate("/user/verify-password-reset");
          }, 2000); // delay for 2 seconds before navigating to the home URL

        } else {
          console.log(data);
          if (data.message === 'User not found') {

            showToast({ message: 'User not found!', type: 'error', });
          } else {
            showToast({ message: 'OTP could not be sent. Please try again later!', type: 'error', });
          }
        }
      } catch (error) {
        showToast({ message: 'Server error occurred!', type: 'error', });
      }

    }
  };

  return (
    <>
      <div
        className={`${ styles.signupContainer } ${ showLoginModal ? styles.open : ""
          }`}
        ref={modalRef}
      >
        <ModalHeader removeNoScrollClass={removeNoScrollClass} />

        <main>
          <div className={styles.modal}>
            <div className={styles.closeIconContainer}>
              <Link to="/" onClick={removeNoScrollClass}>
                <FaTimes className={styles.closeIcon} />
              </Link>
            </div>
            <div className={styles.heading}>
              <h1>Reset Your Password</h1>
            </div>
            <div className={styles.requestResetPassword}>
              <p>
                If the account exists, we'll email you instructions to reset the
                password.
              </p>
            </div>
            <div ref={modalRef} className={styles.modalContent}>
              <form onSubmit={handleSubmit}>
                <div className={styles.InputFieldWrapper}>
                  <div className={styles.InputFieldWrapper}>
                    <label>Email:</label>
                  </div>
                  <InputField
                    inputValue={email}
                    inputType="email"
                    handleChange={handleInputChange}
                    handleBlur={handleInputBlur}
                    name="email"
                    formRef={formEmail}
                  />
                  <div className={styles.ErrorMessage}>{emailError}</div>
                </div>

                <SubmitButton>Send OTP</SubmitButton>
              </form>
              <div className={styles.forgetPassword}>
                <Link to="/user/login">
                  <span>Return to login</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RequestPasswordReset;
