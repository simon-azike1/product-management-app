import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../Buttons/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Add Items", link: "/add-items" },
    { name: "View Items", link: "/items" },
  ];

  return (
    <>
      <header className="fixed  left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 flex justify-between items-center p-4 bg-white/90 backdrop-blur-md shadow-lg rounded-xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/img/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full shadow-sm" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-100 bg-clip-text text-transparent">
            Product.M
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ name, link }) => (
              <li key={name} className="relative">
                <Link
                  to={link}
                  className="text-gray-700 font-medium transition-all after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full"
                >
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/signup">
                <Button className="bg-gray-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition">
                  Sign Up
                </Button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden ml-auto text-3xl cursor-pointer hover:text-purple-600 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-xl z-40 p-6 flex flex-col gap-6"
          >
            {navLinks.map(({ name, link }) => (
              <Link
                key={name}
                to={link}
                className="text-gray-800 font-semibold text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <Button className="bg-purple-600 hover:bg-pink-500 text-white px-5 py-2 rounded-full">
                Sign Up
              </Button>
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
