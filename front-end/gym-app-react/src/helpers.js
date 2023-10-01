import { toast } from "react-toastify";

export const notifyUserError = (message) => {
  toast.error(`${message}`, {
    position: toast.POSITION.TOP_CENTER,
  });
};

export const notifyUserSuccess = (message) => {
  toast.success(`${message}`, {
    position: toast.POSITION.TOP_CENTER,
  });
};
