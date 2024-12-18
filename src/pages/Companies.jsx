import CompanyCard from "../components/CompanyCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search } from "lucide-react";

const Companies = () => {
  const companies = [
    {
      logo: "/src/assets/img/Companies/agro.png",
      name: "Peternakan Hidroponik",
      category: "Peternakan Hidroponik",
      location: "Majalengka",
    },
    {
      logo: "/src/assets/img/Companies/yafo agro.png",
      name: "YAFO AGRO INDONESIA",
      category: "Perkebunan Kelapa Sawit",
      location: "Tembilahan",
    },
    {
      logo: "/src/assets/img/Companies/jiva.png",
      name: "PT. JIVA AGRICULTURE INDONESIA",
      category: "Agriculture",
      location: "Batam",
    },
    {
      logo: "/src/assets/img/Companies/agrikultur.png",
      name: "PT. AGRIKULTUR GEMILANG",
      category: "Peternakan Hidroponik",
      location: "Semarang",
    },
    {
      logo: "/src/assets/img/Companies/andira agro.png",
      name: "PT. ANDIRA AGRO",
      category: "Perkebunan Sawit",
      location: "Nusa Tenggara Timur",
    },
    {
      logo: "/src/assets/img/Companies/austindo.png",
      name: "PT. AUSTINDO NUSANTARA JAYA",
      category: "Perkebunan Kelapa Sawit",
      location: "Kalimantan Selatan",
    },
    {
      logo: "/src/assets/img/Companies/bisi.png",
      name: "PT. BISI INTERNASIONAL",
      category: "Pupuk dan Pestisida",
      location: "Jatiasih",
    },
    {
      logo: "/src/assets/img/Companies/eagle high.png",
      name: "PT. EAGLE HIGH PLANTATIONS",
      category: "Perkebunan",
      location: "Lampung",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <div
        className="w-full h-64 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/src/assets/img/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-2xl px-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Ingin Cari Perusahaan Bidang Agraris?"
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white/90 backdrop-blur-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Temukan Perusahaan Impianmu!</h1>
          <p className="text-gray-600">
            Bersama Agri <span className="text-yellow-500">Connect</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Companies;
