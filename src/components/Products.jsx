import React, { useState, useEffect, useRef } from "react";

// Enhanced product data with more details
const productsData = [
  {
    id: 1,
    title: "Leadership Masterclass",
    category: "Courses",
    price: "₹2999",
    originalPrice: "₹4999",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    description:
      "Unlock your inner leader with our 2025 cohort and transform your career.",
    rating: 4.9,
    students: 2847,
    duration: "8 weeks",
    badge: "Bestseller",
    features: ["Live Sessions", "Certification", "1-on-1 Mentoring"],
  },
  {
    id: 2,
    title: "Brand T-shirt",
    category: "Merch",
    price: "₹799",
    originalPrice: "₹999",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    description: "Limited edition premium T-shirt for exclusive members.",
    rating: 4.7,
    students: 1205,
    duration: "Premium Cotton",
    badge: "Limited",
    features: ["Premium Quality", "Limited Edition", "Free Shipping"],
  },
  {
    id: 3,
    title: "Productivity Bootcamp",
    category: "Courses",
    price: "₹1499",
    originalPrice: "₹2499",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
    description:
      "Boost your productivity with proven strategies and frameworks.",
    rating: 4.8,
    students: 3421,
    duration: "4 weeks",
    badge: "New",
    features: ["Practical Tools", "Templates", "Community Access"],
  },
  {
    id: 4,
    title: "Start-up Mug",
    category: "Merch",
    price: "₹399",
    originalPrice: "₹599",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=300&fit=crop",
    description:
      "Sip your coffee with inspiration and motivation every morning!",
    rating: 4.6,
    students: 892,
    duration: "Ceramic",
    badge: "Popular",
    features: ["Dishwasher Safe", "Motivational Design", "Gift Wrapped"],
  },
  {
    id: 5,
    title: "Digital Marketing Pro",
    category: "Courses",
    price: "₹3499",
    originalPrice: "₹5999",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    description:
      "Master digital marketing with hands-on projects and real campaigns.",
    rating: 4.9,
    students: 1876,
    duration: "12 weeks",
    badge: "Hot",
    features: ["Real Projects", "Industry Tools", "Job Placement"],
  },
  {
    id: 6,
    title: "Motivational Hoodie",
    category: "Merch",
    price: "₹1299",
    originalPrice: "₹1799",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
    description: "Stay warm and motivated with our premium quality hoodie.",
    rating: 4.8,
    students: 567,
    duration: "Cotton Blend",
    badge: "Trending",
    features: ["Soft Material", "Unisex Design", "Multiple Colors"],
  },
];

const categories = [
  { name: "All", icon: "🌟", count: productsData.length },
  {
    name: "Courses",
    icon: "📚",
    count: productsData.filter((p) => p.category === "Courses").length,
  },
  {
    name: "Merch",
    icon: "👕",
    count: productsData.filter((p) => p.category === "Merch").length,
  },
];

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "popular", label: "Most Popular" },
];

const ProductCard = ({ product, index }) => {
  const cardRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getBadgeColor = (badge) => {
    const colors = {
      Bestseller: "bg-gradient-to-r from-yellow-400 to-orange-500",
      Limited: "bg-gradient-to-r from-red-500 to-pink-600",
      New: "bg-gradient-to-r from-green-400 to-blue-500",
      Popular: "bg-gradient-to-r from-purple-500 to-indigo-600",
      Hot: "bg-gradient-to-r from-red-400 to-red-600",
      Trending: "bg-gradient-to-r from-pink-500 to-purple-600",
    };
    return colors[badge] || "bg-gradient-to-r from-gray-400 to-gray-600";
  };

  const discount = Math.round(
    ((parseInt(product.originalPrice.replace("₹", "")) -
      parseInt(product.price.replace("₹", ""))) /
      parseInt(product.originalPrice.replace("₹", ""))) *
      100
  );

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      <div
        className={`absolute top-4 left-4 z-20 ${getBadgeColor(
          product.badge
        )} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}
      >
        {product.badge}
      </div>

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-4 right-4 z-20 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          -{discount}%
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Quick View Button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={() => window.open(`/products/${product.id}`, "_blank")}
            className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating and Students */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ⭐
                </span>
              ))}
              <span className="text-sm text-gray-600 ml-1">
                {product.rating}
              </span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {product.students.toLocaleString()} enrolled
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span
              key={idx}
              className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-xs text-gray-500">
              +{product.features.length - 2} more
            </span>
          )}
        </div>

        {/* Price and Duration */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-purple-600">
              {product.price}
            </span>
            {product.originalPrice !== product.price && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {product.duration}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => window.open(`/products/${product.id}`, "_blank")}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold text-center block hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {product.category === "Courses" ? "Enroll Now" : "Add to Cart"}
        </button>
      </div>

      {/* Shimmer Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transform -skew-x-12 transition-all duration-1000 ${
          isHovered ? "opacity-20 translate-x-full" : "-translate-x-full"
        }`}
      />
    </div>
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const filteredProducts = productsData
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        (searchQuery === "" ||
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return (
            parseInt(a.price.replace("₹", "")) -
            parseInt(b.price.replace("₹", ""))
          );
        case "price-high":
          return (
            parseInt(b.price.replace("₹", "")) -
            parseInt(a.price.replace("₹", ""))
          );
        case "rating":
          return b.rating - a.rating;
        case "popular":
          return b.students - a.students;
        default:
          return 0;
      }
    });

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Our Premium
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Collection
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Discover our handpicked courses and exclusive merchandise designed
            to elevate your journey
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="absolute right-3 top-3 text-gray-400">🔍</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 space-y-4 lg:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center lg:justify-start space-x-2">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategoryChange(cat.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat.name
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-purple-50 hover:border-purple-200"
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-4">
            <label className="text-gray-600 font-medium">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-purple-600">
              {filteredProducts.length}
            </span>{" "}
            products
            {searchQuery && (
              <span>
                {" "}
                for "<span className="font-semibold">{searchQuery}</span>"
              </span>
            )}
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600"></div>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </div>
        )}

        {/* CTA Section */}
        {filteredProducts.length > 0 && (
          <div className="mt-20 text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Can't find what you're looking for?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get personalized recommendations based on your interests
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Get Recommendations
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
