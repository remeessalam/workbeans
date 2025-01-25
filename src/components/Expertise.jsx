function Expertise() {
  const expertiseAreas = [
    {
      title: "End-to-End Solutions",
      description:
        "We partner with you from start to finish, guiding you with our experience and knowledge to ensure your success.",
    },
    {
      title: "Proven Results",
      description:
        "We've helped businesses boost operational efficiency by over 40%, automate redundant tasks, and enhance customer satisfaction.",
    },
    {
      title: "Large Language Models (LLMs)",
      description:
        "Our expertise with LLMs allows us to design LLM-based products, integrate LLMs into existing applications, and create custom solutions.",
    },
    {
      title: "Intelligent Agents",
      description:
        "Our AI-based agents learn, adapt, and improve over time, helping businesses save time, reduce costs, and enhance performance.",
    },
  ];

  return (
    <section id="expertise" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
          data-aos="fade-up"
        >
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:scale-105 !transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
              <p>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
