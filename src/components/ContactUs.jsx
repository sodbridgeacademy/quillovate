import { HiOutlineArrowRight } from "react-icons/hi";
import LogoWhite from "./subcomponents/LogoWhite";

function ContactUs() {
  return (
    <section className="py-16 px-8 relative bg-blue-600 flex items-center justify-between overflow-hidden">
      <span className="absolute top-1/2 -translate-y-1/2 -left-[96px] min-w-72 h-72 bg-[#B0D4F730] rounded-full"></span>
      <span className="absolute top-1/2 -translate-y-1/2 -left-[126px] min-w-72 h-72 bg-[#B0D4F740] rounded-full"></span>
      <span className="absolute top-1/2 -translate-y-1/2 -left-[156px] min-w-72 h-72 bg-[#B0D4F740] rounded-full"></span>
      <span className="absolute top-1/2 -translate-y-1/2 -left-[186px] min-w-72 h-72 bg-[#B0D4F740] rounded-full"></span>
      <div className="flex ml-52">
        <LogoWhite />
        <span className="text-white flex flex-col gap-1 pr-20  border-r-[1.5px] ">
          <h3 className="text-3xl font-bold">Quillovate</h3>
          <p className="text-sm">Your Writing Companion</p>
        </span>
      </div>
      <button className="px-10 py-2 text-sm font-medium rounded-md bg-white text-brand flex gap-2 items-center justify-center">
        Contact Us
        <HiOutlineArrowRight />
      </button>
    </section>
  );
}

export default ContactUs;
