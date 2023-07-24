import React from 'react';

const CustomSelect = ({ name, id, className, options, onChange }) => {
  return (
    <select
      id={id}
      name={name}
      onChange={onChange}
      className={`${className} bg-secondary-100 text-white text-xs focus:outline-none`}
    >
      {options.map((item, idx) => (
        <option key={idx} value={item.id}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
