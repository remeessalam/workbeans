function CallToAction() {
  return (
    <section id="contact" className="py-16 bg-violet-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
          Ready to Revolutionize Your Business?
        </h2>
        <p className="text-xl mb-8" data-aos="fade-up">
          Your competitors are already using AI to stay ahead. Why wait?
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <a
            data-aos="fade-up"
            href="https://wa.me/8072292782"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-violet-600 hover:text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-violet-300 transition duration-300"
          >
            Connect on WhatsApp
          </a>
          {/* <a
            href="#"
            className="bg-transparent border-2 border-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Contact Us
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
