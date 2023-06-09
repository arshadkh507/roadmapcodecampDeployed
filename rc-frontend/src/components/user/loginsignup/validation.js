// validation.js

const nameRegex = /^[a-zA-Z\s]+$/; // regular expression for alphabetic characters only
const minNameLength = 2; // minimum name length
const maxNameLength = 50; // maximum name length

const isValidName = (name) => {
  if (!name || name.length < minNameLength || name.length > maxNameLength) {
    return false;
  }
  return nameRegex.test(name); 
};

const isEmailValid = (email) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

const isPasswordStrong = (password) => {
  return password.length >= 6;
};

export { isEmailValid, isPasswordStrong, isValidName };
