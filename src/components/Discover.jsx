import { HiOutlineArrowRight } from "react-icons/hi";
import JoinIcon from "./icons/JoinIcon";
import ConnectIcon from "./icons/ConnectIcon";
import ProjectIcon from "./icons/ProjectIcon";
import PaymentIcon from "./icons/PaymentIcon";
import PortfolioIcon from "./icons/PortfolioIcon";

function Discover() {
  return (
    <section className="px-8 min-h-screen py-16 bg-[url('./discover-pattern.svg')] bg-[center_top] bg-no-repeat bg-cover flex flex-col items-center gap-8 ">
      <p className="px-3 py-2 border-[1.3px] border-blue-500 font-bold text-sm text-blue-600 bg-blue-50 rounded-full">
        Quillovate
      </p>
      <h2 className="font-bold text-3xl">Discover how it works</h2>
      <p className="text-stone-700 text-sm w-1/3 text-center">
        Why kept very ever home mrs. Considered sympathize ten uncommonly
        occasional assistance sufficient.
      </p>
      <ul className="flex  flex-wrap gap-6 text-xs w-full items-center justify-center">
        <li className="text-blue-600 w-72 rounded-lg flex flex-col gap-4 h-full bg-white p-6">
          <JoinIcon />
          <h3 className="font-bold text-lg">Join for free</h3>
          <p className="text-stone-700">
            Writers, researchers, and content creators can sign up and create a
            profile showcasing their skills and experience.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center gap-2"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
        <li className="text-blue-600 w-72 rounded-lg flex flex-col gap-4 h-full bg-white p-6">
          <ProjectIcon />

          <h3 className="font-bold text-lg">Post your project:</h3>
          <p className="text-stone-700">
            Clients can easily post their writing projects, specifying
            requirements, deadlines, and any other pertinent details.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center gap-2"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
        <li className="text-blue-600 w-72 rounded-lg flex flex-col gap-4 h-full bg-white p-6">
          <ConnectIcon />
          <h3 className="font-bold text-lg">Connect and Collaborate</h3>
          <p className="text-stone-700">
            We facilitate seamless communication. Discuss project details, ask
            questions, and collaborate ensuring the best outcome.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center gap-2"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
        <li className="text-blue-600 w-72 rounded-lg flex flex-col gap-4 h-full bg-white p-6">
          <PaymentIcon />
          <h3 className="font-bold text-lg">Pay for quality</h3>
          <p className="text-stone-700">
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center gap-2"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
        <li className="text-blue-600 w-72 rounded-lg flex flex-col gap-4 h-full bg-white p-6">
          <PortfolioIcon />

          <h3 className="font-bold text-lg">Build a writing portfolio</h3>
          <p className="text-stone-700">
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium flex items-center gap-2"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
      </ul>
      <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg">Discover more</button>
    </section>
  );
}

export default Discover;
