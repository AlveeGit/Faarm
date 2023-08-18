const InputField = ({ placeholder, type, required, value, onChange, name }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      required={required}
      value={value}
      onChange={onChange}
      name={name}
      className="w-4/5 p-5 rounded-xl bg-gray-200 border-solid border-sky-600 input1"
    />
  );
};
export default InputField;
