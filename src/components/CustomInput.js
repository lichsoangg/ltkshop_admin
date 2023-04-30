import React from 'react';
const CustomInput = (props) => {
  const {type, label, i_id, i_class} = props;
  return (
    <div className="form-floating mb-3 w-100">
      <input
        type={type}
        className={`form-control ${i_class}`}
        id={i_id}
        label={label}
        placeholder={label}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;
