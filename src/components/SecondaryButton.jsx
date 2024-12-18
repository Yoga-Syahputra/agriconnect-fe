const SecondaryButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-600 text-white px-4 py-2 rounded-sm  hover:bg-green-700 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
