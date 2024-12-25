import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MemeGallery from "./components/MemeGalary";
import MemeSection from "./components/MemeSection";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import UpcomingListings from "./components/UpcomingListings";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MemeGallery />
      <MemeSection />
      <UpcomingListings />
      <Footer />
    </div>
  );
}
