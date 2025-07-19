import React, { useState, useEffect } from "react";
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
} from "react-icons/fa";

// Enhanced mock product data with more details
const productsData = [
  {
    id: "1",
    title: "Leadership Masterclass",
    price: "₹2999",
    originalPrice: "₹4999",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
    ],
    description:
      "Unlock your inner leader with our comprehensive 2025 cohort program designed for ambitious professionals.",
    longDescription:
      "This intensive 8-week leadership masterclass covers everything from emotional intelligence to strategic decision making. You'll learn from industry experts and connect with like-minded professionals.",
    category: "Course",
    rating: 4.8,
    reviews: 247,
    students: 1420,
    duration: "8 weeks",
    level: "Intermediate",
    features: [
      "8 weeks of intensive training",
      "Live Q&A sessions with experts",
      "Networking opportunities",
      "Certificate of completion",
      "Lifetime access to materials",
      "1-on-1 mentorship session",
    ],
    instructor: {
      name: "Ananya Mehra",
      title: "Leadership Coach & Entrepreneur",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
  },
  {
    id: "2",
    title: "Brand T-shirt",
    price: "₹799",
    originalPrice: "₹1299",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=400&fit=crop",
    ],
    description:
      "Limited edition premium T-shirt for exclusive community members.",
    longDescription:
      "Made from 100% organic cotton with our signature motivational quotes. Perfect for casual wear or workout sessions.",
    category: "Merchandise",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy Blue"],
    features: [
      "100% organic cotton",
      "Premium quality print",
      "Comfortable fit",
      "Motivational design",
      "Limited edition",
      "Eco-friendly packaging",
    ],
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

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundProduct = productsData.find((p) => p.id === id);
      setProduct(foundProduct);
      setIsLoading(false);
      if (foundProduct?.sizes) setSelectedSize(foundProduct.sizes[0]);
      if (foundProduct?.colors) setSelectedColor(foundProduct.colors[0]);
    }, 500);
  }, [id]);

  const handlePurchase = () => {
    if (product?.category === "Course") {
      alert(`🎉 Enrolled in ${product.title}! Welcome to the program.`);
    } else {
      alert(`🛒 Added ${product.title} to cart! Proceeding to checkout...`);
    }
  };

  const handleShare = () => {
    navigator.share?.({
      title: product?.title,
      text: product?.description,
      url: window.location.href,
    }) || alert("Link copied to clipboard!");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <button
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="inline mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Breadcrumb & Back Button */}
      <div className="sticky top-20 bg-white/80 backdrop-blur-md z-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-purple-600 hover:text-purple-800 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back
            </button>
            <div className="text-gray-500">
              <Link to="/products" className="hover:text-purple-600">
                Products
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">{product.title}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              {isWishlisted ? (
                <FaHeart className="text-red-500 w-5 h-5" />
              ) : (
                <FaRegHeart className="text-gray-400 w-5 h-5" />
              )}
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <FaShare className="text-gray-600 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={product.gallery?.[selectedImage] || product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-purple-500 ring-2 ring-purple-200"
                        : "border-gray-200 hover:border-purple-300"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                  {product.category}
                </span>
                {product.level && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {product.level}
                  </span>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {product.description}
              </p>

              {/* Rating & Reviews */}
              {product.rating && (
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                  {product.students && (
                    <div className="flex items-center text-sm text-gray-500">
                      <FaUsers className="w-4 h-4 mr-1" />
                      {product.students} students
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Pricing */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl">
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="text-3xl font-bold text-purple-700">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-medium rounded">
                    Save{" "}
                    {Math.round(
                      ((parseInt(product.originalPrice.replace(/[^\d]/g, "")) -
                        parseInt(product.price.replace(/[^\d]/g, ""))) /
                        parseInt(product.originalPrice.replace(/[^\d]/g, ""))) *
                        100
                    )}
                    %
                  </span>
                )}
              </div>
              {product.duration && (
                <div className="flex items-center text-gray-600 text-sm">
                  <FaClock className="w-4 h-4 mr-2" />
                  Duration: {product.duration}
                </div>
              )}
            </div>

            {/* Options (for merchandise) */}
            {product.sizes && (
              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? "border-purple-500 bg-purple-50 text-purple-700"
                          : "border-gray-300 hover:border-purple-300"
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
                <h3 className="font-semibold mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedColor === color
                          ? "border-purple-500 bg-purple-50 text-purple-700"
                          : "border-gray-300 hover:border-purple-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity (for merchandise) */}
            {product.category === "Merchandise" && (
              <div>
                <h3 className="font-semibold mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-300 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-purple-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={handlePurchase}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                {product.category === "Course" ? (
                  <>
                    <FaPlayCircle className="w-5 h-5" />
                    <span>Enroll Now</span>
                  </>
                ) : (
                  <>
                    <FaShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>

              {product.category === "Course" && (
                <button className="w-full bg-white border-2 border-purple-600 text-purple-600 font-semibold py-4 px-8 rounded-2xl hover:bg-purple-50 transition-all flex items-center justify-center space-x-2">
                  <FaDownload className="w-4 h-4" />
                  <span>Download Syllabus</span>
                </button>
              )}
            </div>

            {/* Instructor (for courses) */}
            {product.instructor && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <h3 className="font-semibold mb-3">Your Instructor</h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={product.instructor.image}
                    alt={product.instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {product.instructor.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {product.instructor.title}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {["description", "features", "reviews"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? "border-purple-500 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            )}

            {activeTab === "features" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Reviews Coming Soon
                </h3>
                <p className="text-gray-500">
                  Be the first to leave a review for this amazing product!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
