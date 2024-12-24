import HeroSection from "./components/HeroSection";
import MemeGallery from "./components/MemeGalary";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import VideoSection from "./components/VideoSection";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="h-[140vh]" />
      <StatsSection />
      <MemeGallery />
      <VideoSection />
    </div>
  );
}
