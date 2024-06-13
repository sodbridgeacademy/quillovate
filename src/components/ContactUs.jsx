import { HiOutlineArrowRight } from "react-icons/hi";
import LogoWhite from "./subcomponents/LogoWhite";

function ContactUs() {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-between gap-5 overflow-hidden bg-blue-600 px-4 py-8 lg:flex-row lg:gap-0 lg:px-8 lg:py-16"
    >
      <span className="absolute -left-[240px] top-1/2 h-72 min-w-72 -translate-y-1/2 rounded-full bg-[#B0D4F730] md:-left-[180px] lg:-left-[96px]"></span>
      <span className="absolute -left-[250px] top-1/2 h-72 min-w-72 -translate-y-1/2 rounded-full bg-[#B0D4F740] md:-left-[200px] lg:-left-[126px]"></span>
      <span className="absolute -left-[260px] top-1/2 h-72 min-w-72 -translate-y-1/2 rounded-full bg-[#B0D4F740] md:-left-[220px] lg:-left-[156px]"></span>
      <span className="absolute -left-[270px] top-1/2 h-72 min-w-72 -translate-y-1/2 rounded-full bg-[#B0D4F740] md:-left-[240px] lg:-left-[186px]"></span>
      <div className="flex lg:ml-52">
        <LogoWhite />
        <span className="flex flex-col gap-1 text-white lg:border-r-[1.5px] lg:pr-20">
          <h3 className="text-3xl font-bold">Quillovate</h3>
          <p className="text-sm">Your Writing Companion</p>
        </span>
      </div>
      <button className="flex items-center justify-center gap-2 rounded-md bg-white px-10 py-2 text-sm font-medium text-brand">
        Contact Us
        <HiOutlineArrowRight />
      </button>
    </section>
  );
}

export default ContactUs;
