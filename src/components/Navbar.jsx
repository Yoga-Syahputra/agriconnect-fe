import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-[#285628] via-[#4F772D] to-[#132A13] font-poppins">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20 ">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="src/assets/img/logo-icon.png"
                alt="AgriConnect Logo"
                className="h-5 w-5"
              />
              <span className="text-2xl font-bold text-white">
                Agri<span className="text-yellow-300">Connect</span>
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-yellow-300 ${
                  isActive("/") ? "text-yellow-300" : "text-white"
                }`}
              >
                Beranda
              </Link>
              <Link
                to="/job-listing"
                className={`text-sm font-medium transition-colors hover:text-yellow-300 ${
                  isActive("/job-listing") ? "text-yellow-300" : "text-white"
                }`}
              >
                Daftar Pekerjaan
              </Link>
              <Link
                to="/companies"
                className={`text-sm font-medium transition-colors hover:text-yellow-300 ${
                  isActive("/companies") ? "text-yellow-300" : "text-white"
                }`}
              >
                Perusahaan
              </Link>
              <Link
                to="/articles"
                className={`text-sm font-medium transition-colors hover:text-yellow-300 ${
                  isActive("/articles") ? "text-yellow-300" : "text-white"
                }`}
              >
                Artikel
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors hover:text-yellow-300 ${
                  isActive("/about") ? "text-yellow-300" : "text-white"
                }`}
              >
                Tentang
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm font-medium text-white hover:text-yellow-300 transition-colors"
              >
                Masuk
              </Link>
              <Link
                to="/register"
                className="bg-[#4F772D] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#3d5c23] transition-colors border border-white/20"
              >
                Daftar
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-white hover:text-yellow-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute w-full bg-[#72AB41] md:hidden transition-transform duration-200 ease-in-out transform ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Home
          </Link>
          <Link
            to="/job-listing"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Job Listing
          </Link>
          <Link
            to="/companies"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Companies
          </Link>
          <Link
            to="/articles"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Articles
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            About
          </Link>
          <Link
            to="/login"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-3 py-2 rounded-md text-base font-medium bg-[#4F772D] text-white hover:bg-[#3d5c23] border border-white/20"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
