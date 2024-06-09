import { IoIosArrowDown } from "react-icons/io";
import LogoWithName from "./subcomponents/LogoWithName";
import { LuUser2 } from "react-icons/lu";

function Nav() {
  return (
    <nav className="px-8 py-4 flex justify-between items-center shadow-sm">
      <LogoWithName />
      <ul className="flex gap-6 text-xs">
        <li>
          <a
            href="#home"
            className="font-bold visited:font-bold active:font-bold"
          >
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="visited:font-bold active:font-bold">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="visited:font-bold active:font-bold">
            Services
          </a>
        </li>
        <li>
          <a href="#contact" className="visited:font-bold active:font-bold">
            Contact
          </a>
        </li>
      </ul>
      <button className="flex">
        <LuUser2 />
        <IoIosArrowDown />
      </button>
    </nav>
  );
}

export default Nav;
