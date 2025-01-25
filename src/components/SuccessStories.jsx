import {
  FaRobot,
  FaHeadset,
  FaClipboardList,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

function SuccessStories() {
  const stories = [
    {
      title: "Streamlining Operations with Conversational AI",
      description:
        "Deployed an AI-powered chatbot for an e-commerce startup, resulting in 60% faster response times and 25% increase in customer retention rates.",
      icon: <FaRobot className="w-8 h-8 " />,
    },
    {
      title: "Voice Bot for Improved Customer Engagement",
      description:
        "Implemented a voice bot for a financial services company, providing 24/7 customer support and increasing qualified leads by 15%.",
      icon: <FaHeadset className="w-8 h-8 " />,
    },
    {
      title: "AI-Driven Skills-Based Hiring",
      description:
        "Introduced an AI-driven skills graph for a recruitment agency, reducing time-to-hire by 50% and enhancing candidate-job compatibility.",
      icon: <FaClipboardList className="w-8 h-8 " />,
    },
    {
      title: "Data Analytics and Knowledge Graph Integration",
      description:
        "Developed an AI-powered analytics platform integrated with a knowledge graph, improving decision-making accuracy and increasing revenue.",
      icon: <FaChartLine className="w-8 h-8 " />,
    },
    {
      title: "Building Custom LLM-Powered Solutions",
      description:
        "Created a custom LLM-based tool for a healthcare organization, reducing report generation time by 70% and enhancing care outcomes.",
      icon: <FaLaptopCode className="w-8 h-8 " />,
    },
  ];

  return (
    <section id="success-stories" className="py-16 bg-">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
          Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white p-6 rounded-lg shadow-md group hover:scale-105 transition-all duration-300"
            >
              <div className="bg-violet-100 w-fit p-5 group-hover:bg-[#694bd5] rounded-2xl text-[#694bd5] group-hover:text-violet-100 mb-2">
                {story.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
