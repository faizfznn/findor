const Button = (props) => {
  const { children, variant = 'primary', className = '', ...rest } = props;

  // Style berdasarkan variant
  const variants = {
    primary: "bg-findor-blue hover:bg-blue-700 text-white font-semibold transition-colors whitespace-nowrap",
    outline: "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold transition-colors whitespace-nowrap",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 font-semibold transition-colors whitespace-nowrap"
  };

  return (
    <button
      className={`px-6 py-2 rounded-lg ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;