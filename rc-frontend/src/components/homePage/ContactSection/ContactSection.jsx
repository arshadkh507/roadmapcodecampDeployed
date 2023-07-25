import { useRef, useState } from "react";
import styles from "./contactsection.module.css";
import ContactToMe from "./ContactToMe";
// import arshadImage from "../../../containers/homePage/Testimonial/slider-images/arshad-khan.jpeg";
// import furqanImage from "../../../containers/homePage/Testimonial/slider-images/furqan-ali.png";
import emailjs from '@emailjs/browser';
import showToast from "../../user/showToast";
import { ToastContainer } from "react-toastify";

const ContactSection = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;
  const form = useRef();
  const [ contactFormData, setContactFormData ] = useState({
    from_name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [ errors, setErrors ] = useState({});


  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!contactFormData.from_name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
      showToast({ message: 'Name is required!', type: 'warning' });
    }

    if (!contactFormData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
      showToast({ message: 'Email is required!', type: 'warning' });
    } else if (!/\S+@\S+\.\S+/.test(contactFormData.email.trim())) {
      errors.email = 'Email is invalid';
      isValid = false;
      showToast({ message: 'Email is invalid!', type: 'error' });
    }

    if (!contactFormData.subject.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
      showToast({ message: 'Subject is required!', type: 'warning' });
    }

    if (!contactFormData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
      showToast({ message: 'Message is required!', type: 'warning' });
    }

    setErrors(errors);
    return isValid;
  };


  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.log(errors);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
        showToast({ message: `Sending Email Successfully! ${ result.text }`, type: "success" });
      }, (error) => {
        console.log(error.text);
        showToast({ message: `Error sending email: ${ error.text }`, type: "warning" });
      });

    setContactFormData({
      from_name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e) => {
    setContactFormData({
      ...contactFormData,
      [ e.target.name ]: e.target.value
    });
  };

  return (
    <section className={styles.contactContainer}>
      <ToastContainer />
      <div className={styles.contactWrapper}>
        <h2>Contact Us</h2>
        <div className={styles.contactCotent}>
          <form className={styles.form} onSubmit={sendEmail} ref={form}  >

            <div className={styles.formRow}>
              <div className={styles.formInput}>
                <label>Name:</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={contactFormData.from_name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formInput}>
                <label>Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.formInput}>
              <label>Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={contactFormData.subject}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formTextarea}>
              <label>Message:</label>
              <textarea
                id="message"
                name="message"
                value={contactFormData.message}
                onChange={handleChange}
                rows={10}
              />
            </div>
            <button className={styles.sendButton} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className={styles.contectMeContainer}>
          <ContactToMe
            image="images/testimonial/arshad-khan.jpeg"
            name="Arshad Khan"
            facebook="https://web.facebook.com/profile.php?id=100036825609558"
            whatsapp="https://wa.me/00923494861490"
            linkedin="https://www.linkedin.com/in/arshad-khan-2a6923213/"
            github="https://github.com/arshadkh507"
          />
          <ContactToMe
            image="images/testimonial/furqan-ali.png"
            name="Furqan Ali"
            facebook="https://web.facebook.com/profile.php?id=100036825609558"
            whatsapp="https://wa.me/00923494861490"
            linkedin="https://www.linkedin.com/in/arshad-khan-2a6923213/"
            github="https://github.com/arshadkh507"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;

