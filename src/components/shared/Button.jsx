const Button = ({ name }) => {
  return (
    <button
      className=" rounded-full font-semibold px-4 py-2 border-primary border-[3px] text-primary 
          hover:text-black hover:bg-white hover:border-white"
    >
      {name}
    </button>
  );
};

export default Button;
