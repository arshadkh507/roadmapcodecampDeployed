import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const showToast = ({ message, position, autoClose, type }) => {
  const options = {
    position: position || toast.POSITION.TOP_CENTER,
    autoClose: autoClose || 2000,
  };

  switch (type) {
    case 'error':
      return toast.error(message, options);
    case 'warning':
      return toast.warning(message, options);
    case 'success':
      return toast.success(message, options);
    case 'info':
      return toast.info(message, options);
    default:
      return toast(message, options);
  }
};

export default showToast;



// use showToast({ message: 'User created successfully!', type: 'success' });