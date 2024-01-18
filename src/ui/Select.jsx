function Select({ value, onChange, options }) {
  console.log(options);
  return (
    <select
      className="border p-2 outline-none"
      value={value}
      onChange={onChange}
    >
      {options?.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
