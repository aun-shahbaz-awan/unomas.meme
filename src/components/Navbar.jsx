import Logo from "../assets/LogoCropped.jpeg";

const Navbar = () => {
  return (
    <div className="pt-3 px-3">
      <nav className="bg-black text-white luckiest-guy-regular px-4 py-3 flex justify-between items-center rounded-lg">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src={Logo} // Replace with actual logo URL
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-bold text-lg">Unomas Please</span>
        </div>

        {/* Links Section */}
        <ul className="flex space-x-6">
          <li>
            <a href="#whitepaper" className="hover:underline">
              WHITE PAPER
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#tokenomics" className="hover:underline">
              TOKENOMICS
            </a>
          </li>
          <li>
            <a href="#roadmap" className="hover:underline">
              ROADMAP
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
          </li>
        </ul>

        {/* Button Section */}
        <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
          ↔️ CO SWAP
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
