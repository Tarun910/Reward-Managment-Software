const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
          <button onClick={onClose} className="float-right text-gray-600">✖</button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  