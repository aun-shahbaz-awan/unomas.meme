import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-black text-white py-20 luckiest-guy-regular">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 items-center gap-12">
        {/* First Stat */}
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-extrabold mb-4">100%</h2>
          <p className="text-center text-lg">
            100% of $UNOMAS holders have been rugged in the past.
          </p>
        </div>

        {/* Second Stat */}
        <div className="flex flex-col items-center pt-8 md:pt-0 px-8 border-t md:border-x md:border-t-0  border-white">
          <h2 className="text-5xl font-extrabold mb-4">100%</h2>
          <p className="text-center text-lg">
            100% of $UNOMAS holders are true believers in the coin.
          </p>
        </div>

        {/* Third Stat */}
        <div className="flex flex-col items-center border-t border-gray-500 pt-8 md:border-none md:pt-0">
          <h2 className="text-5xl font-extrabold mb-4">100%</h2>
          <p className="text-center text-lg">
            100% of us have a degen problem and somehow keep coming back to
            crypto... $UNOMAS please?
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
