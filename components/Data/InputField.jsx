const InputField = ({ label, name, value, onChange, type, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      required
      className="w-4/5 p-5 rounded-xl bg-gray-200 border-solid border-sky-600 input1"
    />
  );
};
export default InputField;

