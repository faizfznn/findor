import "../../../App.css";

const Button = (props) => {
  const { children, variant} = props;

  // Object untuk menentukan style berdasarkan variant
  const variants = {
    primaryFill: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium transition-colors whitespace-nowrap cursor-pointer",
    secondary: "bg-white border border-2 text-black hover:bg-gray-100",
  };

  return (
    <button
      className={`w-full max-w-xs box-sizing h-[50px] px-6 mb-2 font-medium rounded-[20px] ${variants[variant]}`}
      type="submit"
    >
      {children}
    </button>


  );
};

export default Button;
