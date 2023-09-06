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
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <div className="input-group">
          <input
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
