const ToastNotification = ({ message, type }) => {
    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  
    return (
      <div className={`fixed top-5 right-5 p-4 text-white ${bgColor} rounded-lg`}>
        {message}
      </div>
    );
  };
  
  export default ToastNotification;
  