import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import {
  LayoutDashboard,
  CircleDollarSign,
  ClipboardList,
  BookOpen,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaMoneyBill } from "react-icons/fa6";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { title: "Overview", icon: <LayoutDashboard size={20} />, path: "/admin" },
    {
      title: "Pekerja",
      icon: <CircleDollarSign size={20} />,
      path: "/admin/workers",
    },
    { title: "Pekerjaan", icon: <ClipboardList size={20} />, path: "/admin/job" },
    { title: "Transaksi", icon: <FaMoneyBill size={20} />, path: "/admin/transaction" },
    {
      title: "Konten Artikel",
      icon: <BookOpen size={20} />,
      path: "/admin/articles",
    },
    {
      title: "Pengaturan",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div
      className={`h-screen fixed left-0 top-0 bg-gradient-to-b from-[#285628] to-[#132A13]
      text-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } flex flex-col`}
    >
      {/* Header/Logo */}
      <div className="flex items-center p-4 h-20">
        {!isCollapsed && (
          <Link to="/admin" className="flex items-center space-x-2">
            <img
              src="src/assets/img/logo-icon.png"
              alt="AgriConnect Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">
              Agri<span className="text-yellow-300">Connect</span>
            </span>
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-2 rounded-full hover:bg-white/10 transition-colors ${
            isCollapsed ? "mx-auto" : "ml-auto"
          }`}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                  isActive(item.path)
                    ? "bg-white/20 text-yellow-300"
                    : "hover:bg-white/10"
                }`}
              >
                {item.icon}
                {!isCollapsed && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout} 
          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-red-300 hover:bg-white/10 transition-colors w-full"
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Keluar</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
