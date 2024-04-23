type InputFieldProps = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
};

export const InputField = ({
  type = "text",
  name,
  id,
  placeholder,
  value = "",
  onChange,
  required = false,
}:InputFieldProps) => {
  return (
    <input
      type={type}
      name={name} // identifier to work with the data sent to the server
      id={id} // identifier (for/input) also works for js
      placeholder={placeholder} // text inside the input
      value={value} // current value 
      onChange={onChange} // function to be called when the inner value of the input changes
      className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      required={required}
    />
  );
};
