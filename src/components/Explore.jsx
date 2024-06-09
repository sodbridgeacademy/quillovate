import AssignmentIcon from "./icons/AssignmentIcon";
import ContentCreationIcon from "./icons/ContentCreationIcon";
import ProofreadingIcon from "./icons/ProofreadingIcon";

/* eslint-disable react/no-unescaped-entities */
function Explore() {
  return (
    <section className="py-16 px-8 relative flex flex-col items-center gap-6 bg-brand-grey overflow-hidden">
      <img
        src="./explore-pattern.svg"
        alt=""
        className="absolute -left-64 -top-44 rotate-[50deg]"
      />
      <img
        src="./explore-pattern.svg"
        alt=""
        className="absolute -right-56 -top-44 rotate-[-50deg]"
      />
      <p className="px-3 py-2 w-fit border-[1.3px] border-blue-500 font-bold text-sm text-blue-600 bg-blue-50 rounded-full">
        Quillovate
      </p>
      <h2 className="text-3xl font-bold text-white">Expole our services</h2>
      <p className="mb-2 text-sm text-stone-300 w-1/2 text-center">
        Why kept very ever home mrs. Considered sympathize ten uncommonly
        occasional assistance sufficient.
      </p>

      <div className="flex gap-4">
        <div className="bg-white bg-opacity-[0.1] p-6 text-white flex gap-4 flex-col rounded-lg border border-zinc-500">
          <AssignmentIcon />
          <h3 className="text-lg font-bold">Assignment Assistance</h3>
          <p className="text-stone-300 text-sm">
            we've got your back on projects and assignments, ensuring top-notch
            quality and timely delivery.
          </p>
        </div>
        <div className="bg-white bg-opacity-[0.1] p-6 text-white flex gap-4 flex-col rounded-lg border border-zinc-500">
          <ContentCreationIcon />
          <h3 className="text-lg font-bold">Content Creation</h3>
          <p className="text-stone-300 text-sm">
            From engaging blog posts to informative articles, our writers bring
            your ideas to life.
          </p>
        </div>
        <div className="bg-white bg-opacity-[0.1] p-6 text-white flex gap-4 flex-col rounded-lg border border-zinc-500">
          <ProofreadingIcon />
          <h3 className="text-lg font-bold">Proofreading Services</h3>
          <p className="text-stone-300 text-sm">
            Let us polish your work to perfection, catching every detail to
            enhance clarity and coherence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Explore;
