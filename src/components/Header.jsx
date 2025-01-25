import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/image/logo/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/40 backdrop-blur-md text-white fixed w-screen z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img
            src={logo}
            alt=""
            className="h-[2rem] md:h-[2.75rem] ml-5 scale-125"
          />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link
            to="mission"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-blue-200 cursor-pointer"
          >
            Mission
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-blue-200 cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="expertise"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-blue-200 cursor-pointer"
          >
            Expertise
          </Link>
          <Link
            to="process"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-blue-200 cursor-pointer"
          >
            Process
          </Link>
          <Link
            to="success-stories"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-blue-200 cursor-pointer"
          >
            Success Stories
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <Link
            to="mission"
            smooth={true}
            duration={500}
            offset={-70}
            className="block py-2 px-4 text-sm hover:bg-blue-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Mission
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            className="block py-2 px-4 text-sm hover:bg-blue-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Services
          </Link>
          <Link
            to="expertise"
            smooth={true}
            duration={500}
            offset={-70}
            className="block py-2 px-4 text-sm hover:bg-blue-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Expertise
          </Link>
          <Link
            to="process"
            smooth={true}
            duration={500}
            offset={-70}
            className="block py-2 px-4 text-sm hover:bg-blue-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Process
          </Link>
          <Link
            to="success-stories"
            smooth={true}
            duration={500}
            offset={-70}
            className="block py-2 px-4 text-sm hover:bg-blue-700 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Success Stories
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
