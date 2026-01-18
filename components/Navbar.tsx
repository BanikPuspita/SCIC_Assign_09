"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { User } from "@/lib/auth";
import { getAuthCookie, clearAuthCookie } from "@/lib/cookies";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const authUser = getAuthCookie();
    setUser(authUser);
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    clearAuthCookie();
    setUser(null);
    setIsMenuOpen(false);
  };

  if (isLoading) {
    return <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4">Loading...</nav>;
  }

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
            T
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-blue-200 transition">
            TechHub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className="hover:text-blue-400 transition font-medium" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-400 transition font-medium" href="/items">
            Products
          </Link>
          {user && (
            <Link className="hover:text-blue-400 transition font-medium" href="/add-item">
              Add Product
            </Link>
          )}
        </div>

        {/* User Section */}
        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <>
              <div className="text-right">
                <p className="text-sm text-gray-300">Welcome back</p>
                <p className="font-semibold text-blue-300">{user.name}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition font-medium shadow-md hover:shadow-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              href="/login" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-2 rounded-lg transition font-medium shadow-md hover:shadow-lg"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 p-4 space-y-4">
          <Link href="/" className="block hover:text-blue-400 transition font-medium" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/items" className="block hover:text-blue-400 transition font-medium" onClick={() => setIsMenuOpen(false)}>
            Products
          </Link>
          {user && (
            <Link href="/add-item" className="block hover:text-blue-400 transition font-medium" onClick={() => setIsMenuOpen(false)}>
              Add Product
            </Link>
          )}
          <div className="pt-4 border-t border-slate-700 space-y-2">
            {user ? (
              <>
                <p className="text-sm text-gray-300">Logged in as: {user.name}</p>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
