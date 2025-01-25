import processbgimage from "../assets/image/processbgimage.jpg";
function Process() {
  const steps = [
    {
      title: "Discovery",
      description:
        "We start by understanding your goals, challenges, and opportunities.",
    },
    {
      title: "Tailored Strategy",
      description:
        "Together, we create a solution roadmap designed for impact.",
    },
    {
      title: "Implementation",
      description:
        "Our team of experts brings your vision to life, ensuring seamless integration.",
    },
    {
      title: "Continuous Support",
      description:
        "We stay by your side with proactive maintenance and updates to keep your systems running smoothly.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-16 bg-white bg-bottom bg-cover min-h-[60vh] max-h-fit flex items-center -z-20"
      style={{ backgroundImage: `url(${processbgimage})` }}
    >
      <div className="absolute top-0 w-full h-full bg-black/40 -z-10"></div>

      <div className="container mx-auto px-4">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-white"
        >
          Our Process: Making AI Work for You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div data-aos="fade-up" key={index} className="text-center">
              <div className="bg-violet-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-white">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
