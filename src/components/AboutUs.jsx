import { IoIosCheckmarkCircle } from "react-icons/io";

function AboutUs() {
  return (
    <section id="about" className="py-20  px-8 min-h-screen flex  justify-between gap-24 ">
      <picture className="w-[42%] relative">
        <img src="./AboutUs1.svg" alt="" className="w-full h-auto" />
        <p className="bg-green-600 text-white px-4 py-10 absolute w-52 rounded-lg -right-6 top-1/2 translate-y-[-50%]">
          We believe in the power of well-crafted communication to elevate your
          work and make a lasting impact.
        </p>
      </picture>
      <main className="w-[58%] flex flex-col gap-4">
        <h4 className="text-blue-600 font-bold">About Us</h4>
        <h2 className="font-bold text-3xl">Learn about who we are</h2>
        <p className="mb-4 text-stone-700">
          Quillovate is a collaborative effort of passionate researchers and
          seasoned writers committed to excellence in every word. Our team
          brings a wealth of experience in academia, content creation, and
          professional writing.
        </p>
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-6">
            <ul className="h-full flex gap-6 flex-col">
              <li className="flex gap-3.5">
                <IoIosCheckmarkCircle className="text-blue-600 text-3xl" />
                <span>
                  <p className="font-bold flex gap-4">Integrity</p>
                  <p>Our Core Values</p>
                </span>
              </li>
              <li className="flex gap-3.5">
                <IoIosCheckmarkCircle className="text-blue-600 text-3xl" />
                <span>
                  <p className="font-bold flex gap-4">Creativity</p>
                  <p>Our Core Values</p>
                </span>
              </li>
              <li className="flex gap-3.5">
                <IoIosCheckmarkCircle className="text-blue-600 text-3xl" />
                <span>
                  <p className="font-bold flex gap-4">Customer Satisfaction</p>
                  <p>Our Core Values</p>
                </span>
              </li>
            </ul>
            <button className="px-5 py-3 bg-blue-600 text-white rounded-lg">
              Learn More
            </button>
          </div>
          <img src="AboutUs2.svg" alt="" className="w-[41%]" />
        </div>
      </main>
    </section>
  );
}

export default AboutUs;
