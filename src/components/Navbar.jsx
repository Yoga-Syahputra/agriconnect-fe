import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userInitial, setUserInitial] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      try {
        const tokenData = JSON.parse(atob(token.split(".")[1]));
        const email = tokenData.email || "";
        setUserInitial(email.charAt(0).toUpperCase());
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setShowProfileMenu(false);
    navigate("/");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const AuthButtons = () => {
    if (isAuthenticated) {
      return (
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-300 text-[#285628] font-medium focus:outline-none"
          >
            {userInitial}
          </button>

          {/* Dropdown Menu */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowProfileMenu(false)}
              >
                Profil Saya
              </Link>
              <Link
                to="/admin"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setShowProfileMenu(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Keluar
              </button>
            </div>
          )}
        </div>
      );
    }

    return (
      <>
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
      </>
    );
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && !event.target.closest(".profile-menu")) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfileMenu]);

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-[#285628] via-[#4F772D] to-[#132A13] font-poppins">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
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

            {/* Auth Buttons / User Profile */}
            <div className="hidden md:flex items-center space-x-4 profile-menu">
              <AuthButtons />
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
            Beranda
          </Link>
          <Link
            to="/job-listing"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Daftar Pekerjaan
          </Link>
          <Link
            to="/companies"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Perusahaan
          </Link>
          <Link
            to="/articles"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Artikel
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
          >
            Tentang
          </Link>
          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
              >
                Masuk
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium bg-[#4F772D] text-white hover:bg-[#3d5c23] border border-white/20"
              >
                Daftar
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
              >
                Profil Saya
              </Link>
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 hover:bg-[#4F772D]"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-[#4F772D]"
              >
                Keluar
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
