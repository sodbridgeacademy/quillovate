import { IoIosCheckmarkCircle } from "react-icons/io";

function Hero() {
  return (
    <section className="bg-s lg:m-o mb-10 flex flex-col items-center gap-0 bg-[url('./hero-pattern.svg')] bg-[length:500px_auto] bg-no-repeat lg:h-[90vh] lg:flex-row lg:gap-10">
      <main className="flex w-full flex-col items-center justify-center gap-3 px-4 py-20 text-center lg:items-start lg:pl-14 lg:text-left">
        <p className="text-stone-60d text-sm font-semibold">
          For writers, researchers, and content creators
        </p>

        <h1 className="mb-4 text-5xl font-bold">
          Welcome to Quillovate Your Reliable Writing Companion
        </h1>
        <p className="m-auto mb-4 w-[80%] text-stone-700">
          Are you a talented writer, creative content creator, or dedicated
          researcher? Join our vibrant community and get exciting opportunities
          to showcase your expertise.
        </p>
        <div className="flex w-fit gap-8 border-4 border-sky-50 bg-white p-4 text-xs shadow-2xl shadow-blue-100">
          <span>
            <p className="text-slate-600">Register using email address</p>
            <p className="text-sm font-bold text-slate-600">
              youremail@mail.com
            </p>
          </span>
          <button className="rounded-md bg-blue-600 px-5 py-3 text-white">
            Join for Free
          </button>
        </div>
        <span className="flex justify-center gap-8 text-sm text-slate-600 lg:justify-start">
          <p className="flex items-center">
            <IoIosCheckmarkCircle className="text-lg text-blue-600" />
            Free Registration
          </p>
          <p className="flex items-center">
            <IoIosCheckmarkCircle className="text-lg text-blue-600" />
            Great Service
          </p>
        </span>
      </main>
      <picture className="flex h-full w-[60%] justify-end">
        <img src="heroimage.svg" alt="" className="h-full w-auto" />
      </picture>
    </section>
  );
}

export default Hero;
