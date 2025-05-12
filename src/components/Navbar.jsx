import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle"; // ✅ Add this import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.h1
          className="text-3xl font-extrabold text-blue-700 dark:text-white"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-flat-badge-image_1128026.jpg"
            alt="SoftSell Logo"
            className="h-10 inline-block mr-2"
          />
          <a href="#hero">SoftSell</a>
        </motion.h1>

        <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-100 font-medium items-center">
          {["How It Works", "Why Us", "Testimonials", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "")}`}
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              className="transition"
            >
              {item}
            </motion.a>
          ))}
          <ThemeToggle /> {/* ✅ Add Dark Mode Toggle */}
        </nav>

        <div className="md:hidden flex items-center">
          <ThemeToggle /> {/* ✅ Add Dark Mode Toggle for mobile too */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-700 dark:text-white ml-2"
            aria-expanded={menuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 relative"
            id="mobile-menu"
          >
            <div
              className="absolute inset-0 bg-gray-800 opacity-50"
              onClick={() => setMenuOpen(false)}
            ></div>
            {["How It Works", "Why Us", "Testimonials", "Contact"].map(
              (item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "")}`}
                  className="block py-2 border-b hover:text-blue-600 dark:hover:text-blue-400"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  {item}
                </motion.a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
