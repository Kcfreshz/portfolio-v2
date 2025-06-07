function SubmitButton({ isSending }) {
  // This component renders a submit button that shows a loading state when sending.
  return (
    <div>
      <button
        type="submit"
        disabled={isSending}
        className="flex self-starts min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1978e5] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors duration-300 hover:bg-[#3b94f5]"
      >
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}

export default SubmitButton;
