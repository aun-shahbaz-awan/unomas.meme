import BG from "../assets/BgMeme.png";

const HeroSection = () => {
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
          <div className="mt-6">
            <button className="bg-black text-white px-6 py-3 text-lg rounded-lg font-medium hover:bg-gray-800 transition">
              Unomas Please
            </button>
          </div>

          {/* Progress Details */}
          <p className="mt-4 text-lg font-medium">
            USDT 6,345,114.12 / 10,000,000.00 involved
          </p>

          {/* Progress Bar */}
          <div className="mt-4 w-full max-w-md mx-auto bg-gray-300 rounded-full overflow-hidden">
            <div
              className="bg-black h-4 rounded-full"
              style={{ width: "63.45%" }} // Adjust width dynamically
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
