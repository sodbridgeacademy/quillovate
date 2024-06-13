import { IoIosCheckmarkCircle } from "react-icons/io";

function AboutUs() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between gap-24 px-4 py-20 text-center lg:flex-row lg:px-8 lg:text-left">
      <picture className="relative lg:w-[42%]">
        <img src="./AboutUs1.svg" alt="" className="h-auto w-full" />
        <p className="absolute -right-6 top-1/2 w-52 translate-y-[-50%] rounded-lg bg-green-600 px-4 py-10 text-white">
          We believe in the power of well-crafted communication to elevate your
          work and make a lasting impact.
        </p>
      </picture>
      <main id="about" className="flex flex-col gap-4 lg:w-[58%]">
        <h4 className="font-bold text-blue-600">About Us</h4>
        <h2 className="text-3xl font-bold">Learn about who we are</h2>
        <p className="mb-4 text-stone-700">
          Quillovate is a collaborative effort of passionate researchers and
          seasoned writers committed to excellence in every word. Our team
          brings a wealth of experience in academia, content creation, and
          professional writing.
        </p>
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-4">
          <div className="flex flex-col gap-6">
            <ul className="flex h-full flex-col gap-6">
              <li className="flex gap-3.5">
                <IoIosCheckmarkCircle className="text-3xl text-blue-600" />
                <span>
                  <p className="flex gap-4 font-bold">Integrity</p>
                  <p>Our Core Values</p>
                </span>
              </li>
              <li className="flex gap-3.5">
                <IoIosCheckmarkCircle className="text-3xl text-blue-600" />
                <span>
                  <p className="flex gap-4 font-bold">Creativity</p>
                  <p>Our Core Values</p>
                </span>
              </li>
              <li className="flex gap-3.5">
                <IoIosCheckmarkCircle className="text-3xl text-blue-600" />
                <span>
                  <p className="flex gap-4 font-bold">Customer Satisfaction</p>
                  <p>Our Core Values</p>
                </span>
              </li>
            </ul>
            <button className="rounded-lg bg-blue-600 px-5 py-3 text-white">
              Learn More
            </button>
          </div>
          <img src="AboutUs2.svg" alt="" className="lg:w-[41%]" />
        </div>
      </main>
    </section>
  );
}

export default AboutUs;
