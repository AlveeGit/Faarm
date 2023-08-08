const Input = ({ info  }) => {
  return (
    <info.inputType
      type={info.type}
      placeholder={info.placeholder}
      required
      className="w-4/5 p-5 rounded-xl bg-gray-200 border-solid border-sky-600 input1 "
    />

    
  );
};
export default Input;
