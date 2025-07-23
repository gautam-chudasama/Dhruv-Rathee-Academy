import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaHeart,
  FaRegHeart,
  FaShare,
  FaStar,
  FaCheck,
  FaClock,
  FaUsers,
  FaPlayCircle,
  FaDownload,
  FaShoppingCart,
  FaCertificate,
  FaInfinity,
  FaHeadset,
  FaMobile,
  FaLightbulb,
  FaQuoteLeft,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

// Enhanced product data
const productsData = [
  {
    id: "1",
    title: "Master ChatGPT",
    price: "₹6,899",
    originalPrice: "₹9,999",
    category: "Course",
    image:
      "https://th.bing.com/th/id/OIP._bav1kSaVxm8HoGAY7NxvwHaEK?w=313&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    gallery: [
      "https://th.bing.com/th/id/OIP._bav1kSaVxm8HoGAY7NxvwHaEK?w=313&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      // "https://images.unsplash.com/photo-1677442136019-21780ecad8c4?w=600&h=400&fit=crop",
      // "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    ],
    description:
      "Master the power of AI with ChatGPT. Learn prompt engineering, automation, and practical applications to boost your productivity.",
    longDescription:
      "Artificial Intelligence is transforming the world, and ChatGPT is at the forefront. This comprehensive course teaches you how to use ChatGPT to boost productivity at work, school, and home. Explore the basics of machine learning, prompt engineering, and practical AI applications. From content creation to data analysis, unlock the full potential of AI in your daily life.",
    rating: 4.9,
    reviews: 1247,
    students: 28479,
    duration: "10.5 Hours",
    level: "Beginner to Advanced",
    language: "Hindi & English",
    badge: "Bestseller",
    features: [
      "20+ ChatGPT techniques and strategies",
      "Prompt engineering masterclass",
      "Real-world business applications",
      "Content creation automation",
      "Data analysis with AI",
      "Lifetime access to course updates",
      "Certificate of completion",
      "24/7 email support",
      "Mobile-friendly learning",
      "Downloadable resources",
    ],
    curriculum: [
      {
        module: "Introduction to AI & ChatGPT",
        lessons: 8,
        duration: "2.5 hours",
      },
      {
        module: "Prompt Engineering Fundamentals",
        lessons: 12,
        duration: "3 hours",
      },
      {
        module: "Advanced ChatGPT Techniques",
        lessons: 10,
        duration: "2.5 hours",
      },
      {
        module: "Business Applications",
        lessons: 15,
        duration: "2.5 hours",
      },
    ],
    instructor: {
      name: "Dhruv Rathee",
      title: "YouTuber & Digital Creator",
      image:
        "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428438_Dhruv%201(1).png",
      bio: "I love making videos. My expertise is in creating informative and educational content which provides objective, concise and simplified explanations of complex issues.",
      followers: "25M+",
      courses: 5,
      rating: 4.9,
    },
    testimonials: [
      {
        name: "Raghav Goel",
        text: "The course in Hindi Language was the best part. All concepts were explained in a very simple way. The prompt sheets are very useful!",
        rating: 5,
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      },
      {
        name: "Priya Sharma",
        text: "This course completely changed how I work with AI. The practical examples are incredible and Dhruv's teaching style is amazing!",
        rating: 5,
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      },
    ],
  },
  {
    id: "2",
    title: "The YouTube Blueprint",
    price: "₹6,999",
    originalPrice: "₹9,999",
    category: "Course",
    image:
      "https://th.bing.com/th/id/OIP.Gj7KBHLP-6xkfr5h5o8QZQHaEK?w=292&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    gallery: [
      "https://th.bing.com/th/id/OIP.Gj7KBHLP-6xkfr5h5o8QZQHaEK?w=292&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      // "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    ],
    description:
      "Learn the complete YouTube strategy from content creation to monetization. Build your channel from zero to thousands of subscribers.",
    longDescription:
      "Master the art of YouTube content creation with this comprehensive blueprint. Learn everything from channel setup, content strategy, video editing, SEO optimization, thumbnail design, and monetization strategies. Based on real-world experience of building a 25M+ subscriber channel.",
    rating: 4.8,
    reviews: 892,
    students: 15234,
    duration: "12 Hours",
    level: "Beginner to Intermediate",
    language: "Hindi & English",
    badge: "Popular",
    features: [
      "Complete YouTube strategy",
      "Content planning & scripting",
      "Video editing techniques",
      "Thumbnail design mastery",
      "SEO & Algorithm secrets",
      "Monetization strategies",
      "Analytics & growth hacking",
      "Live Q&A sessions",
      "Private community access",
      "Lifetime updates",
    ],
    instructor: {
      name: "Dhruv Rathee",
      title: "YouTuber & Digital Creator",
      image:
        "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/65e8a443d3a217849e428438_Dhruv%201(1).png",
      bio: "I love making videos. My expertise is in creating informative and educational content which provides objective, concise and simplified explanations of complex issues.",
      followers: "25M+",
      courses: 5,
      rating: 4.9,
    },
  },
  {
    id: "3",
    title: "Time Management Mastery",
    price: "₹2,999",
    originalPrice: "₹4,999",
    category: "Course",
    image:
      "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/66f1297be6a8a547698c3fb0_Image%20(12).png",
    description:
      "Master your time and boost productivity with proven techniques and strategies used by successful entrepreneurs.",
    rating: 4.7,
    students: 22156,
    duration: "8 Hours",
    badge: "Trending",
  },
  {
    id: "4",
    title: "The AI Masterclass",
    price: "₹9999",
    originalPrice: "₹14999",
    category: "Course",
    image:
      "https://th.bing.com/th/id/OIP.Gj7KBHLP-6xkfr5h5o8QZQHaEK?w=292&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    description:
      "Are you ready to transform your skills, boost productivity, and stay ahead in the AI revolution? Join The AI Masterclass, a live online workshop designed to empower you with the latest AI tools and knowledge you need to thrive in today’s fast-changing world.",
    rating: 4.6,
    students: 8920,
    duration: "Live",
    badge: "Live",
  },
  {
    id: "5",
    title: "The Power of Universe",
    price: "₹59",
    originalPrice: "₹119",
    category: "E-books",
    image:
      "https://cdn.prod.website-files.com/65e8a443d3a217849e4283b8/6634b3b8bd31e9e068535024_Frame%201171275002%20(1).png",
    description:
      "Read 'The Power of Universe' by Vijeta Dahiya and find out. What you would learn here would guide you through your life.",
    rating: 4.6,
    students: 1876,
    duration: "77 Pages",
    badge: "E-Book",
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundProduct = productsData.find((p) => p.id === id);
      setProduct(foundProduct);
      setIsLoading(false);
      if (foundProduct?.sizes) setSelectedSize(foundProduct.sizes[2]); // Default to M
      if (foundProduct?.colors) setSelectedColor(foundProduct.colors[0]); // Default to first color
    }, 800);
  }, [id]);

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
  }, [product]);

  const handlePurchase = () => {
    if (product?.category === "Course") {
      // Simulate enrollment
      const enrollmentData = {
        courseId: product.id,
        courseName: product.title,
        price: product.price,
        timestamp: new Date().toISOString(),
      };

      // Store in localStorage for demo purposes
      localStorage.setItem("enrollment", JSON.stringify(enrollmentData));

      alert(
        `🎉 Successfully enrolled in ${product.title}! Welcome to the program. Check your email for access details.`
      );
    } else {
      alert(`🛒 Added ${product.title} to cart! Proceeding to checkout...`);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.title,
          text: product?.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const StarRating = ({ rating, size = "text-sm" }) => (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`${size} ${
            i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
      <span className={`${size} text-gray-400 ml-1`}>({rating})</span>
    </div>
  );

  const LoadingSpinner = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-purple-200 border-opacity-20 rounded-full animate-spin"></div>
          <div className="w-20 h-20 border-4 border-purple-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
        </div>
        <p className="text-white mt-4 text-lg">Loading course details...</p>
      </div>
    </div>
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">😕</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-300 mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const discount = Math.round(
    ((parseInt(
      product.originalPrice?.replace("₹", "").replace(",", "") || "0"
    ) -
      parseInt(product.price.replace("₹", "").replace(",", ""))) /
      parseInt(
        product.originalPrice?.replace("₹", "").replace(",", "") || "1"
      )) *
      100
  );

  const tabs = [
    { id: "description", label: "Description", icon: FaLightbulb },
    { id: "curriculum", label: "Curriculum", icon: FaGraduationCap },
    { id: "instructor", label: "Instructor", icon: FaUsers },
    { id: "reviews", label: "Reviews", icon: FaStar },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors duration-300"
          >
            <FaArrowLeft />
            <span>Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div
            ref={(el) => (sectionRefs.current.gallery = el)}
            id="gallery"
            className={`transition-all duration-1000 ${
              isVisible.gallery
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10">
                <img
                  src={product.gallery?.[selectedImage] || product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                    {product.badge}
                  </div>
                )}

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white text-sm font-bold rounded-full">
                    {discount}% OFF
                  </div>
                )}
              </div>

              {/* Gallery Thumbnails */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex space-x-3">
                  {product.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index
                          ? "border-purple-500 scale-110"
                          : "border-white/20 hover:border-purple-400"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div
            ref={(el) => (sectionRefs.current.info = el)}
            id="info"
            className={`transition-all duration-1000 delay-300 ${
              isVisible.info
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  {product.description}
                </p>

                {/* Rating & Stats */}
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  {product.rating && (
                    <div className="flex items-center space-x-2">
                      <StarRating rating={product.rating} size="text-lg" />
                      <span className="text-white font-semibold">
                        ({product.reviews || 0} reviews)
                      </span>
                    </div>
                  )}

                  {product.students && (
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FaUsers className="text-purple-400" />
                      <span>{product.students.toLocaleString()}+ students</span>
                    </div>
                  )}

                  {product.duration && (
                    <div className="flex items-center space-x-2 text-gray-300">
                      <FaClock className="text-purple-400" />
                      <span>{product.duration}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-white">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through ml-3">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      {isWishlisted ? (
                        <FaHeart className="text-red-400" />
                      ) : (
                        <FaRegHeart className="text-white" />
                      )}
                    </button>

                    <button
                      onClick={handleShare}
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                    >
                      <FaShare className="text-white" />
                    </button>
                  </div>
                </div>

                {/* Size & Color Selection for Merchandise */}
                {product.category === "Merchandise" && (
                  <div className="space-y-4 mb-6">
                    {product.sizes && (
                      <div>
                        <label className="text-white font-semibold mb-2 block">
                          Size:
                        </label>
                        <div className="flex space-x-2">
                          {product.sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                                selectedSize === size
                                  ? "border-purple-500 bg-purple-500/20 text-white"
                                  : "border-white/20 text-gray-300 hover:border-purple-400"
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {product.colors && (
                      <div>
                        <label className="text-white font-semibold mb-2 block">
                          Color:
                        </label>
                        <div className="flex space-x-2">
                          {product.colors.map((color) => (
                            <button
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                                selectedColor === color
                                  ? "border-purple-500 bg-purple-500/20 text-white"
                                  : "border-white/20 text-gray-300 hover:border-purple-400"
                              }`}
                            >
                              {color}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="text-white font-semibold mb-2 block">
                        Quantity:
                      </label>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300"
                        >
                          -
                        </button>
                        <span className="text-white font-semibold text-lg w-8 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Purchase Button */}
                <button
                  onClick={handlePurchase}
                  className="w-full py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-600 text-white font-bold text-lg rounded-xl hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {product.category === "Course" ? (
                    <>
                      <FaRocket />
                      <span>Enroll Now</span>
                    </>
                  ) : (
                    <>
                      <FaShoppingCart />
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>

                {/* Course Features */}
                {product.category === "Course" && (
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <FaInfinity className="text-purple-400" />
                      <span>Lifetime Access</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <FaCertificate className="text-purple-400" />
                      <span>Certificate</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <FaHeadset className="text-purple-400" />
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <FaMobile className="text-purple-400" />
                      <span>Mobile Access</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div
          ref={(el) => (sectionRefs.current.tabs = el)}
          id="tabs"
          className={`transition-all duration-1000 ${
            isVisible.tabs
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 p-2 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            {/* Description Tab */}
            {activeTab === "description" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    About This Course
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {product.longDescription || product.description}
                  </p>
                </div>

                {product.features && (
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      What You'll Learn
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Curriculum Tab */}
            {activeTab === "curriculum" && product.curriculum && (
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Course Curriculum
                </h3>
                {product.curriculum.map((module, index) => (
                  <div
                    key={index}
                    className="bg-white/5 rounded-xl p-6 border border-white/10"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        Module {index + 1}: {module.module}
                      </h4>
                      <div className="text-sm text-gray-400">
                        {module.lessons} lessons • {module.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Instructor Tab */}
            {activeTab === "instructor" && product.instructor && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Meet Your Instructor
                </h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={product.instructor.image}
                      alt={product.instructor.name}
                      className="w-32 h-32 rounded-2xl object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">
                      {product.instructor.name}
                    </h4>
                    <p className="text-purple-400 mb-4">
                      {product.instructor.title}
                    </p>
                    <p className="text-gray-300 mb-4">
                      {product.instructor.bio}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          {product.instructor.followers}
                        </div>
                        <div className="text-sm text-gray-400">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          {product.instructor.courses}
                        </div>
                        <div className="text-sm text-gray-400">Courses</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">
                          {product.instructor.rating}
                        </div>
                        <div className="text-sm text-gray-400">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">1M+</div>
                        <div className="text-sm text-gray-400">Students</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">
                    Student Reviews
                  </h3>
                  {product.rating && (
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        {product.rating}
                      </div>
                      <StarRating rating={product.rating} />
                      <div className="text-sm text-gray-400">
                        {product.reviews} reviews
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {product.testimonials ? (
                    product.testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white/5 rounded-xl p-6 border border-white/10"
                      >
                        <div className="flex items-start space-x-4">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-semibold text-white">
                                {testimonial.name}
                              </h5>
                              <StarRating rating={testimonial.rating} />
                            </div>
                            <div className="flex items-start space-x-3">
                              <FaQuoteLeft className="text-purple-400 text-xl flex-shrink-0 mt-1" />
                              <p className="text-gray-300 italic">
                                {testimonial.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-6xl mb-4">📝</div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        No Reviews Yet
                      </h4>
                      <p className="text-gray-400">
                        Be the first to leave a review for this amazing product!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            You Might Also Like
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {productsData
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video rounded-xl overflow-hidden mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {relatedProduct.title}
                  </h4>

                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {relatedProduct.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-white">
                        {relatedProduct.price}
                      </span>
                      {relatedProduct.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">
                          {relatedProduct.originalPrice}
                        </span>
                      )}
                    </div>

                    {relatedProduct.rating && (
                      <StarRating rating={relatedProduct.rating} />
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
