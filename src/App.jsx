import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./components/Home"));
const Products = lazy(() => import("./components/Products"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const About = lazy(() => import("./components/About"));
// const LoginSignup = lazy(() => import("./components/LoginSignup"));
const GetStarted = lazy(() => import("./components/GetStarted"));
import LoginSignup from "./components/LoginSignup"

// Loading component with modern shimmer effect
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <div className="relative">
      {/* Animated logo/brand placeholder */}
      <div className="text-center mb-8">
        <div className="text-white text-4xl font-bold mb-4 animate-pulse">
          Dhruv Rathee Academy
        </div>
      </div>

      {/* Multi-layer loading animation */}
      <div className="relative flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 border-4 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
        {/* Middle ring */}
        <div
          className="absolute w-14 h-14 border-3 border-pink-400 border-b-transparent rounded-full animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "0.8s" }}
        ></div>
        {/* Inner pulsing dot */}
        <div className="absolute w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
      </div>

      {/* Loading text */}
      <div className="text-white text-center mt-6">
        <div className="flex items-center justify-center space-x-1">
          <span className="animate-bounce">L</span>
          <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
            o
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            a
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
            d
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            i
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.5s" }}>
            n
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
            g
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.7s" }}>
            .
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.8s" }}>
            .
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.9s" }}>
            .
          </span>
        </div>
      </div>
    </div>
  </div>
);

// Advanced Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorId: Date.now().toString(36),
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App Error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });

    // In a real app, you'd send this to your error tracking service
    // Example: Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 px-4">
          <div className="text-center text-white max-w-lg">
            {/* Error Icon */}
            <div className="text-6xl mb-6 animate-bounce">⚠️</div>

            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
              Oops! Something went wrong
            </h1>

            <p className="text-gray-300 mb-6 leading-relaxed">
              We're experiencing technical difficulties. Don't worry, our team
              has been notified!
            </p>

            {/* Error ID for support */}
            <div className="bg-black bg-opacity-30 rounded-lg p-3 mb-6 text-sm font-mono">
              Error ID: {this.state.errorId}
            </div>

            {/* Action buttons */}
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🔄 Reload Page
              </button>

              <div className="flex justify-center space-x-4 text-sm">
                <button
                  onClick={() => window.history.back()}
                  className="text-gray-400 hover:text-white underline transition-colors"
                >
                  ← Go Back
                </button>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white underline transition-colors"
                >
                  🏠 Home
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Page Transition Component with advanced animations
const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setLoadingProgress(0);

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 30);

    const timer = setTimeout(() => {
      setIsLoading(false);
      clearInterval(progressInterval);
    }, 300);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [location]);

  return (
    <div className="relative">
      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/90 via-blue-900/90 to-indigo-900/90 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
          {/* Loading spinner */}
          <div className="w-12 h-12 border-3 border-white border-t-transparent rounded-full animate-spin mb-4"></div>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>

          <p className="text-white mt-4 text-sm">Loading {loadingProgress}%</p>
        </div>
      )}

      <div
        className={`transition-all duration-500 ease-in-out ${
          isLoading
            ? "opacity-0 transform translate-y-4 scale-95"
            : "opacity-100 transform translate-y-0 scale-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

// Enhanced Back to top button with progress indicator
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
      setIsVisible(scrollPx > 300);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        background: `conic-gradient(from 0deg, rgb(147, 51, 234) ${scrollProgress}%, rgba(147, 51, 234, 0.2) ${scrollProgress}%)`,
      }}
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

// Enhanced 404 Not Found Component
const NotFound = () => {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 px-4 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center text-white max-w-md relative z-10">
        {/* Glitch 404 effect */}
        <div
          className={`text-8xl font-bold mb-6 ${
            glitchActive ? "animate-pulse text-red-400" : ""
          }`}
        >
          <span className="inline-block transform transition-transform duration-200 hover:scale-110">
            4
          </span>
          <span className="inline-block transform transition-transform duration-200 hover:scale-110 animate-bounce">
            0
          </span>
          <span className="inline-block transform transition-transform duration-200 hover:scale-110">
            4
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Page Not Found
        </h1>

        <p className="text-gray-300 mb-8 leading-relaxed">
          Looks like this page went on a coffee break and forgot to come back!
          Let's get you back on track.
        </p>

        <div className="space-y-4">
          <a
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            🏠 Take Me Home
          </a>

          <div className="flex justify-center space-x-6 text-sm">
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-1 text-gray-300 hover:text-white underline transition-colors"
            >
              <span>←</span>
              <span>Go Back</span>
            </button>
            <a
              href="/products"
              className="flex items-center space-x-1 text-gray-300 hover:text-white underline transition-colors"
            >
              <span>🛍️</span>
              <span>Browse Products</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Network status component
const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowNotification(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!showNotification && isOnline) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 text-center py-3 text-sm font-medium transition-all duration-500 ${
        isOnline
          ? "bg-green-600 text-white transform translate-y-0"
          : "bg-red-600 text-white transform translate-y-0"
      } ${!showNotification && isOnline ? "transform -translate-y-full" : ""}`}
    >
      <div className="flex items-center justify-center space-x-2">
        <span>{isOnline ? "🟢" : "🔴"}</span>
        <span>
          {isOnline
            ? "Connection restored!"
            : "You're currently offline. Some features may be limited."}
        </span>
      </div>
    </div>
  );
};

// Performance monitor (development only)
const PerformanceMonitor = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Monitor Core Web Vitals
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            console.log(`🚀 Performance: ${entry.name}`, entry);
          });
        });

        observer.observe({
          entryTypes: ["navigation", "paint", "largest-contentful-paint"],
        });
      }
    }
  }, []);

  return null;
};

// Main App Component
function App() {
  const [appReady, setAppReady] = useState(false);

  // App initialization
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Preload critical resources
        const preloadImages = [
          "/assets/ananya.jpg",
          "/assets/leadership-course.jpg",
          "/assets/brand-tshirt.jpg",
          "/assets/rahul.jpg",
          "/assets/priya.jpg",
        ];

        // Create preload promises
        const imagePromises = preloadImages.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Don't fail app if image fails
            img.src = src;

            // Also add preload link to document head
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = src;
            document.head.appendChild(link);
          });
        });

        // Wait for critical resources
        await Promise.allSettled(imagePromises);

        // Simulate minimum loading time for smooth UX
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setAppReady(true);
      } catch (error) {
        console.error("App initialization error:", error);
        setAppReady(true); // Don't block app if preloading fails
      }
    };

    initializeApp();
  }, []);

  if (!appReady) {
    return <LoadingSpinner />;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          {/* Network status notification */}
          <NetworkStatus />

          {/* Performance monitoring (dev only) */}
          <PerformanceMonitor />

          <Suspense fallback={<LoadingSpinner />}>
            {/* Navbar with error handling */}
            <Navbar />

            {/* Scroll to top on route change */}
            <ScrollToTop />

            {/* Main content area with page transitions */}
            <div className="pt-20 min-h-screen">
              <PageTransition>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/auth" element={<LoginSignup />} />
                    <Route path="/get-started" element={<GetStarted />} />
                    {/* Catch-all route for 404 */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </PageTransition>
            </div>

            {/* Footer with error handling */}
            <Footer />
          </Suspense>
          {/* Back to top button with scroll progress */}
          <BackToTopButton />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
