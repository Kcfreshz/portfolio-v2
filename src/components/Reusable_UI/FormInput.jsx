function FormInput({ label, type, value, placeholder, onChange }) {
  return (
    <label htmlFor={label}>
      {/* <p className="text-white text-base font-medium leading-normal pb-2">
        {label}
      </p> */}

      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="form-input flex min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293038] focus:border-none h-10 md:h-14 placeholder:text-[#9daab8] p-4 text-base font-normal leading-normal w-[250px] sm:w-[400px] md:w-[500px]"
      />
    </label>
  );
}

export default FormInput;
