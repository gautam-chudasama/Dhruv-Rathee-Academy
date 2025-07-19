import React, { useState, useEffect } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaApple,
  FaUser,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin && form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      setMessage("Please fix the errors below");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      if (isLogin) {
        setMessage("Welcome back! Login successful 🎉");
        setMessageType("success");
      } else {
        setMessage("Account created successfully! Welcome aboard 🚀");
        setMessageType("success");
      }
      setIsLoading(false);
    }, 2000);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      setMessage(`${provider} login successful! 🎉`);
      setMessageType("success");
      setIsLoading(false);
    }, 1500);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage("");
    setMessageType("");
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
  };

  const InputField = ({
    icon: Icon,
    type,
    name,
    placeholder,
    value,
    onChange,
    error,
    showPasswordToggle,
    showPassword,
    onTogglePassword,
  }) => (
    <div className="relative mb-4">
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          name={name}
          type={
            showPasswordToggle ? (showPassword ? "text" : "password") : type
          }
          className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all duration-300 focus:outline-none bg-white/50 backdrop-blur-sm ${
            error
              ? "border-red-400 focus:border-red-500 bg-red-50/50"
              : "border-gray-200 focus:border-purple-500 focus:bg-white"
          } placeholder-gray-400`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition-colors"
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5" />
            ) : (
              <FaEye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
          <FaExclamationCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-12 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Main Container */}
      <div
        className={`relative z-10 w-full max-w-md transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <FaUser className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              {isLogin ? "Welcome Back!" : "Join Us Today!"}
            </h1>
            <p className="text-gray-300 text-sm">
              {isLogin
                ? "Sign in to access your account"
                : "Create your account and start your journey"}
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              type="button"
              onClick={() => handleSocialLogin("Google")}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl transition-all duration-300 text-white font-medium hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaGoogle className="text-red-400" />
              Continue with Google
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin("Apple")}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl transition-all duration-300 text-white font-medium hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaApple className="text-gray-300" />
              Continue with Apple
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-400"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-gray-300">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {!isLogin && (
              <InputField
                icon={FaUser}
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
            )}

            <InputField
              icon={FaEnvelope}
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <InputField
              icon={FaLock}
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
              showPasswordToggle={true}
              showPassword={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
            />

            {!isLogin && (
              <InputField
                icon={FaLock}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                showPasswordToggle={true}
                showPassword={showConfirmPassword}
                onTogglePassword={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              />
            )}

            {/* Remember Me / Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-300">
                  <input type="checkbox" className="mr-2 rounded" />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-purple-300 hover:text-purple-200 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    →
                  </div>
                </>
              )}
            </button>

            {/* Message Display */}
            {message && (
              <div
                className={`p-4 rounded-xl flex items-center gap-2 ${
                  messageType === "success"
                    ? "bg-green-500/20 text-green-200 border border-green-500/30"
                    : "bg-red-500/20 text-red-200 border border-red-500/30"
                }`}
              >
                {messageType === "success" ? (
                  <FaCheckCircle className="w-4 h-4" />
                ) : (
                  <FaExclamationCircle className="w-4 h-4" />
                )}
                <span className="text-sm">{message}</span>
              </div>
            )}
          </div>

          {/* Toggle Mode */}
          <div className="text-center mt-8 text-gray-300">
            <span className="text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              onClick={toggleMode}
              disabled={isLoading}
              className="ml-2 text-purple-300 hover:text-purple-200 font-semibold underline transition-colors disabled:opacity-50"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>

          {/* Terms */}
          {!isLogin && (
            <p className="text-xs text-gray-400 text-center mt-4">
              By creating an account, you agree to our{" "}
              <button className="text-purple-300 hover:text-purple-200 underline">
                Terms of Service
              </button>{" "}
              and{" "}
              <button className="text-purple-300 hover:text-purple-200 underline">
                Privacy Policy
              </button>
            </p>
          )}
        </div>

        {/* Demo Notice */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-300">
              Demo Mode - All actions are simulated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
