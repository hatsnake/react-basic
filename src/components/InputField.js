import React from 'react';

const InputField = ({
  type,
  value,
  placeholder,
  onChange,
  errorMessage
}) => {
  return (
    //div태그 대신 사용해 div태그가 노출되지 않음 : <>도 됨
    <React.Fragment>
      <input type={type} value={value} placeholder={placeholder}
      onChange={onChange}/>
      <br/>
      <div className="error-text">{errorMessage}</div>
    </React.Fragment>
  );
};

export default InputField;