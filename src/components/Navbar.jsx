import { useState } from "react";
import Logo from "../assets/LogoCropped.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="pt-3 px-3  luckiest-guy-regular">
      <nav className="bg-black text-white px-4 py-3 flex justify-between items-center rounded-lg">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg">Unomas Please</span>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Links Section */}
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-black md:bg-transparent top-16 left-0 w-full md:w-auto flex-col md:flex-row items-center space-y-4 md:space-y-0 p-4 md:p-0 rounded-lg z-50 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="https://t.me/+QAWuI9dspCU0OTZh"
              className="hover:underline"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://x.com/unomas_meme?s=21"
              className="hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a href="#tokenomics" className="hover:underline">
              Dexscreener (Soon)
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:underline">
              Dextools (Soon)
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
