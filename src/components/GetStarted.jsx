import React, { useState, useEffect, useRef } from "react";
import {
  FaRocket,
  FaGraduationCap,
  FaUsers,
  FaPlayCircle,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaLightbulb,
  FaClock,
  FaHeart,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const GetStarted = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeStep, setActiveStep] = useState(0);
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
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Choose Your Path",
      description:
        "Select from our wide range of courses designed for every skill level",
      icon: FaLightbulb,
      color: "from-blue-500 to-purple-600",
    },
    {
      id: 2,
      title: "Learn at Your Pace",
      description: "Access courses anytime, anywhere with lifetime validity",
      icon: FaClock,
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 3,
      title: "Apply Knowledge",
      description: "Put your learning into practice with real-world projects",
      icon: FaRocket,
      color: "from-pink-500 to-red-600",
    },
    {
      id: 4,
      title: "Join Community",
      description: "Connect with 1M+ learners and grow together",
      icon: FaUsers,
      color: "from-green-500 to-blue-600",
    },
  ];

  const benefits = [
    "Lifetime access to all course materials",
    "Expert-led content by Dhruv Rathee",
    "Interactive Q&A sessions",
    "Certificate of completion",
    "24/7 email support",
    "Mobile-friendly learning platform",
  ];

  const popularCourses = [
    {
      title: "Master ChatGPT",
      price: "₹6,899",
      originalPrice: "₹9,999",
      students: "28,479+",
      rating: 4.9,
      duration: "10.5 Hours",
    },
    {
      title: "YouTube Blueprint",
      price: "₹6,999",
      originalPrice: "₹9,999",
      students: "15,234+",
      rating: 4.8,
      duration: "12 Hours",
    },
    {
      title: "Time Management Mastery",
      price: "₹2,999",
      originalPrice: "₹4,999",
      students: "22,156+",
      rating: 4.7,
      duration: "8 Hours",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <section
        ref={(el) => (sectionRefs.current.hero = el)}
        id="hero"
        className="relative pt-32 pb-20 px-4 overflow-hidden"
      >
        {/* Background Animation */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 3}s`,
              }}
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Start Your{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join over <strong className="text-pink-400">1 Million+</strong>{" "}
              students who are transforming their lives through fact-based
              education and critical thinking
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <NavLink
                to="/products"
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="flex items-center gap-2">
                  <FaRocket className="group-hover:animate-bounce" />
                  Explore Courses
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </NavLink>

              <button className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-purple-900 hover:scale-110 hover:shadow-2xl backdrop-blur-sm bg-white/10">
                <span className="flex items-center gap-2">
                  <FaPlayCircle />
                  Watch Demo
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1M+", label: "Active Students" },
                { number: "4+", label: "Expert Courses" },
                { number: "95%", label: "Success Rate" },
                { number: "24/7", label: "Support" },
              ].map(({ number, label }, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text">
                    {number}
                  </div>
                  <div className="text-gray-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={(el) => (sectionRefs.current.steps = el)}
        id="steps"
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.steps
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It{" "}
              <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your journey to success starts with these simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={step.id}
                  className={`relative p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 transition-all duration-500 transform ${
                    isActive
                      ? "scale-105 bg-white/10 border-purple-500/50"
                      : "hover:scale-105 hover:bg-white/10"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      step.color
                    } flex items-center justify-center mb-6 mx-auto transition-all duration-500 ${
                      isActive ? "animate-pulse-glow" : ""
                    }`}
                  >
                    <Icon className="text-2xl text-white" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>

                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        ref={(el) => (sectionRefs.current.benefits = el)}
        id="benefits"
        className="py-20 px-4 bg-black/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-1000 ${
                isVisible.benefits
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose{" "}
                <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Dhruv Rathee Academy?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get access to premium education designed to transform your
                knowledge and career prospects.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible.benefits
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                  <div className="text-center mb-6">
                    <FaGraduationCap className="text-6xl text-purple-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Start Learning Today
                    </h3>
                    <p className="text-gray-300">
                      Join thousands of successful students
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-pink-400">
                        4.9★
                      </div>
                      <div className="text-sm text-gray-400">
                        Average Rating
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-400">
                        100%
                      </div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section
        ref={(el) => (sectionRefs.current.courses = el)}
        id="courses"
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.courses
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular{" "}
              <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Courses
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start with our most loved courses trusted by thousands of students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <FaUsers className="text-purple-400" />
                    {course.students} students
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <FaStar className="text-yellow-400" />
                    {course.rating} rating • {course.duration}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-white">
                      {course.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-2">
                      {course.originalPrice}
                    </span>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save{" "}
                    {Math.round(
                      ((parseInt(
                        course.originalPrice.replace("₹", "").replace(",", "")
                      ) -
                        parseInt(
                          course.price.replace("₹", "").replace(",", "")
                        )) /
                        parseInt(
                          course.originalPrice.replace("₹", "").replace(",", "")
                        )) *
                        100
                    )}
                    %
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink
              to="/products"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-lg transition-colors duration-300"
            >
              View All Courses
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500/10 via-purple-600/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <FaHeart className="text-6xl text-pink-400 mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution of informed minds. Start your journey with
              Dhruv Rathee Academy today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NavLink
              to="/products"
              className="group px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="flex items-center gap-2">
                <FaRocket className="group-hover:animate-bounce" />
                Start Learning Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </NavLink>

            <NavLink
              to="/about"
              className="group px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all duration-300 hover:bg-white hover:text-purple-900 hover:scale-110 hover:shadow-2xl backdrop-blur-sm bg-white/10"
            >
              Learn More About Us
            </NavLink>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            <p>
              ✨ No hidden fees • Lifetime access • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;
