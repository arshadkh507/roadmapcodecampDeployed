import styles from "./loginSignup.module.css";
import { FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { Link, useLocation } from "react-router-dom";
import ModalHeader from "./ModalHeader";
import { isEmailValid, isPasswordStrong } from "./validation";
import { useAuth } from "../../../customHook/AuthContext";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import showToast from "../showToast";



const UserLogin = ({ closeModal, isOpen }) => {
  const [ showPassword, setShowPassword ] = useState(false);
  const [ formData, setFormData ] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });

  const [ showLoginModal, setShowLoginModal ] = useState(false);
  const modalRef = useRef(null);
  const formEmail = useRef(null);
  const formPassword = useRef(null);

  const { setIsLoggedIn, setUserEmail } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  // show modal if path /login
  useEffect(() => {
    if (location.pathname === "/login") {
      setShowLoginModal(true);
    } else {
      setShowLoginModal(false);
    }
  }, [ location.pathname ]);

  // hide body scroll
  useEffect(() => {
    if (location.pathname === "/login") {
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
      [ name + "Error" ]: "",
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
              "Invalid email address format. Please enter a valid email address in the format user@example.com.",
          });
          if (formEmail.current) {
            formEmail.current.classList.remove(`${ styles.valid }`);
            return formEmail.current.classList.add(`${ styles.invalid }`);
          }
        } else {
          setFormData({
            ...formData,
            email: value,
            emailError: "",
          });
          if (formEmail.current) {
            formEmail.current.classList.remove(`${ styles.invalid }`);
            return formEmail.current.classList.add(`${ styles.valid }`);
          }
        }
        break;
      }
      case "password": {
        if (!isPasswordStrong(formData.password)) {
          setFormData({
            ...formData,
            password: value,
            passwordError: "Password should contain at least 6 characters",
          });
          if (formPassword.current) {
            formPassword.current.classList.remove(`${ styles.valid }`);
            return formPassword.current.classList.add(`${ styles.invalid }`);
          }
        } else {
          setFormData({
            ...formData,
            password: value,
            passwordError: "",
          });
          if (formPassword.current) {
            formPassword.current.classList.remove(`${ styles.invalid }`);
            return formPassword.current.classList.add(`${ styles.valid }`);
          }
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

    // validate name , email and password
    let emailValid = true;
    let passwordValid = true;



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

    // * if  email and password are valid, handle signup logic here
    if (emailValid && passwordValid) {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
        const route = '/user/login';
        const url = baseUrl + route;
        console.log(url);
        const { email, password } = formData;
        const body = { email, password };
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if (response.ok) {
          showToast({ message: 'Login successful!', type: 'success', });
          setUserEmail(email);
          setIsLoggedIn(true);
          setTimeout(() => {
            navigate('/');
          }, 2000); // delay for 2 seconds before navigating to the login URL
        } else {
          if (data.error === 'Invalid email or password') {
            showToast({ message: 'Invalid email or password!', type: 'error', });
          } else {
            showToast({ message: 'Internal server error!', type: 'error', });
          }
          setIsLoggedIn(false);
        }
      } catch (error) {
        showToast({ message: 'Internal server error!', type: 'error', });
        setIsLoggedIn(false);
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
              <h1>Log In</h1>
            </div>
            <div ref={modalRef} className={styles.modalContent}>
              <form onSubmit={handleSubmit}>
                <div className={styles.EmailInputWrapper}>
                  <div className={styles.EmailInputLabel}>
                    <label>Email:</label>
                    <span>
                      Need an account?
                      <span>
                        <Link to="/user/signup">Sign up</Link>
                      </span>
                    </span>
                  </div>
                  <InputField
                    inputType="email"
                    inputValue={formData.email}
                    handleChange={handleInputChange}
                    handleBlur={handleInputBlur}
                    name="email"
                    formRef={formEmail}
                  />
                  <div className={styles.ErrorMessage}>{formData.emailError}</div>
                </div>

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
                    handleChange={handleInputChange}
                    handleBlur={handleInputBlur}
                    name="password"
                    formRef={formPassword}
                  />
                  <div className={styles.ErrorMessage}>{formData.passwordError}</div>
                </div>

                <SubmitButton>Log In</SubmitButton>
                <div className={styles.forgetPassword}>
                  <Link to="/user/request-password-reset">
                    <span>Forget Password?</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserLogin;
