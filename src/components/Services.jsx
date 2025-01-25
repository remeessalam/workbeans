import { FaRegHandshake, FaBrain, FaTools } from "react-icons/fa";

function Services() {
  const services = [
    {
      title: "Consulting & Strategy Design",
      description:
        "Understand your business, identify opportunities, and design a roadmap.",
      icon: <FaRegHandshake className="w-8 h-8 " />,
    },
    {
      title: "AI & NLP Development",
      description: "Tailored solutions to solve real-world problems.",
      icon: <FaBrain className="w-8 h-8 " />,
    },
    {
      title: "Post-Production Support & Maintenance",
      description:
        "We don't just deliver solutions; we ensure they continue to deliver value.",
      icon: <FaTools className="w-8 h-8 " />,
    },
  ];

  return (
    <section id="services" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 group p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
            >
              <div className="bg-violet-100 w-fit p-5 rounded-full mb-2 group-hover:scale-105 transition-all duration-300 group-hover:bg-[#694bd5] text-[#694bd5] group-hover:text-violet-100 ">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
