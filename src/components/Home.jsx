import React, { useState, useEffect, useRef } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaRocket,
  FaStar,
  FaUsers,
  FaPlay,
} from "react-icons/fa";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [animationPhase, setAnimationPhase] = useState(0);
  const heroRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Staggered animation phases
    const timer1 = setTimeout(() => setAnimationPhase(1), 500);
    const timer2 = setTimeout(() => setAnimationPhase(2), 1000);
    const timer3 = setTimeout(() => setAnimationPhase(3), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Enhanced feedback
    const button = e.target;
    const originalText = button.textContent;
    button.textContent = "✓ Subscribed!";
    button.className = button.className.replace(
      "from-pink-500 to-purple-600",
      "from-green-500 to-green-600"
    );

    setTimeout(() => {
      button.textContent = originalText;
      button.className = button.className.replace(
        "from-green-500 to-green-600",
        "from-pink-500 to-purple-600"
      );
      setEmail("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Enhanced Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse opacity-70"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse opacity-70"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-pulse opacity-50"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Profile Image with Enhanced Effects */}
          <div
            className={`mb-12 transition-all duration-1000 ${
              animationPhase >= 1
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="relative inline-block group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-pulse"></div>

              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                alt="Profile"
                className="relative w-56 h-56 mx-auto rounded-full object-cover border-4 border-white/20 shadow-2xl transform hover:scale-110 transition-all duration-500 backdrop-blur-sm"
              />

              {/* Status Indicator */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <FaRocket className="text-white text-2xl" />
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <FaStar className="text-white text-xl" />
              </div>
            </div>
          </div>

          {/* Hero Text */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              animationPhase >= 2
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
                Transform Your
              </span>
              <br />
              <span className="text-white">Digital Journey</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Join over{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text">
                1M+ creators
              </span>{" "}
              who are building their dreams with cutting-edge strategies,
              exclusive content, and a thriving community.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { icon: FaUsers, number: "1M+", label: "Community" },
                { icon: FaStar, number: "4.9", label: "Rating" },
                { icon: FaRocket, number: "500+", label: "Success Stories" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-110 transition-transform"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all backdrop-blur-sm border border-white/10">
                    <stat.icon className="text-2xl text-purple-400" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <button className="group relative px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket className="group-hover:rotate-12 transition-transform" />
                  Start Your Journey
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </button>

              <button className="group px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/60 backdrop-blur-sm flex items-center gap-2">
                <FaPlay className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-pink-400 to-purple-500 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Social Links */}
      <section
        className={`py-16 transition-all duration-1000 delay-500 ${
          animationPhase >= 3
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Connect With Us
          </h2>
          <div className="flex justify-center gap-8">
            {[
              {
                icon: FaInstagram,
                color: "from-pink-500 to-red-500",
                hover: "hover:from-pink-600 hover:to-red-600",
                label: "Instagram",
              },
              {
                icon: FaYoutube,
                color: "from-red-500 to-red-600",
                hover: "hover:from-red-600 hover:to-red-700",
                label: "YouTube",
              },
              {
                icon: FaTwitter,
                color: "from-blue-400 to-blue-500",
                hover: "hover:from-blue-500 hover:to-blue-600",
                label: "Twitter",
              },
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`group relative w-16 h-16 bg-gradient-to-br ${social.color} ${social.hover} rounded-2xl flex items-center justify-center transform hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-lg hover:shadow-2xl`}
              >
                <social.icon className="text-white text-2xl group-hover:scale-110 transition-transform" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Latest Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Latest Drops
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Fresh content, exclusive insights, and game-changing resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Course Launch",
                description:
                  "Master the future with our cutting-edge AI leadership program",
                image: "/assets/sample1.jpg",
                badge: "New",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Exclusive Podcast Series",
                description:
                  "Deep dive into startup culture with industry leaders",
                image: "/assets/sample2.jpg",
                badge: "Hot",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "Mumbai Meetup Highlights",
                description: "Epic moments from our latest community gathering",
                image: "/assets/sample3.jpg",
                badge: "Trending",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transform transition-all duration-500 hover:border-white/20"
              >
                {/* Badge */}
                <div
                  className={`absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r ${item.gradient} text-white text-xs font-bold rounded-full`}
                >
                  {item.badge}
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-bold text-xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                    Explore Now
                  </button>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section id="newsletter" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-white/20 rounded-3xl p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-12 scale-150"></div>
            </div>

            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <FaRocket className="text-white text-2xl transform -rotate-12" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ready to Level Up?
              </h2>
              <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Join our exclusive community and get insider access to
                cutting-edge content, early launches, and game-changing
                opportunities.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for exclusive access"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all w-full sm:w-auto"
                />
                <button
                  onClick={handleNewsletterSubmit}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
                >
                  Join the Movement
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 mt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>10K+ Active Members</span>
                </div>
                <div className="w-1 h-4 bg-gray-600"></div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span>4.9/5 Community Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
