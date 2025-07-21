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
                src="https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e42842f_Frame%20237807.png"
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
                10M+ creators
              </span>{" "}
              who are empowering themselves with fact-based knowledge, critical
              thinking, and real-world education through Dhruv Rathee Academy.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { icon: FaUsers, number: "10M+", label: "Community" },
                { icon: FaStar, number: "4.9", label: "Rating" },
                { icon: FaRocket, number: "5000+", label: "Success Stories" },
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
              <a
                href="/products"
                className="group relative px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket className="group-hover:rotate-12 transition-transform" />
                  Start Your Journey
                </span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </a>

              <a
                href="https://www.youtube.com/watch?v=PvTcmse6DDY"
                className="group px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/60 backdrop-blur-sm flex items-center gap-2"
              >
                <FaPlay className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </a>
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
                link: "https://www.instagram.com/dhruvrathee",
              },
              {
                icon: FaYoutube,
                color: "from-red-500 to-red-600",
                hover: "hover:from-red-600 hover:to-red-700",
                label: "YouTube",
                link: "https://www.youtube.com/@dhruvrathee",
              },
              {
                icon: FaTwitter,
                color: "from-blue-400 to-blue-500",
                hover: "hover:from-blue-500 hover:to-blue-600",
                label: "Twitter",
                link: "https://x.com/dhruv_rathee",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
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
                title: "Master ChatGPT: Transform Your Life With AI Chatbots",
                description:
                  "Artificial Intelligence is transforming the world, and ChatGPT is at the forefront. This course teaches you how to use ChatGPT to boost productivity at work, school, and home. Explore the basics of machine learning, prompt engineering, and practical AI applications. Unlock the full potential of AI in your daily life.",
                image:
                  "https://th.bing.com/th/id/OIP._bav1kSaVxm8HoGAY7NxvwHaEK?w=313&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                badge: "New",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                title: "Master Time Management",
                description:
                  "Boost your productivity and happiness with this updated course designed to transform your daily routine. Learn how to plan effectively, track your time, set meaningful goals, and build life-changing habits. Now available in Hindi with English subtitles. Take the first step toward a more organized, focused, and fulfilling life today.",
                image:
                  "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/66f1297be6a8a547698c3fb0_Image%20(12).png",
                badge: "Hot",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "The YouTube Blueprint",
                description:
                  "Ever dreamt of becoming a YouTuber? This all-in-one course is your complete step-by-step guide. Learn how to script, shoot, and edit compelling videos, grow a loyal audience, and earn money doing what you love. Whether you're aiming for a full-time career or a side hustle, start your journey and turn your passion into reality today!",
                image:
                  "data:image/webp;base64,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",
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
