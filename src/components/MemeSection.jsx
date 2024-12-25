import MemeOne from "../assets/UnomasVid.mp4";

const MemeSection = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col luckiest-guy-regular gap-10 md:flex-row items-center justify-between pt-16 pb-24 px-6 md:px-10">
      {/* Meme Video */}
      <div className="w-full md:w-5/12 flex justify-center">
        <video
          src={MemeOne}
          autoPlay
          loop
          muted
          controls
          aria-label="Funny meme video"
          className="rounded-lg shadow-lg w-full md:w-9/12 min-w-[280px]"
        ></video>
      </div>

      {/* Text Content */}
      <div className="w-full md:w-7/12 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          How our wives view us
        </h2>
        <p className="text-lg text-gray-800">
          Let’s be honest, this is us. Nothing can hide the truth!
        </p>
      </div>
    </div>
  );
};

export default MemeSection;
