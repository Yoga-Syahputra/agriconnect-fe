import { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const JobMarket = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [jobs] = useState([
    { id: 1, title: "Petani Organik", location: "Bali", category: "Pertanian" },
    {
      id: 2,
      title: "Ahli Agronomi",
      location: "Bandung",
      category: "Teknologi Pertanian",
    },
    {
      id: 3,
      title: "Pengelola Kebun",
      location: "Yogyakarta",
      category: "Hortikultura",
    },
  ]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase()) &&
      job.category.toLowerCase().includes(category.toLowerCase())
  );

  const scrollToSection = useRef(null);

  const handleGetStartedClick = () => {
    scrollToSection.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen font-poppins bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#285628] to-[#4F772D] text-white text-center py-20">
        <h1 className="text-4xl font-bold">
          Rekrut Lebih Efisien Dengan AgriConnect Job Marketplace
        </h1>
        <p className="mt-4 text-lg">
          Cepat, mudah diakses, dan dapat diandalkan untuk menemukan kandidat
          tepat.
        </p>
        <button
          onClick={handleGetStartedClick}
          className="mt-6 bg-white text-[#4F772D] px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Mulai Gratis
        </button>
      </header>

      {/* Statistik */}
      <section className="container mx-auto py-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-4xl font-bold text-[#4F772D]">5 Juta+</h2>
            <p className="text-gray-600">Kandidat Siap Interview</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-4xl font-bold text-[#4F772D]">33 Ribu</h2>
            <p className="text-gray-600">Lamaran Setiap Hari</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-4xl font-bold text-[#4F772D]">Hemat 50%</h2>
            <p className="text-gray-600">Waktu Perekrutan</p>
          </div>
        </div>
      </section>

      {/* Fitur Utama */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Fitur Utama AgriConnect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#4F772D]">Cari CV</h3>
            <p className="text-gray-600 mt-2">
              Akses lebih cepat dari 5 juta profil kandidat berkualitas.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#4F772D]">CSV Download</h3>
            <p className="text-gray-600 mt-2">
              Ekspor data kandidat untuk mempermudah seleksi.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#4F772D]">
              Hemat Waktu & Biaya
            </h3>
            <p className="text-gray-600 mt-2">
              Bayar satu kali untuk langganan 6 bulan.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#4F772D]">
              Loker Aktif Fleksibel
            </h3>
            <p className="text-gray-600 mt-2">
              Pasang loker aktif sesuai kebutuhan perusahaan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Paket Berlangganan */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Pilih Paket Berlangganan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Basic</h3>
            <p className="text-gray-600 mb-4">5 Slot Loker Aktif</p>
            <p className="text-gray-600 mb-4">10 Cari CV / bulan</p>
            <button className="bg-[#4F772D] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3d5c23] transition">
              Pilih Paket
            </button>
          </div>
          <div className="p-6 bg-yellow-300 shadow-md rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Premium</h3>
            <p className="text-gray-600 mb-4">20 Slot Loker Aktif</p>
            <p className="text-gray-600 mb-4">50 Cari CV / bulan</p>
            <button className="bg-[#4F772D] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3d5c23] transition">
              Pilih Paket
            </button>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Unlimited</h3>
            <p className="text-gray-600 mb-4">Unlimited Slot Loker</p>
            <p className="text-gray-600 mb-4">Cari CV Tanpa Batas</p>
            <button className="bg-[#4F772D] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3d5c23] transition">
              Pilih Paket
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobMarket;
