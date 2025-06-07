function FormTextArea({ label, value, onChange }) {
  return (
    <label htmlFor={label}>
      {/* <p className="text-white text-base font-medium leading-normal pb-2">
        {label}
      </p> */}
      <textarea
        cols="28"
        rows="3"
        id={label}
        name={label}
        placeholder="Your message"
        value={value}
        onChange={onChange}
        className="form-input flex min-w-0s flex-1s resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#293038] focus:border-none placeholder:text-[#9daab8] p-4 text-base font-normal leading-normal w-[250pxs] sm:w-[400px] md:w-[500px]"
      ></textarea>
    </label>
  );
}

export default FormTextArea;
