import LogoWithName from "./subcomponents/LogoWithName";

function Footer() {
  return (
    <footer className="flex flex-col justify-between gap-20 pt-16 text-sm text-stone-600">
      <main className="flex flex-col items-center justify-between gap-14 px-4 text-center lg:flex-row lg:items-start lg:px-8 lg:text-left">
        <div className="flex flex-col items-center space-y-5 lg:block lg:w-1/4">
          <LogoWithName />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
        </div>
        <ol className="grid w-full list-none grid-cols-2 flex-wrap justify-evenly gap-8 text-center lg:flex lg:flex-row lg:items-start lg:text-left">
          <li className="space-y-6">
            <h4 className="font-bold text-blue-600">Quick Links</h4>
            <ul className="space-y-4">
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Home</a>
              </li>
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">About</a>
              </li>
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Services</a>
              </li>
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Contact</a>
              </li>
            </ul>
          </li>
          <li className="space-y-6">
            <h4 className="font-bold text-blue-600">Company</h4>
            <ul className="space-y-4">
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">About</a>
              </li>

              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Contact us</a>
              </li>
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Careers</a>
              </li>
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Blog</a>
              </li>
            </ul>
          </li>
          <li className="space-y-6">
            <h4 className="font-bold text-blue-600">Connect</h4>
            <ul className="space-y-4">
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Facebook</a>
              </li>

              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Twitter</a>
              </li>
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">LinkedIn</a>
              </li>
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Instagram</a>
              </li>
            </ul>
          </li>
          <li className="space-y-6">
            <h4 className="font-bold text-blue-600">Users</h4>
            <ul className="space-y-4">
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Sign up</a>
              </li>
              <li className="hover:font-medium hover:text-stone-700 hover:underline">
                <a href="#">Login</a>
              </li>
            </ul>
          </li>
        </ol>
      </main>
      <div className="bg-[#EFF2FE] px-8 py-6 text-center text-stone-400 lg:text-stone-500">
        Copyright 2024 Quillovate | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
