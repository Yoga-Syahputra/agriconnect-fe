import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      try {
        const tokenData = JSON.parse(atob(token.split(".")[1]));
        const role = tokenData.role || "User";
        const formattedRole =
          role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
        setUserRole(formattedRole);
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

  const isActive = (path) => location.pathname === path;

  const AuthButtons = () => {
    if (isAuthenticated) {
      return (
        <div className="relative">
          <div
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center justify-center px-4 py-2 bg-yellow-300 text-[#285628] font-medium rounded-full cursor-pointer"
          >
            {userRole}
          </div>
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
              {userRole === "Pelamar" && (
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Profil Saya
                </Link>
              )}
              {userRole === "Admin" && (
                <Link
                  to="/admin"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setShowProfileMenu(false)}
                >
                  Dashboard
                </Link>
              )}
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

  const NavigationLinks = () => {
    if (userRole === "Perusahaan") {
      return (
        <>
          <Link
            to="/company"
            className={`text-sm font-medium transition-colors hover:text-yellow-300 ${
              isActive("/") ? "text-yellow-300" : "text-white"
            }`}
          >
            Beranda
          </Link>
          <Link
            to="/job-market"
            className={`text-sm font-medium transition-colors hover:text-yellow-300 ${
              isActive("/job-market") ? "text-yellow-300" : "text-white"
            }`}
          >
            Pasar Kerja
          </Link>
          <Link
            to="/articles"
            className={`text-sm font-medium transition-colors hover:text-yellow-300 ${
              isActive("/articles") ? "text-yellow-300" : "text-white"
            }`}
          >
            Artikel
          </Link>
        </>
      );
    }
    return (
      <>
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
      </>
    );
  };

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
            <div className="hidden md:flex items-center space-x-8">
              <NavigationLinks />
            </div>
            <div className="hidden md:flex items-center space-x-4 profile-menu">
              <AuthButtons />
            </div>
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
    </nav>
  );
};

export default Navbar;
