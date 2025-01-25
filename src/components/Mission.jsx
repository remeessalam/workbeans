import ourmission from "../assets/image/ourmission.jpg";
function Mission() {
  return (
    <section id="mission" className="py-16 bg-black text-white wrapper">
      <div className="grid md:grid-cols-2">
        <div className="object-cover h-full w-full ">
          <img
            data-aos="fade-right"
            src={ourmission}
            alt=""
            className="max-h-[60vh] w-fit object-cover sm:object-cover h-full rounded-3xl"
          />
        </div>
        <div className="container mx-auto px-4 md:pt-0 pt-5">
          <h2
            data-aos="fade-left"
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
          >
            Our Mission
          </h2>
          <p
            data-aos="fade-left"
            className="text-lg md:text-xl text-center max-w-3xl mx-auto"
          >
            At Workbeans.ai, we believe technology should empower businesses to
            think bigger and achieve more. Our mission is simple yet
            transformative: to bring the power of Artificial Intelligence,
            Natural Language Processing (NLP), and AI Automation, Large Language
            Models (LLM) to businesses of all sizes, helping them compete and
            succeed in a competitive world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
