import AssignmentIcon from "./icons/AssignmentIcon";
import ContentCreationIcon from "./icons/ContentCreationIcon";
import ProofreadingIcon from "./icons/ProofreadingIcon";

/* eslint-disable react/no-unescaped-entities */
function Explore() {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center gap-6 overflow-hidden bg-brand-grey px-4 py-16 lg:px-8"
    >
      <img
        src="./explore-pattern.svg"
        alt=""
        className="absolute -left-72 -top-56 rotate-[50deg] lg:-left-64 lg:-top-44"
      />
      <img
        src="./explore-pattern.svg"
        alt=""
        className="absolute -right-72 -top-56 rotate-[-50deg] lg:-right-64 lg:-top-44"
      />
      <p className="w-fit rounded-full border-[1.3px] border-blue-500 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-600">
        Quillovate
      </p>
      <h2 className="text-3xl font-bold text-white">Explore our services</h2>
      <p className="mb-2 text-center text-sm text-stone-300 lg:w-1/2">
        Why kept very ever home mrs. Considered sympathize ten uncommonly
        occasional assistance sufficient.
      </p>

      <ol className="flex w-[70%] list-none flex-col gap-4 lg:flex-row">
        <li className="flex flex-col items-center gap-4 rounded-lg border border-zinc-500 bg-white bg-opacity-[0.1] p-6 text-center text-white lg:items-start lg:text-left">
          <AssignmentIcon />
          <h3 className="text-lg font-bold">Assignment Assistance</h3>
          <p className="text-sm text-stone-300">
            we've got your back on projects and assignments, ensuring top-notch
            quality and timely delivery.
          </p>
        </li>
        <li className="flex flex-col items-center gap-4 rounded-lg border border-zinc-500 bg-white bg-opacity-[0.1] p-6 text-center text-white lg:items-start lg:text-left">
          <ContentCreationIcon />
          <h3 className="text-lg font-bold">Content Creation</h3>
          <p className="text-sm text-stone-300">
            From engaging blog posts to informative articles, our writers bring
            your ideas to life.
          </p>
        </li>
        <li className="flex flex-col items-center gap-4 rounded-lg border border-zinc-500 bg-white bg-opacity-[0.1] p-6 text-center text-white lg:items-start lg:text-left">
          <ProofreadingIcon />
          <h3 className="text-lg font-bold">Proofreading Services</h3>
          <p className="text-sm text-stone-300">
            Let us polish your work to perfection, catching every detail to
            enhance clarity and coherence.
          </p>
        </li>
      </ol>
    </section>
  );
}

export default Explore;
