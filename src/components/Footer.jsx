import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { GiPlantRoots } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#132A13] to-[#419041] text-white py-12 mt-auto font-poppins">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
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
          <p className="mt-4 text-sm">
            AgriConnect adalah platform inovatif yang dirancang khusus untuk
            menghubungkan pencari kerja dengan peluang pekerjaan di sektor
            pertanian.
          </p>
          <div className="flex space-x-4 mt-6">
            <div className="bg-white text-[#132A13] hover:text-black p-2 rounded-full">
              <FaTwitter className="cursor-pointer" />
            </div>
            <div className="bg-white text-[#132A13] hover:text-blue-400 p-2 rounded-full">
              <FaFacebookF className="cursor-pointer" />
            </div>
            <div className="bg-white text-[#132A13] hover:text-red-500 p-2 rounded-full">
              <FaPinterestP className="cursor-pointer" />
            </div>
            <div className="bg-white text-[#132A13] hover:text-pink-800 p-2 rounded-full">
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline decoration-yellow-300">
            Menu
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <GiPlantRoots className="text-yellow-300" />
              <Link to="/" className="hover:text-yellow-300">
                Beranda
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <GiPlantRoots className="text-yellow-300" />
              <Link to="/job-listing" className="hover:text-yellow-300">
                Daftar Pekerjaan
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <GiPlantRoots className="text-yellow-300" />
              <Link to="/companies" className="hover:text-yellow-300">
                Perusahaan
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <GiPlantRoots className="text-yellow-300" />
              <Link to="/articles" className="hover:text-yellow-300">
                Artikel
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <GiPlantRoots className="text-yellow-300" />
              <Link to="/about" className="hover:text-yellow-300">
                Tentang
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <GiPlantRoots className="text-yellow-300" />
              <Link to="/login" className="hover:text-yellow-300">
                Masuk
              </Link>
            </li>
          </ul>
        </div>

        {/* Job Seeker Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline decoration-yellow-300">
            Pencari Kerja
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Cari lowongan", path: "/Job-listing" },
              { name: "Lihat Profil", path: "/about" },
              { name: "Lokasi Pekerjaan", path: "/companies" },
              { name: "Jelajahi Perusahaan", path: "/jelajahi-perusahaan" },
              { name: "Paling Banyak Dicari", path: "/paling-banyak-dicari" },
              { name: "Lowongan Tersimpan", path: "/lowongan-tersimpan" },
              { name: "Lamaran Pekerjaan", path: "/lamaran-pekerjaan" },
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <GiPlantRoots className="text-yellow-300" />
                <Link to={item.path} className="hover:text-yellow-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4 underline decoration-yellow-300">
            Kontak
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-300" />{" "}
              <span>0821-7900-3688</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-300" />{" "}
              <span>agriconnect@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiMapPin className="text-yellow-300" />{" "}
              <span>Jl. Sri Katon, Majalengka, Jawa Barat, Indonesia</span>
            </li>
          </ul>
          <div className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full px-4 py-2 rounded-l-full text-gray-700 focus:outline-none"
              style={{ borderRadius: "10px 0 0 10px" }}
            />
            <button
              className="bg-[#4F772D] p-3 rounded-r-full hover:bg-[#3d5c23] flex items-center justify-center"
              style={{ borderRadius: "0 10px 10px 0" }}
            >
              <FaPaperPlane className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Updated bottom section with terms and copyright */}
      <div className="container mx-auto px-4 mt-14 ">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <Link to="/terms" className="hover:text-yellow-300">
              Syarat & Ketentuan
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="/privacy" className="hover:text-yellow-300">
              Kebijakan Privasi
            </Link>
          </div>
          <div>
            <p>
              Copyright © 2024{" "}
              <Link to="/" className="font-bold hover:underline">
                <span className="text-white">Agri</span>
                <span className="text-yellow-300">Connect</span>
              </Link>
              , Hak Cipta Dilindungi Undang-Undang.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
