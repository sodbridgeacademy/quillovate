import { IoIosCheckmarkCircle } from "react-icons/io";

function Hero() {
  return (
    <section className="bg-[url('./hero-pattern.svg')] bg-s bg-no-repeat  bg-[length:500px_auto] flex h-[90vh] gap-10">
      <main className="pl-14 py-20 flex flex-col  justify-center gap-3 w-full">
        <p className="font-semibold text-sm text-stone-600">
          For writers, researchers, and content creators
        </p>

        <h1 className="mb-4 text-5xl font-bold">
          Welcome to Quillovate Your Reliable Writing Companion
        </h1>
        <p className="mb-4 text-stone-700 w-[80%]">
          Are you a talented writer, creative content creator, or dedicated
          researcher? Join our vibrant community and get exciting opportunities
          to showcase your expertise.
        </p>
        <div className="bg-white p-4 shadow-2xl  border-sky-50 border-4  shadow-blue-100 w-fit flex gap-8 text-xs">
          <span>
            <p className="text-slate-600 ">Register using email address</p>
            <p className="font-bold text-sm text-slate-600">
              youremail@mail.com
            </p>
          </span>
          <button className="px-5 py-3 bg-blue-600 text-white rounded-md">
            Join for Free
          </button>
        </div>
        <span className="flex gap-8 text-slate-600 text-sm">
          <p className="flex items-center">
            <IoIosCheckmarkCircle className="text-blue-600 text-lg" />
            Free Registration
          </p>
          <p className="flex items-center">
            <IoIosCheckmarkCircle className="text-blue-600 text-lg" />
            Great Service
          </p>
        </span>
      </main>
      <picture className="w-[60%] h-full flex justify-end">
        <img src="heroimage.svg" alt="" className="w-auto h-full" />
      </picture>
    </section>
  );
}

export default Hero;
