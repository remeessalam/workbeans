import { Link } from "react-scroll";
import homebanner from "../assets/image/homebanner.jpg";
function Hero() {
  return (
    <div
      className="relative bg-black-800 text-white py-20 h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${homebanner})`,
      }}
    >
      {/* <div className="absolute inset-0">
        <img
          src={homebanner}
          alt="AI Technology"
          className="w-full h-full object-cover "
        />
      </div> */}
      <div className="absolute top-0 w-full h-full bg-black/50"></div>

      <div className="flex flex-col items-center justify-center h-full relative container mx-auto px-4 z-10">
        <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold mb-4">
          Transform Your Business with the Power of AI
        </h1>
        <p data-aos="fade-up" className="text-xl md:text-2xl mb-8">
          Imagine this: Your business operates with efficiency like never
          before. Regular tasks are automated, customer interactions feel
          personal, and your team can focus on what truly matters – innovation
          and growth. This isn&apos;t just a dream; it&apos;s the reality we
          help create at Workbeans.ai.
        </p>
        <Link
          data-aos="fade-up"
          to="contact"
          smooth={true}
          duration={500}
          offset={-10}
          className="bg-white cursor-pointer text-blue-800 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Hero;
