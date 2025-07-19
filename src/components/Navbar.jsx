import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const location = useLocation();

  // Define route links here with icons
  const links = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Products", path: "/products", icon: "🛍️" },
    { name: "About", path: "/about", icon: "👤" },
    { name: "Login", path: "/auth", icon: "🔐" },
  ];

  // Handle scroll effect for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setMenuOpen(!menuOpen);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-2xl border-b border-purple-100"
            : "bg-white/95 backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Enhanced Logo / Brand with gradient and hover effects */}
            <Link
              to="/"
              className="group flex items-center space-x-3 transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <div className="bg-black w-20 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-300/50 transition-all duration-300">
                  <img
                    className="bg-black font-bold text-6xl"
                    src="https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428453_IMG_6463-p-2000.png"
                  ></img>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
              </div>
              <span className="font-black text-2xl bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                Dhruv Rathee Academy
              </span>
            </Link>

            {/* Desktop Menu with Enhanced Styling */}
            <div className="hidden lg:flex items-center space-x-2">
              {links.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative group flex items-center space-x-2 font-semibold text-base px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="text-lg">{link.icon}</span>
                      <span>{link.name}</span>
                      {!isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-300"></div>
                      )}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg animate-pulse"></div>
                      )}
                    </>
                  )}
                </NavLink>
              ))}

              {/* CTA Button with shimmer effect */}
              <div className="ml-4 pl-4 border-l border-gray-200">
                <button className="group relative px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-300/50">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>✨</span>
                    <span>Get Started</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>

            {/* Enhanced Mobile Menu Button with smooth hamburger animation */}
            <button
              className={`lg:hidden relative p-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-200 transition-all duration-300 ${
                menuOpen
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-purple-100"
              }`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              disabled={isAnimating}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    menuOpen
                      ? "rotate-45 translate-y-0 top-3"
                      : "rotate-0 top-1"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out top-3 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    menuOpen
                      ? "-rotate-45 translate-y-0 top-3"
                      : "rotate-0 top-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu with staggered animations */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-purple-100">
            <div className="px-4 py-6 space-y-3">
              {links.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `group flex items-center space-x-3 w-full text-left font-semibold text-lg py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                    }`
                  }
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: menuOpen
                      ? "slideInUp 0.5s ease-out forwards"
                      : "none",
                  }}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span>{link.name}</span>
                  <div className="flex-1"></div>
                  <svg
                    className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavLink>
              ))}

              {/* Mobile CTA Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-purple-300/50 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                  style={{
                    animationDelay: `${links.length * 100}ms`,
                    animation: menuOpen
                      ? "slideInUp 0.5s ease-out forwards"
                      : "none",
                  }}
                >
                  <span className="flex items-center justify-center space-x-2 relative z-10">
                    <span>✨</span>
                    <span>Get Started</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay with blur effect */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Add these styles to your index.css for the animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        /* Pulse animation for active nav items */
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        /* Gradient text animation */
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
