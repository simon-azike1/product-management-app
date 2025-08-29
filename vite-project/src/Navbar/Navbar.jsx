import { useState } from 'react'
import Button from '../Buttons/Button'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const NavLinks = [
    { name: "Home", link: "/" },
    { name: "Add Items", link: "/add-items" },
    { name: "View Items", link: "/items" }
  ]

  return (
    <>
      <header className="flex justify-center w-full p-4 shadow-md rounded-b-lg bg-gray-100">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 mx-3 md:items-center ">
          <img src="/assets/img/logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          <span className="text-xl font-bold text-gray-800">Product.M</span>
        </Link>

        {/* Desktop nav */}
        <nav className="flex flex-1 justify-center min-w-1/2 ">
          <ul className="hidden md:flex items-center m-4 gap-6">
            {NavLinks.map((item) => (
              <li key={item.name}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={item.link}
                    className="text-gray-700 hover:text-blue-600 px-4 py-2 transition duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              </li>
            ))}
            <li>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden ml-auto text-2xl cursor-pointer hover:bg-blue-400 p-2 rounded-full transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-gray-200 shadow rounded-b-lg transition duration-500"
        >
          <ul className="flex flex-col items-center gap-4 p-4">
            {NavLinks.map((item) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={item.name}
              >
                <Link
                  to={item.link}
                  className="text-gray-700 hover:text-blue-400 px-4 py-2 transition font-medium block"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            <li>
              <Link to="/signup" onClick={() => setMenuOpen(false)}>
                <Button>Sign up</Button>
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </>
  )
}

export default Navbar
