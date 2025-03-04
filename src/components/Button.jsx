const Button = ({ text, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  