import styles from "./loginSignup.module.css";
import { FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import { Link, useLocation } from "react-router-dom";
import ModalHeader from "./ModalHeader";
import { isEmailValid, isPasswordStrong, isValidName } from "./validation.js";
import { useAuth } from "../../../customHook/AuthContext";
import { useNavigate } from 'react-router-dom';
import showToast from "../showToast";
import { ToastContainer } from "react-toastify";
const UserSignUp = () => {

  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
  });

  const [ showPassword, setShowPassword ] = useState(false);
  const [ showSignupModal, setShowSignupModal ] = useState(false);
  const modalRef = useRef(null);
  const formName = useRef(null);
  const formEmail = useRef(null);
  const formPassword = useRef(null);


  const { setIsLoggedIn, setUserEmail } = useAuth();
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
      case "name": {
        const trimmedValue = value.trim();
        if (!isValidName(trimmedValue)) {
          setFormData({
            ...formData,
            name: trimmedValue,
            nameError: 'Please enter a valid name (2-50 alphabetic characters)'
          });
          if (formName.current) {
            formName.current.classList.remove(`${ styles.valid }`);
            formName.current.classList.add(`${ styles.invalid }`);
          }
        } else {
          setFormData({
            ...formData,
            name: trimmedValue,
            nameError: ''
          });
          if (formName.current) {
            formName.current.classList.remove(`${ styles.invalid }`);
            formName.current.classList.add(`${ styles.valid }`);
          }
        }
        break;
      }
      case "email": {
        if (!isEmailValid(value)) {
          setFormData({
            ...formData,
            email: value,
            emailError: "Invalid email address format. Please enter a valid email address in the format user@example.com."
          });
          if (formEmail.current) {
            formEmail.current.classList.remove(`${ styles.valid }`);
            formEmail.current.classList.add(`${ styles.invalid }`);
          }
        } else {
          setFormData({
            ...formData,
            email: value,
            nameError: ''
          });
          if (formEmail.current) {
            formEmail.current.classList.remove(`${ styles.invalid }`);
            formEmail.current.classList.add(`${ styles.valid }`);
          }
        }
        break;
      }
      case "password": {
        if (!isPasswordStrong(formData.password)) {
          setFormData({
            ...formData,
            password: value,
            passwordError: "Password should contain at least 6 characters"
          });
          if (formPassword.current) {
            formPassword.current.classList.remove(`${ styles.valid }`);
            formPassword.current.classList.add(`${ styles.invalid }`);
          }
        } else {
          setFormData({
            ...formData,
            password: value,
            nameError: ''
          });
          if (formPassword.current) {
            formPassword.current.classList.remove(`${ styles.invalid }`);
            formPassword.current.classList.add(`${ styles.valid }`);
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
    let nameValid = true;
    let passwordValid = true;

    // validate name 
    const newName = formData.name.trim();
    if (!isValidName(newName)) {
      setFormData({
        ...formData,
        nameError: 'Please enter a valid name (2-50 alphabetic characters)'
      });
      formName.current.classList.remove(`${ styles.valid }`);
      formName.current.classList.add(`${ styles.invalid }`);
      nameValid = false;
    } else {
      setFormData({
        ...formData,
        name: newName,
        nameError: ''
      });
      formName.current.classList.remove(`${ styles.invalid }`);
      formName.current.classList.add(`${ styles.valid }`);
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

    // * if name, email and password are valid, handle signup logic here
    if (emailValid && passwordValid && nameValid) {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
        const route = '/user/signup';
        const url = baseUrl + route;
        console.log(url);
        const { name, email, password } = formData;
        const body = { name, email, password };
        const response = await fetch(`${url}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        });
        const data = await response.json();
        if (response.ok) {
          showToast({ message: 'User created successfully!', type: 'success' });
          setUserEmail(email);
          setIsLoggedIn(true);
          setTimeout(() => {
            navigate('/');
          }, 2000); // delay for 2 seconds before navigating to the home URL
        } else {
          console.log(data);
          if (data.error === 'User already exists') {
            showToast({ message: 'User already exists!', type: 'error' });
            setTimeout(() => {
              navigate('/user/login');
            }, 2000);
          }
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error(error);
        // Set the isLoggedIn state to false
        setIsLoggedIn(false);
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
              <h1>Sign Up</h1>
            </div>
            <div ref={modalRef} className={styles.modalContent}>
              <form onSubmit={handleSubmit}>

                {/* Name */}
                <div className={styles.EmailInputWrapper}>
                  <div className={styles.EmailInputLabel}>
                    <label>Name:</label>
                    <span>
                      Already have an account?
                      <span>
                        <Link to="/user/login">Log in</Link>
                      </span>
                    </span>
                  </div>
                  <InputField
                    inputType="text"
                    inputValue={formData.name}
                    handleChange={handleInputChange}
                    handleBlur={handleInputBlur}
                    name="name"
                    formRef={formName}
                  />
                  <div className={styles.ErrorMessage}>{formData.nameError}</div>
                </div>

                {/* Email */}
                <div className={styles.EmailInputWrapper}>
                  <div className={styles.EmailInputLabel}>
                    <label>Email:</label>
                  </div>
                  <InputField
                    inputType="email"
                    inputValue={formData.email}
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

                <SubmitButton>Sign Up</SubmitButton>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserSignUp;
