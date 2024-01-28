import React from 'react';

function Input({
  disabled = false,
  placeholder,
  width = 'full',
  id,
  value,
  onChange,
  type,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      id={id}
      placeholder={placeholder}
      className={`w-${width} border p-3 outline-none placeholder:text-gray-200 focus:ring-1 focus:ring-gray-400 md:p-4`}
    />
  );
}

export default Input;
