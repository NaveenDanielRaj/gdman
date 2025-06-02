// components/Toast.js
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showToast = (message, type = 'default') => {
  const config = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    theme: "colored",
    draggable: true,
  };

  switch (type) {
    case 'success':
      toast.success(message, config);
      break;
    case 'error':
      toast.error(message, config);
      break;
    default:
      toast(message, config);
  }
};

const Toast = () => <ToastContainer />;

export { showToast, Toast };
