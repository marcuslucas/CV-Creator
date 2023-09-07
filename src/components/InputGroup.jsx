import React from "react";

const InputGroup = ({
  placeholder,
  type,
  id,
  onChange,
  value,
  "data-key": dataKey,
}) => {
  return (
    <div>
      {type === "textarea" ? (
        <div className="input-group">
          <textarea
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            data-key={dataKey}
            className="input-group-input"
          ></textarea>
        </div>
      ) : (
        <div className="input-group">
          <input
            className="input-group-input"
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            data-key={dataKey}
          />
        </div>
      )}
    </div>
  );
};

export default InputGroup;
