import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Process from "./components/Process";
import SuccessStories from "./components/SuccessStories";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ContactSection from "./components/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    once: true,
    duration: 1000,
  });
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Mission />
      <Services />
      <Expertise />
      <Process />
      <SuccessStories />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
