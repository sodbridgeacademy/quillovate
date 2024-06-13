import { IoIosArrowDown } from "react-icons/io";
import LogoWithName from "./subcomponents/LogoWithName";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [menu, setMenu] = useState(false);

  function handleToggleMenu() {
    setMenu((cur) => !cur);
  }

  return (
    <nav className="relative flex items-center justify-between px-8 py-4 shadow-sm">
      <LogoWithName />

      <ul
        className={`${menu ? "h-[calc(50svh-100%)]" : "h-0"} text-md absolute right-0 top-full flex w-full origin-top flex-col items-center justify-center gap-6 overflow-hidden rounded-b-xl bg-[#87c1faad] backdrop-blur-sm transition-all lg:relative lg:flex lg:h-fit lg:w-fit lg:flex-row lg:bg-transparent lg:text-xs`}
      >
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
      <div className="flex space-x-3">
        <span className="flex">
          <button>
            <LuUser2 />
          </button>
          <button>
            <IoIosArrowDown />
          </button>
        </span>
        <button className="text-2xl lg:hidden" onClick={handleToggleMenu}>
          {menu ? <IoClose /> : <HiOutlineMenuAlt1 />}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
