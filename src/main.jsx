import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import global styles
import "./index.css";

// Error Boundary Component for better error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100">
          <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg text-center">
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              We encountered an unexpected error. Please refresh the page to try
              again.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Refresh Page
              </button>
              <details className="text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  Technical Details
                </summary>
                <pre className="mt-2 p-3 bg-gray-50 rounded text-xs text-gray-600 overflow-auto max-h-32">
                  {this.state.error && this.state.error.toString()}
                </pre>
              </details>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Loading Component with animated skeleton
const AppLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
    <div className="text-center">
      {/* Animated Logo/Brand */}
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white font-bold text-2xl">B</span>
        </div>
      </div>

      {/* Loading Animation */}
      <div className="flex justify-center space-x-2 mb-4">
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-300"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-600"></div>
      </div>

      <p className="text-gray-600 font-medium">Loading your experience...</p>

      {/* Progress bar */}
      <div className="w-64 mx-auto mt-4 bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full animate-pulse"
          style={{ width: "60%" }}
        ></div>
      </div>
    </div>
  </div>
);

// Performance monitoring (for hackathon demos)
const performanceLogger = () => {
  if (typeof window !== "undefined" && window.performance) {
    // Log performance metrics
    window.addEventListener("load", () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType("navigation")[0];
        console.log("🚀 Performance Metrics:", {
          "Page Load Time": `${Math.round(
            perfData.loadEventEnd - perfData.fetchStart
          )}ms`,
          "DOM Content Loaded": `${Math.round(
            perfData.domContentLoadedEventEnd - perfData.fetchStart
          )}ms`,
          "First Paint":
            performance
              .getEntriesByType("paint")
              .find((entry) => entry.name === "first-paint")?.startTime ||
            "N/A",
        });
      }, 0);
    });
  }
};

// Initialize performance monitoring
performanceLogger();

// Development mode helpers
if (process.env.NODE_ENV === "development") {
  // Enable React Developer Tools
  if (typeof window !== "undefined") {
    window.React = React;
  }

  // Console welcome message for judges/reviewers
  console.log(`🎉 Welcome to BrandName`);
}

// App initialization with enhanced features
const initializeApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // Check if root element exists
  if (!root._internalRoot) {
    console.error(
      'Root element not found! Make sure you have <div id="root"></div> in your HTML'
    );
    return;
  }

  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <Suspense fallback={<AppLoader />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </React.StrictMode>
  );
};

// Initialize the application
try {
  initializeApp();
} catch (error) {
  console.error("Failed to initialize application:", error);

  // Fallback: Show basic error message
  document.getElementById("root").innerHTML = `
    <div style="
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      font-family: system-ui, -apple-system, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-align: center;
      padding: 2rem;
    ">
      <div>
        <h1 style="font-size: 2rem; margin-bottom: 1rem;">Application Failed to Load</h1>
        <p style="margin-bottom: 2rem;">Please check the console for technical details.</p>
        <button 
          onclick="window.location.reload()" 
          style="
            padding: 12px 24px; 
            background: rgba(255,255,255,0.2); 
            border: 2px solid white; 
            border-radius: 8px; 
            color: white; 
            cursor: pointer;
            font-weight: bold;
          "
        >
          Retry
        </button>
      </div>
    </div>
  `;
}

// Service Worker registration (optional, for PWA features)
if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
