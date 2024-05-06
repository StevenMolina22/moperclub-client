interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary";
}
const ButtonBasic = ({
  text,
  variant = "primary",
  ...restProps
}: ButtonProps) => {
  const styles = {
    primary: "bg-red-500 hover:bg-red-600 text-white",
    secondary: "bg-gray-50 hover:bg-gray-100 text-gray-900",
  };
  return (
    <button
      className={`rounded-xl px-6 py-2 text-sm font-bold transition duration-200 lg:inline-block ${styles[variant]}`}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default ButtonBasic;
