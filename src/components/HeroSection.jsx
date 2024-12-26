import { useState } from "react";
import BG from "../assets/BgMeme.png";

const HeroSection = () => {
  const [isCopy, setIsCopy] = useState(false);
  return (
    <section
      className="bg-white text-black relative h-[130vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${BG})`, // Replace BG with the actual image URL or import
      }}
    >
      <div className="w-full absolute z-20 luckiest-guy-regular">
        <div className="max-w-6xl mx-auto px-4 py-10 text-center mt-24">
          {/* Tagline */}
          <p className="text-sm md:text-base text-yellow-500 font-medium">
            🍌 The best and friendliest meme coin
          </p>

          {/* Title */}
          <h1 className="mt-4 text-3xl md:text-5xl font-bold">
            WELCOME TO Unomas Please
            <br />
            TOKEN PRESALE
          </h1>

          {/* Button */}
          <div className="mt-6 flex justify-center items-center flex-col md:flex-row">
            <div className="bg-black text-white px-6 pt-3 pb-2 text-wrap text-xs sm:text-sm md:text-lg rounded-lg font-medium mr-4">
              95WzV2CsTRFBjPCBhQRR4TGVp5kXo8f8qZVt7iVwpump
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  "95WzV2CsTRFBjPCBhQRR4TGVp5kXo8f8qZVt7iVwpump"
                );
                setIsCopy(true);
              }}
              className="bg-black text-white px-6 pt-3 pb-2 text-xs sm:text-sm md:text-lg rounded-lg font-medium hover:bg-gray-800 transition mt-4 md:mt-0"
            >
              {isCopy ? "✔ " : " "} Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
