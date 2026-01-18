"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateCredentials, getUserFromEmail } from "@/lib/auth";
import { setAuthCookie } from "@/lib/cookies";
import { Toast } from "@/components/Toast";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (validateCredentials(email, password)) {
      const user = getUserFromEmail(email);
      if (user) {
        setAuthCookie(user);
        setShowToast(true);
        setTimeout(() => {
          router.push("/items");
        }, 1000);
      }
    } else {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setEmail("user@example.com");
    setPassword("password123");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {showToast && <Toast message="Login successful! Redirecting..." type="success" duration={2000} />}

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-lg">
              T
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              TechHub
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-300">Sign in to your account to continue shopping</p>
        </div>

        {/* Form Card */}
        <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-2xl shadow-2xl p-8">
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-4 rounded mb-6 flex items-start gap-3">
              <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-600 hover:text-gray-800"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-gray-300"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                Remember me on this device
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-blue-300 disabled:to-blue-300 text-white font-bold py-3 px-4 rounded-lg transition transform hover:scale-105 disabled:scale-100 shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Demo Login Button */}
          <button
            onClick={handleDemoLogin}
            className="w-full mt-4 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3 px-4 rounded-lg transition"
          >
            Use Demo Credentials
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-600">Demo Account</span>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border-l-4 border-blue-500 space-y-3">
            <p className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span className="text-blue-600">📝</span> Demo Login Credentials
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white p-3 rounded">
                <span className="text-sm text-gray-600">Email:</span>
                <code className="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-900">user@example.com</code>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded">
                <span className="text-sm text-gray-600">Password:</span>
                <code className="bg-gray-100 px-3 py-1 rounded font-mono text-sm text-gray-900">password123</code>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> Access exclusive products
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> Add new items to inventory
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✓</span> Manage your profile
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-6 text-gray-300">
          <p className="mb-2">
            Don't have an account?{" "}
            <Link href="/items" className="text-blue-400 hover:text-blue-300 font-semibold">
              Browse as guest
            </Link>
          </p>
          <Link href="/" className="text-blue-400 hover:text-blue-300 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
