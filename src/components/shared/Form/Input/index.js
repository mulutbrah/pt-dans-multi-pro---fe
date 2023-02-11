import { useState } from "react";
import PropTypes from "prop-types";

const FormInput = ({
  label,
  handleChange,
  placeholder = "",
  inputValue = "",
}) => {
  return (
    <div>
      <label htmlFor={label} className="block py-2">
        {label}
      </label>

      <input
        id={label}
        type="text"
        placeholder={placeholder}
        aria-label="query"
        onChange={(e) => handleChange(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  inputValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default FormInput;
