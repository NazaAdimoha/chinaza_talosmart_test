import { CheckCircle, X } from "phosphor-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CloseButtonProps = {
  closeToast: React.MouseEventHandler;
};
type PostToastProps = {
  message: string;
  action: string;
};

export const CloseButton = ({ closeToast }: CloseButtonProps) => (
  <X onClick={closeToast} />
);

export const postToast = ({ message, action }: PostToastProps) => {
  if (action === "success") {
    return toast.success(message, {
      position: toast.POSITION.BOTTOM_LEFT,
      style: {
        background: "#2FC26C",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.005em",
        color: "#FFFFFF",
      },
      icon: <CheckCircle />,
      progressStyle: { border: "4px solid #8FDEB0", background: "#8FDEB0" },
    });
  } else if (action === "info") {
    return toast.success(message, {
      position: toast.POSITION.BOTTOM_LEFT,
      style: {
        background: "#2DB9FF",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.005em",
        color: "#FFFFFF",
      },
      icon: <CheckCircle />,
      progressStyle: { border: "4px solid #8ED9FF", background: "#8ED9FF" },
    });
  } else if (action === "warning") {
    return toast.success(message, {
      position: toast.POSITION.BOTTOM_LEFT,
      style: {
        background: "#F2C94C",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.005em",
        color: "#333333",
      },
      icon: <CheckCircle />,
      progressStyle: { border: "4px solid #F8E29F", background: "#F8E29F" },
    });
  } else if (action === "error") {
    return toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      style: {
        background: "#FF0000",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.005em",
        color: "#FFFFFF",
      },
      icon: <CheckCircle />,
      progressStyle: { border: "4px solid #FF7676", background: "#FF7676" },
    });
  } else if (action === "default") {
    return toast.success(message, {
      position: toast.POSITION.BOTTOM_LEFT,
      style: {
        background:
          "linear-gradient(111.71deg, rgba(51, 51, 51, 0.04) 0%, rgba(51, 51, 51, 0.02) 100%), #FFFFFF",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "24px",
        letterSpacing: "0.005em",
        color: "#731413",
      },
      icon: <CheckCircle />,
      progressStyle: { border: "4px solid #731413", background: "#731413" },
    });
  }
};

function Toast() {
  return <ToastContainer closeButton={CloseButton} />;
}

export default Toast;
