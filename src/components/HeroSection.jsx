import {
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

export default function HeroSection() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const dynamicWords = [
    "Creator",
    "Innovator",
    "Leader",
    "Visionary",
    "Entrepreneur",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCTAClick = (type) => {
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    if (type === "contact") {
      // Smooth scroll to contact section or show contact modal
      console.log("Contact Me clicked");
    } else {
      // Navigate to portfolio
      console.log("Portfolio clicked");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(139, 69, 198, 0.3) 0%, 
            rgba(59, 130, 246, 0.2) 50%, 
            rgba(16, 185, 129, 0.1) 100%),
          linear-gradient(135deg, 
            #1e1b4b 0%, 
            #312e81 25%, 
            #1e40af 50%, 
            #7c3aed 75%, 
            #be185d 100%)
        `,
      }}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse`}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `linear-gradient(45deg, 
                hsl(${Math.random() * 360}, 70%, 60%), 
                hsl(${Math.random() * 360}, 70%, 80%))`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-white/20 rounded-full animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-purple-300/30 rotate-45 animate-pulse" />

        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 73) % 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Enhanced Profile Section */}
        <div
          className={`mb-16 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
        >
          <div className="relative inline-block group">
            {/* Multiple Glow Layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 rounded-full blur-2xl opacity-75 animate-pulse group-hover:opacity-100 transition-opacity duration-500" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-500 rounded-full blur-md opacity-50 animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            {/* Main Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                className="relative w-56 h-56 mx-auto rounded-full object-cover border-4 border-white shadow-2xl hover:scale-110 transition-all duration-700 cursor-pointer group-hover:border-yellow-300"
                onMouseEnter={() => {
                  // Add rotation effect on hover
                  if (sectionRef.current) {
                    sectionRef.current.style.transform = "rotateY(5deg)";
                  }
                }}
                onMouseLeave={() => {
                  if (sectionRef.current) {
                    sectionRef.current.style.transform = "rotateY(0deg)";
                  }
                }}
              />

              {/* Status Indicators */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-bounce cursor-pointer hover:scale-125 transition-transform">
                <span className="text-white text-3xl animate-pulse">✨</span>
              </div>

              {/* Achievement Badges */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce hover:scale-125 transition-transform cursor-pointer">
                <span className="text-white text-xl font-bold">1M+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Hero Text */}
        <div
          className={`space-y-8 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          {/* Dynamic Greeting */}
          <div className="animate-fade-in">
            <p className="text-2xl md:text-3xl text-purple-200 mb-2 font-light tracking-wide">
              Hey there! I'm
            </p>
          </div>

          {/* Main Name with Enhanced Effects */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 animate-fade-in leading-tight">
            <span
              className="bg-gradient-to-r from-pink-400 via-purple-500 via-blue-500 to-cyan-400 bg-300% bg-clip-text text-transparent animate-gradient-shift"
              style={{
                backgroundSize: "300% 300%",
                animation: "gradient 4s ease infinite",
              }}
            >
              Ananya Mehra
            </span>
          </h1>

          {/* Dynamic Role with Typing Effect */}
          <div className="text-3xl md:text-4xl text-white mb-8 font-semibold h-16 flex items-center justify-center animate-fade-in animation-delay-300">
            <span className="text-purple-300">I'm a </span>
            <span
              className={`ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 ${
                isTyping ? "animate-pulse" : "opacity-50"
              } transition-all duration-500`}
            >
              {dynamicWords[currentWord]}
            </span>
            <span className="animate-pulse ml-1 text-purple-400">|</span>
          </div>

          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600 backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10">
            <span className="text-2xl">🚀</span> Empowering 1M+ creators through
            cutting-edge tech education
            <span className="text-2xl ml-2">✨</span>
            <br />
            <span className="text-purple-200 font-semibold">
              Building the future, one line of code at a time
            </span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in animation-delay-900">
            <button
              onClick={() => handleCTAClick("contact")}
              className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                🤝 Let's Connect
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>

            <button
              onClick={() => handleCTAClick("portfolio")}
              className="group px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-purple-900 hover:scale-110 hover:shadow-2xl backdrop-blur-sm bg-white/10"
            >
              <span className="flex items-center gap-2">🎨 View My Work</span>
            </button>
          </div>

          {/* Enhanced Social Media Section */}
          <div className="flex justify-center items-center space-x-8 mt-16 animate-fade-in animation-delay-1200">
            <div className="text-white/60 font-semibold text-lg">
              Follow the Journey
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent flex-1 max-w-32" />
            <div className="flex space-x-4">
              {[
                {
                  icon: FaInstagram,
                  color: "hover:text-pink-400",
                  bg: "hover:bg-pink-500/20",
                  label: "Instagram",
                },
                {
                  icon: FaYoutube,
                  color: "hover:text-red-400",
                  bg: "hover:bg-red-500/20",
                  label: "YouTube",
                },
                {
                  icon: FaTwitter,
                  color: "hover:text-blue-400",
                  bg: "hover:bg-blue-500/20",
                  label: "Twitter",
                },
                {
                  icon: FaLinkedin,
                  color: "hover:text-blue-500",
                  bg: "hover:bg-blue-600/20",
                  label: "LinkedIn",
                },
                {
                  icon: FaGithub,
                  color: "hover:text-gray-300",
                  bg: "hover:bg-gray-500/20",
                  label: "GitHub",
                },
              ].map(({ icon: Icon, color, bg, label }, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={label}
                  className={`text-gray-400 ${color} ${bg} transition-all duration-300 transform hover:scale-125 hover:-translate-y-2 p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:shadow-lg`}
                  style={{ animationDelay: `${1200 + index * 100}ms` }}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in animation-delay-1500">
            {[
              { number: "1M+", label: "Followers" },
              { number: "50K+", label: "Students Trained" },
              { number: "100+", label: "Success Stories" },
            ].map(({ number, label }, index) => (
              <div
                key={index}
                className="text-center backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {number}
                </div>
                <div className="text-purple-200 text-sm uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-white/60 text-sm font-medium">
            Scroll to explore
          </div>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-2 h-4 bg-white/80 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
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

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-gradient-shift {
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </section>
  );
}
