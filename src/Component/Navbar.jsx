import { use, useContext, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { Link } from "react-router";
import { ThemeContext } from "../AppContext/Theme/ThemeContext";
import { AuthContext } from "../AppContext/Auth/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, toggleTheme } = use(ThemeContext)
  const { user, signout } = useContext(AuthContext)


  const handleLogOut = () => {
    signout()
  }





  const conditionalAuthButton = user ? (
    <button className="cursor-pointer" onClick={handleLogOut}>
      Log out
    </button>) :
    (<>
      <Link to='/login' className="cursor-pointer">
        Sign In
      </Link>

      <Link to='/register' className="cursor-pointer">
        Sign Up
      </Link>
    </>)


  const startLearningButton = <Link to='/posts'>
    <motion.button
      whileHover="hover"
      className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-2xl font-medium hover:bg-gray-800 transition w-full justify-center"
    >
      Start Learning
      <motion.span
        variants={{
          hover: { x: 6 },
          initial: { x: 0 },
        }}
        initial="initial"
        transition={{ type: "spring", stiffness: 300 }}
      >
        <ArrowRight size={18} />
      </motion.span>
    </motion.button>
  </Link>

  return (
    <nav className="sticky top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            LearnHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {conditionalAuthButton}

            {/* Start Learning Button */}
            {startLearningButton}
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ rotate: 180, scale: 0.8 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
            >
              <motion.div
                key={theme ? "moon" : "sun"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                {theme ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg"
        >
          <div className="space-x-6">
            {conditionalAuthButton}
          </div>

          {/* Start Learning Button */}

          {startLearningButton}
          {/* Theme Toggle Button */}
          <motion.button
            whileTap={{ rotate: 180, scale: 0.8 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition w-full flex justify-center"
          >
            <motion.div
              key={theme ? "moon" : "sun"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              {theme ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
}