import React, { useState } from "react";
import {
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Rocket,
  Heart,
  ArrowUp,
  Link,
} from "lucide-react";
import { FaArrowUp, FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(true);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/dhruvrathee",
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@dhruvrathee",
      label: "YouTube",
      color: "hover:text-red-400",
    },
    {
      icon: Twitter,
      href: "https://x.com/dhruv_rathee",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/dhruvrathee/",
      label: "LinkedIn",
      color: "hover:text-blue-300",
    },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "mailto:support@dhruvrathee.com" },
    // { name: "Blog", path: "/blog" },
    { name: "Wikipedia", path: "https://en.wikipedia.org/wiki/Dhruv_Rathee"},
  ];

  const resources = [
    // { name: "Documentation", path: "/docs" },
    // { name: "API Reference", path: "/api" },
    // { name: "Community", path: "/community" },
    { name: "Support", path: "mailto:support@dhruvrathee.com" },
    { name: "Privacy Policy", path: "https://tagmango.com/privacy" },
    { name: "Terms of Service", path: "https://tagmango.com/terms" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-4 h-4 group-hover:animate-bounce" />
        </button>
      )}

      <div className="relative z-10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-75"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-white ml-3">
                  Dhruv Rathee Academy
                </span>
              </div>

              <p className="text-purple-100 mb-6 leading-relaxed">
                Empowering the next generation of informed thinkers and
                changemakers. Join the Dhruv Rathee Academy community — where
                curious minds, dreamers, and achievers come together to learn,
                grow, and build a better future through knowledge and awareness.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-purple-200">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-purple-300" />
                  <span>support@dhruvrathee.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-purple-300" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-purple-300" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-white relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.path}
                      className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-white relative">
                Resources
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <NavLink
                      to={resource.path}
                      target="_blank"
                      className="text-purple-200 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2 rounded-full"></span>
                      {resource.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-white relative">
                Stay Connected
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
              </h4>

              <p className="text-purple-200 mb-4 text-sm">
                Get the latest updates, exclusive content, and special offers
                delivered to your inbox.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <button
                  type="submit"
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">
                    {isSubscribed ? "✨ Subscribed!" : "Subscribe Now"}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="border-t border-purple-700/50 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h5 className="text-lg font-semibold text-white mb-3">
                  Follow Our Journey
                </h5>
                <div className="flex space-x-4">
                  {socialLinks.map(
                    ({ icon: Icon, href, label, color }, index) => (
                      <a
                        key={index}
                        href={href}
                        aria-label={label}
                        className={`group relative p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full ${color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                      >
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Stats/Achievements */}
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">10M+</div>
                  <div className="text-purple-300 text-sm">
                    Community Members
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">5000+</div>
                  <div className="text-purple-300 text-sm">Success Stories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-purple-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-700/50 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-purple-300">
              <div className="flex items-center mb-4 md:mb-0">
                <span>
                  &copy; {currentYear} Dhruv Rathee Academy. Made with{" "}
                </span>
                <FaHeart className="w-4 h-4 text-red-400 mx-1 animate-pulse" />
                <span>for Hackathon. All rights reserved.</span>
              </div>

              <div className="flex items-center space-x-6">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  System Status: Operational
                </span>
                <NavLink
                  to="https://tagmango.com/privacy"
                  className="hover:text-white transition-colors duration-300"
                  target="_blank"
                >
                  Privacy
                </NavLink>
                <NavLink
                  to="https://tagmango.com/terms"
                  className="hover:text-white transition-colors duration-300"
                  target="_blank"
                >
                  Terms
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
