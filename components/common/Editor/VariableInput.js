import React from "react";

const VariableInput = ({
  onClose,
  variable,
  handleTextInput,
  setselectedVariable,
}) => {
  const handleChange = (e) => {
    handleTextInput(variable.id, e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setselectedVariable(null);
      onClose();
    }
  };

  return (
    <div>
      <label className="text-white my-1 p-1">{variable.name}</label>
      <input
        type={"text"}
        className="w-full border-2 my-1 border-gray-300 rounded-md p-1"
        placeholder={`Enter ${variable.name}`}
        value={variable.data}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default VariableInput;
