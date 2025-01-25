import logo from "../assets/image/logo/logo.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-5">
              <img
                src={logo}
                alt=""
                className="h-[2rem] md:h-[2.75rem] ml-5 scale-125"
              />
            </div>
            <p>The Partner You Can Trust in AI Innovation</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            <Link
              to="mission"
              smooth={true}
              duration={500}
              offset={-70}
              className="mx-2 my-1 hover:text-blue-300 cursor-pointer"
            >
              Mission
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-70}
              className="mx-2 my-1 hover:text-blue-300 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="expertise"
              smooth={true}
              duration={500}
              offset={-70}
              className="mx-2 my-1 hover:text-blue-300 cursor-pointer"
            >
              Expertise
            </Link>
            <Link
              to="process"
              smooth={true}
              duration={500}
              offset={-70}
              className="mx-2 my-1 hover:text-blue-300 cursor-pointer"
            >
              Process
            </Link>
            <Link
              to="success-stories"
              smooth={true}
              duration={500}
              offset={-70}
              className="mx-2 my-1 hover:text-blue-300 cursor-pointer"
            >
              Success Stories
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Workbeans.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
