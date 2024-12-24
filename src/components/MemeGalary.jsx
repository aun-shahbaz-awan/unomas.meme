import MemeOne from "../assets/GIF1.gif";
import MemeTwo from "../assets/GIF2.gif";
import MemeThree from "../assets/GIF3.gif";

const MemeGallery = () => {
  return (
    <div className="flex flex-col items-center p-6 luckiest-guy-regular my-12">
      <h1 className="text-5xl font-semibold text-center mb-8">
        This is all of us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Meme 1 */}
        <div className="flex flex-col items-center">
          <img
            src={MemeOne}
            alt="Meme 1"
            className="w-60 h-auto rounded shadow-md"
          />
          <p className="text-center mt-4 text-sm text-gray-600">
            You, when you have just been rugged and scammed
          </p>
        </div>

        {/* Meme 2 */}
        <div className="flex flex-col items-center">
          <img
            src={MemeTwo}
            alt="Meme 2"
            className="w-60 h-auto rounded shadow-md"
          />
          <p className="text-center mt-4 text-sm text-gray-600">
            You, when you know the next one is "the" winner
          </p>
        </div>

        {/* Meme 3 */}
        <div className="flex flex-col items-center">
          <img
            src={MemeThree}
            alt="Meme 3"
            className="w-60 h-auto rounded shadow-md"
          />
          <p className="text-center mt-4 text-sm text-gray-600">
            You, when you have bought so much $UNOMAS
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemeGallery;
