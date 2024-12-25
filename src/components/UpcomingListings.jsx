const UpcomingListings = () => {
  return (
    <div className="bg-black text-white py-20 px-6 luckiest-guy-regular">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
        Upcoming Listings
      </h2>

      {/* Listings */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-center  text-lg">
          A cool exchange will be listed here.
        </p>
        <p className="text-center text-lg px-8 border-y py-8 md:border-y-0 md:border-x md:border-t-0">
          An even cooler exchange will be listed here.
        </p>
        <p className="text-center text-lg">
          The coolest of cool exchanges will be listed here.
        </p>
      </div>

      {/* Subtext */}
      <div className="mt-16 text-center">
        <p className="text-2xl md:text-3xl italic">
          When we lose money in crypto, why do we always end up sayin, fk it,
          <span className="font-bold">$UNOMAS please?</span>
        </p>
      </div>
    </div>
  );
};

export default UpcomingListings;
