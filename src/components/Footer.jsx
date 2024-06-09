import LogoWithName from "./subcomponents/LogoWithName";

function Footer() {
  return (
    <footer className="pt-16 flex flex-col justify-between text-sm text-stone-600 gap-20">
      <main className="px-8 flex justify-between">
        <div className="w-1/4 space-y-5">
          <LogoWithName />
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
            mauris sed ma
          </p>
        </div>
        <div className="space-y-6">
          <h4 className="text-blue-600 font-bold">Quick Links</h4>
          <ul className="space-y-4">
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">About</a>
            </li>
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Services</a>
            </li>
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-blue-600 font-bold">Company</h4>
          <ul className="space-y-4">
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">About</a>
            </li>

            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Contact us</a>
            </li>
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-blue-600 font-bold">Connect</h4>
          <ul className="space-y-4">
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Facebook</a>
            </li>

            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Twitter</a>
            </li>
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">LinkedIn</a>
            </li>
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-blue-600 font-bold">Users</h4>
          <ul className="space-y-4">
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Sign up</a>
            </li>
            <li className="hover:text-stone-700 hover:underline hover:font-medium">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </main>
      <div className="py-6 px-8 bg-[#EFF2FE] text-center text-stone-500">
        Copyright 2024 Quillovate | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
