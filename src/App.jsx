import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Discover from "./components/Discover";
import Explore from "./components/Explore";
import FeaturedIn from "./components/FeaturedIn";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="font-[sora] text-stone-900 overflow-hidden">
      <Nav />
      <Hero />
      <FeaturedIn />
      <AboutUs />
      <Discover />
      <Explore />
      <JoinUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
