const Footer = () => {
  return (
    <footer className="luckiest-guy-regular py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section: Branding */}
        <div className="mb-6 md:mb-0 px-4">
          <h1 className="text-2xl font-bold">unomas.meme</h1>
        </div>

        {/* Right Section: Disclaimer */}
        <div className="text-center md:text-right text-sm text-gray-400">
          <p>© 2024 unomas.meme</p>
          <p className="mt-2">
            Disclaimer: $UNOMAS is a meme coin made for entertainment purposes.
            We make no promises about future value, so be responsible. Crypto
            may be unregulated in your jurisdiction. Profits may be subject to
            taxes. Always do your own research before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
