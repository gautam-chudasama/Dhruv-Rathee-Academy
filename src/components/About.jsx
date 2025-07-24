import React, { useState, useEffect, useRef } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaTrophy,
  FaRocket,
  FaHeart,
  FaUsers,
  FaGraduationCap,
  FaInstagram,
  FaLightbulb,
  FaPlay,
  FaArrowDown,
  FaCheckCircle,
  FaAward,
  FaGlobe,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const founder = {
  name: "Dhruv Rathee",
  role: "Content Creator & Educator",
  bio: `I love making videos. My expertise is in creating informative and educational content which provides objective, concise and simplified explanations of complex issues on a variety of subjects.`,
  photo:
    "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428438_Dhruv%201(1).png",
  stats: [
    { number: "1M+", label: "Students Trained", icon: FaGraduationCap },
    { number: "95%", label: "Success Rate", icon: FaTrophy },
    { number: "25M+", label: "Subscribers", icon: FaUsers },
    { number: "10M+", label: "Insta Followers", icon: FaInstagram },
  ],
};

const achievements = [
  {
    year: "2019",
    title: "Crossed 1 Million Subscribers",
    description:
      "Achieved a major milestone with a growing community of informed viewers, sparking public discourse on key national and global issues.",
    icon: FaRocket,
    color: "from-blue-500 to-purple-600",
  },
  {
    year: "2022",
    title: "Fact-Based Journalism Recognition",
    description:
      "Honored by independent media platforms for promoting responsible digital journalism, critical thinking, and civic engagement.",
    icon: FaTrophy,
    color: "from-purple-500 to-pink-600",
  },
  {
    year: "2023",
    title: "Launched Dhruv Rathee Academy",
    description:
      "Introduced a comprehensive online learning platform focused on YouTube growth, media literacy, and empowering the next generation of digital creators.",
    icon: FaStar,
    color: "from-pink-500 to-red-600",
  },
  {
    year: "2025",
    title: "Global EdTech Collaborations",
    description:
      "Partnered with top educational institutions and platforms to offer accessible courses worldwide, reaching learners in over 20 countries.",
    icon: FaLightbulb,
    color: "from-green-500 to-blue-600",
  },
];

const testimonials = [
  {
    name: "Raghav Goel",
    role: "Enrolled in ChatGPT course",
    text: "I believe conducting the course in Hindi Language was the best part. All the concepts were explained in a very simple easy to understand way. The prompt sheets prepared are also very useful for future use. Looking forward for more such creative courses by Dhruv.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Keyur Kumbhare",
    role: "Enrolled in Time Management course",
    text: "This course proved to be a game changer and helped me a lot in killing my habit of procrastination. Really enjoyed the whole vibe of the course and how Dhruv kept it short and simple without missing anything. Thank you!",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Bushra Khan R.",
    role: "Enrolled in YouTube Blueprint course",
    text: "Extremely well structured, and very well presented. I believe the change that I would expect would be the change in the green screen. The BG could've been more simplistic other I really love everything you guys do! Thanks to each and everyone in the team for making it possible!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeAchievement, setActiveAchievement] = useState(0);
  const [counters, setCounters] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAchievement((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (isVisible.hero) {
      founder.stats.forEach((stat, index) => {
        const target = parseInt(stat.number.replace(/[^\d]/g, ""));
        let current = 0;
        const increment = target / 50;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }

          setCounters((prev) => ({
            ...prev,
            [index]: Math.floor(current),
          }));
        }, 50);
      });
    }
  }, [isVisible.hero]);

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`w-4 h-4 transition-colors duration-300 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 overflow-hidden">
      {/* Hero Section with Enhanced Profile */}
      <section
        id="hero"
        ref={(el) => (sectionRefs.current.hero = el)}
        className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:py-32"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-36 sm:w-72 h-36 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-40 sm:w-80 h-40 sm:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div
            className={`text-center mb-8 sm:mb-16 transform transition-all duration-1000 ${
              isVisible.hero
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Profile Image with Advanced Effects */}
            <div className="relative inline-block mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 rounded-full blur-md opacity-75 animate-pulse scale-110"></div>
              <img
                src={founder.photo}
                alt={founder.name}
                className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-full object-cover border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <FaHeart className="text-white text-lg sm:text-xl" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-2 sm:mb-4 px-4">
              {founder.name}
            </h1>
            <h2 className="text-lg sm:text-2xl font-semibold text-purple-500 mb-4 sm:mb-6 px-4">
              {founder.role}
            </h2>
            <p className="text-gray-700 text-base sm:text-xl leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
              {founder.bio}
            </p>

            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto px-4">
              {founder.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform ${
                    isVisible.hero
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-2 sm:mb-3" />
                  <div className="text-xl sm:text-3xl font-bold text-gray-800 mb-1">
                    {counters[index]
                      ? `${counters[index]}${stat.number.replace(/\d+/g, "")}`
                      : stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <FaArrowDown className="text-purple-500 text-xl" />
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section
        id="timeline"
        ref={(el) => (sectionRefs.current.timeline = el)}
        className="py-12 sm:py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-8 sm:mb-16 transform transition-all duration-1000 ${
              isVisible.timeline
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
              Journey of Excellence
            </h3>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto px-4">
              Discover the milestones that shaped our mission to educate,
              empower, and enlighten millions through digital storytelling.
            </p>
          </div>

          {/* Mobile Timeline */}
          <div className="block sm:hidden space-y-8">
            {achievements.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    isVisible.timeline
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${
                        item.color
                      } rounded-full flex items-center justify-center shadow-lg ${
                        activeAchievement === index
                          ? "scale-125 shadow-2xl"
                          : ""
                      } transition-all duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${item.color} mb-2`}
                      >
                        {item.year}
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden sm:block relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            {achievements.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  } mb-16`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${
                        item.color
                      } rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                        activeAchievement === index
                          ? "scale-125 shadow-2xl"
                          : "hover:scale-110"
                      }`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"} ${
                      isVisible.timeline
                        ? "translate-x-0 opacity-100"
                        : `${
                            isLeft ? "-translate-x-10" : "translate-x-10"
                          } opacity-0`
                    } transition-all duration-1000`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 ${
                        activeAchievement === index
                          ? "ring-2 ring-purple-400 bg-gradient-to-br from-white to-purple-50"
                          : ""
                      }`}
                    >
                      <div
                        className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${item.color} mb-4`}
                      >
                        {item.year}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section
        id="testimonials"
        ref={(el) => (sectionRefs.current.testimonials = el)}
        className="py-12 sm:py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-8 sm:mb-16 transform transition-all duration-1000 ${
              isVisible.testimonials
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Success Stories
            </h3>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto px-4">
              Real transformations from our amazing community of learners
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden transform ${
                  isVisible.testimonials
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -mr-8 sm:-mr-12 -mt-8 sm:-mt-12 group-hover:scale-150 transition-transform duration-500"></div>

                {/* Quote Icon */}
                <FaQuoteLeft className="text-purple-400 text-xl sm:text-2xl mb-4 relative z-10" />

                {/* Rating */}
                <StarRating rating={testimonial.rating} />

                {/* Testimonial Text */}
                <p className="text-gray-700 italic text-sm sm:text-lg leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center relative z-10">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4 border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <div className="font-bold text-gray-800 text-sm sm:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-purple-600 font-medium text-xs sm:text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/10 rounded-full -ml-16 sm:-ml-32 -mt-16 sm:-mt-32 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/10 rounded-full -mr-24 sm:-mr-48 -mb-24 sm:-mb-48 animate-pulse animation-delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Ready to Transform Your Future?
          </h3>
          <p className="text-sm sm:text-xl text-purple-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of successful students who've changed their lives
            through our programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <NavLink
              to="/products"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-bold rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300 group text-center"
            >
              <span className="mr-2">Start Your Journey</span>
              <FaRocket className="inline-block group-hover:translate-x-1 transition-transform duration-300" />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
