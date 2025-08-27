import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update theme ke <html>
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-white/70 shadow-md dark:bg-gray-900/70 lg:bg-transparent lg:shadow-none"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#home" className="font-bold text-lg text-primary block">
          Ahmad Arif
        </a>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/80 shadow-md"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-dark dark:text-white transition duration-300" />
          ) : (
            <Menu className="w-6 h-6 text-dark dark:text-white transition duration-300" />
          )}
        </button>

        {/* Nav Menu */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute lg:static top-full right-4 mt-3 lg:mt-0 bg-white lh: lg:bg-transparent dark:bg-gray-900 shadow-lg lg:shadow-none rounded-lg lg:rounded-none w-48 lg:w-auto py-5 lg:py-0 ${
            isOpen ? "block" : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center">
            {[{ name: "Beranda", href: "#home" },
              { name: "Tentang Saya", href: "#about" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Clients", href: "#clients" },
              { name: "Blog", href: "#blog" },
              { name: "Contact", href: "#contact" },
            ].map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.href}
                  className="text-base text-dark dark:text-white py-2 px-6 flex group-hover:text-primary transition"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Dark Mode Toggle */}
            <div className="ml-4">
              <button
                onClick={() =>
                  setTheme(theme === "dark" ? "light" : "dark")
                }
                className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </button>
            </div>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;