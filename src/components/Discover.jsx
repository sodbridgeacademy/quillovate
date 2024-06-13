import { HiOutlineArrowRight } from "react-icons/hi";
import JoinIcon from "./icons/JoinIcon";
import ConnectIcon from "./icons/ConnectIcon";
import ProjectIcon from "./icons/ProjectIcon";
import PaymentIcon from "./icons/PaymentIcon";
import PortfolioIcon from "./icons/PortfolioIcon";

function Discover() {
  return (
    <section className="flex min-h-screen flex-col items-center gap-8 bg-[url('./discover-pattern.svg')] bg-cover bg-[center_top] bg-no-repeat px-4 py-16 lg:px-8">
      <p className="rounded-full border-[1.3px] border-blue-500 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-600">
        Quillovate
      </p>
      <h2 className="text-3xl font-bold">Discover how it works</h2>
      <p className="text-center text-sm text-stone-700 lg:w-1/3">
        Why kept very ever home mrs. Considered sympathize ten uncommonly
        occasional assistance sufficient.
      </p>
      <ul className="flex w-full flex-wrap items-center justify-center gap-6 text-xs">
        <li className="flex h-full w-72 flex-col gap-4 rounded-lg bg-white p-6 text-blue-600 lg:items-start lg:text-left items-center text-center">
          <JoinIcon />
          <h3 className="text-lg font-bold">Join for free</h3>
          <p className="text-stone-700">
            Writers, researchers, and content creators can sign up and create a
            profile showcasing their skills and experience.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 font-medium text-blue-600"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
        <li className="flex h-full w-72 flex-col gap-4 rounded-lg bg-white p-6 text-blue-600 lg:items-start lg:text-left items-center text-center">
          <ProjectIcon />

          <h3 className="text-lg font-bold">Post your project:</h3>
          <p className="text-stone-700">
            Clients can easily post their writing projects, specifying
            requirements, deadlines, and any other pertinent details.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 font-medium text-blue-600"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
        <li className="flex h-full w-72 flex-col gap-4 rounded-lg bg-white p-6 text-blue-600 lg:items-start lg:text-left items-center text-center">
          <ConnectIcon />
          <h3 className="text-lg font-bold">Connect and Collaborate</h3>
          <p className="text-stone-700">
            We facilitate seamless communication. Discuss project details, ask
            questions, and collaborate ensuring the best outcome.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 font-medium text-blue-600"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
        <li className="flex h-full w-72 flex-col gap-4 rounded-lg bg-white p-6 text-blue-600 lg:items-start lg:text-left items-center text-center">
          <PaymentIcon />
          <h3 className="text-lg font-bold">Pay for quality</h3>
          <p className="text-stone-700">
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 font-medium text-blue-600"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
        <li className="flex h-full w-72 flex-col gap-4 rounded-lg bg-white p-6 text-blue-600 lg:items-start lg:text-left items-center text-center">
          <PortfolioIcon />

          <h3 className="text-lg font-bold">Build a writing portfolio</h3>
          <p className="text-stone-700">
            Letter of on become he tended active enable to. Vicinity relation
            sensible sociable surprise screened no up as.
          </p>
          <a
            href="#"
            className="flex items-center gap-2 font-medium text-blue-600"
          >
            Read more
            <HiOutlineArrowRight />
          </a>
        </li>
      </ul>
      <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
        Discover more
      </button>
    </section>
  );
}

export default Discover;
