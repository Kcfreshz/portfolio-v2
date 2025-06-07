import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
function Footer() {
  return (
    <footer className="flex flex-col gap-6 px-5 py-10  pt-20 text-center @container">
      <ul className="flex justify-center items-center text-center gap-5 text-white">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <a
            href="https://www.linkedin.com/in/kcfreshz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
          <a
            href="https://x.com/Kcfresh__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX />
          </a>
        </li>

        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <a
            href="https://github.com/Kcfreshz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </li>
      </ul>
      <p className="text-[#9daab8] text-base font-normal leading-normal pb-10">
        &copy; {new Date().getFullYear()} Kelechukwu Awoke. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
