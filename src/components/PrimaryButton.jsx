const PrimaryButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-green-800 text-white px-8 py-3 rounded-lg hover:bg-green-900 transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
