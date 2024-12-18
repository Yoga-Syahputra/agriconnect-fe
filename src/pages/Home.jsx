import { Link } from "react-router-dom";
import { FaUser, FaFileAlt, FaSearch, FaCheck } from "react-icons/fa";
import { Check } from "lucide-react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import StatsCard from "../components/StatsCard";
import ExpertCard from "../components/ExpertCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const stats = [
    { number: "75+", label: "Ahli Tani", icon: "👨‍🌾" },
    { number: "10+", label: "Perusahaan", icon: "🏢" },
    { number: "10", label: "Lowongan", icon: "📋" },
  ];

  const processSteps = [
    {
      icon: { content: <FaUser />, bg: "#F6BE2C" },
      title: "Buat akun",
      description: "Daftar dan buat akun di platform AgriConnect",
    },
    {
      icon: { content: <FaFileAlt />, bg: "#8BAC3E" },
      title: "Unggah CV/Resume",
      description:
        "Unggah CV atau resume Anda untuk memperluas kesempatan dilihat oleh perusahaan",
    },
    {
      icon: { content: <FaSearch />, bg: "#F6BE2C" },
      title: "Temukan pekerjaan sesuai",
      description:
        "Temukan lowongan kerja yang sesuai dengan keahlian dan minat Anda di sektor pertanian",
    },
    {
      icon: { content: <FaCheck />, bg: "#8BAC3E" },
      title: "Lamar pekerjaan",
      description: "Ajukan lamaran langsung ke perusahaan dengan mudah",
    },
  ];

  const experts = [
    {
      name: "Kevin Smith",
      role: "Ahli Pertanian",
      image: "src/assets/img/Experts/Kevin Smith.png",
    },
    {
      name: "Jessica Brown",
      role: "Spesialis Agrikultur",
      image: "src/assets/img/Experts/Jessica Brown.png",
    },
    {
      name: "David Morris",
      role: "Konsultan Tani",
      image: "src/assets/img/Experts/David Martin.png",
    },
  ];

  const featuredJobs = [
    {
      title: "Pengawas Perkebunan",
      company: "PT Agro Makmur",
      location: "Bandung",
      type: "Full-time",
      image: "/src/assets/img/Featured/farm keeper.png",
    },
    {
      title: "Manajer Produksi",
      company: "Kebun Sayur Indonesia",
      location: "Malang",
      type: "Full-time",
      image: "/src/assets/img/Featured/production manager.jpg",
    },
    {
      title: "Tenaga Ahli Hidroponik",
      company: "Hydro Farm",
      location: "Jakarta",
      type: "Contract",
      image: "/src/assets/img/Featured/hydroponic expert.jpg",
    },
  ];

  const testimonial = {
    image: "/src/assets/img/farmer testimonial.png",
    name: "Matthew J. Werner",
    role: "Senior Consultant",
    rating: 4.5,
    text: "AgriConnect membantu saya dalam mencari ke tempat kerja yang cocok dengan passion saya di bidang pertanian, memperluas jaringan dan mendapatkan pengalaman yang sangat berharga.",
  };

  const companiesData = [
    {
      id: 1,
      name: "PT. AGRO FARMAKA NUSANTARA",
      logo: "/src/assets/img/Companies/agro.png",
      jobCount: 9,
    },
    {
      id: 2,
      name: "PT. ANDIRA AGRO INDONESIA",
      logo: "/src/assets/img/Companies/andira agro.png",
      jobCount: 11,
    },
    {
      id: 3,
      name: "PT. YAFO AGRO INDONESIA",
      logo: "/src/assets/img/Companies/yafo agro.png",
      jobCount: 2,
    },
    {
      id: 4,
      name: "PT. AGRIKULTUR GEMILANG INDONESIA",
      logo: "/src/assets/img/Companies/agrikultur.png",
      jobCount: 2,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/img/hero-bg.png')" }}
        >
          <div className="absolute inset-0">
            <div className="container mx-auto h-full flex flex-col justify-center items-center text-white px-4">
              <h1 className="text-6xl font-bold mb-4">
                Selamat Datang di <span className="text-white">Agri</span>
                <span className="text-yellow-400">Connect</span>
              </h1>
              <p className="text-xl mb-8 max-w-2xl text-center">
                Temukan peluang karir terbaik di industri perkebunan & pertanian
              </p>
              <Link to="/job-listing">
                <button className="bg-white text-green-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors">
                  Cari Pekerjaan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/img/stats-bg.png')" }}
        >
          {/* Stats Section */}
          <div className="bg-transparent py-8 relative z-10 -mt-16 mx-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <StatsCard
                    key={index}
                    icon={stat.icon}
                    number={stat.number}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Career Path Section */}
          <div className="container mx-auto py-16 px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-8">
                  <span className="text-yellow-400">Temukan</span>{" "}
                  <span className="text-white">
                    Jenjang Karirmu Selanjutnya
                  </span>
                </h2>
                <p className="text-white mb-8">
                  AgriConnect hadir sebagai platform yang menghubungkan
                  individu-individu profesional dan tenaga ahli di sektor
                  pertanian dengan peluang karir serta akses ke solusi digital
                  yang inovatif. Kami bertujuan untuk memajukan produktivitas
                  pertanian Indonesia melalui teknologi dan kolaborasi.
                </p>
                <Link to="/companies">
                <PrimaryButton>Tentukan Sekarang</PrimaryButton>
                </Link>
              </div>
              <div className="absolute right-0 md:right-[10%] max-h-[600px] max-w-[400px] transition-transform hover:scale-105">
                <img
                  src="src/assets/img/energetic dude.png"
                  alt="Let's Get Started!"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Application Process Section */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Proses Lamaran <span className="text-green-700">Pekerjaan</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-0 right-0 z-0">
              <div className="w-full h-0.5 border-t-2 border-dotted border-green-700 relative">
                <div className="absolute left-1/4 -top-1.5 w-3 h-3 bg-green-700 rounded-full"></div>
                <div className="absolute left-1/2 -top-1.5 w-3 h-3 bg-green-700 rounded-full"></div>
                <div className="absolute left-3/4 -top-1.5 w-3 h-3 bg-green-700 rounded-full"></div>
              </div>
            </div>
            {/* Process steps */}
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl mb-4 hover:scale-105 transition-transform bg-white"
                  style={{ backgroundColor: step.icon.bg }}
                >
                  {step.icon.content}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Why Choose Section */}
        <div className="container mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="relative h-[500px] hover:scale-105 transition-transform">
              <img
                src="/src/assets/img/scenery.png"
                alt="Agricultural landscape"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-yellow-400 font-medium">
                  Manfaat Platform Kami
                </p>
                <h2 className="text-yellow-400 text-5xl font-bold">
                  Kenapa Memilih{" "}
                  <span className="text-black block">AgriConnect</span>
                </h2>
              </div>

              <p className="text-gray-600">
                AgroConnect menyediakan akses langsung ke tenaga ahli, solusi
                konsultasi fleksibel, dan rekomendasi berbasis informasi yang
                dirancang untuk meningkatkan produktivitas pertanian Anda.
              </p>

              <div className="space-y-6">
                {/* Direct Action */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full bg-green-100">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">
                      Direct Action ke Tenaga Ahli
                    </h3>
                    <p className="text-gray-600">
                      akses langsung ke tenaga ahli pertanian, mendapatkan
                      solusi yang tepat untuk setiap masalah.
                    </p>
                  </div>
                </div>

                {/* Konsultasi Virtual */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full bg-green-100">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">
                      Konsultasi Virtual & Real Time
                    </h3>
                    <p className="text-gray-600">
                      layanan konsultasi yang fleksibel dengan para ahli melalui
                      sesi virtual untuk mendapatkan jawaban instan.
                    </p>
                  </div>
                </div>

                {/* Produktivitas */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-1 rounded-full bg-yellow-100">
                    <Check className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">
                      Peningkatan Produktivitas
                    </h3>
                    <p className="text-gray-600">
                      membantu meningkatkan produktivitas pertanian Anda melalui
                      rekomendasi yang berbasis informasi.
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/faq">
              <PrimaryButton className="mt-4">Temukan Lebih</PrimaryButton>
              </Link>
            </div>
          </div>
        </div>
        );
        {/* Experts Section */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold mb-3 text-center">
            <span className="text-yellow-400">Konsultasi</span>{" "}
            <span className="text-black">dengan Ahli</span>
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Dapatkan Pengetahuan Langsung dari Profesional
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </div>
        </div>
        {/* Featured Jobs Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Pekerjaan <span className="text-green-700">Unggulan</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
                >
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.company}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 flex items-center">
                        <span className="mr-2">📍</span>
                        {job.location}
                      </span>
                      <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <div className="container mx-auto py-16 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Testi<span className="text-green-700">moni</span>
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-bold text-xl">{testimonial.name}</h4>
                <p className="text-sm text-green-700">{testimonial.role}</p>
                <div className="text-yellow-400">
                  {"★".repeat(Math.floor(testimonial.rating))}{" "}
                  {testimonial.rating % 1 !== 0 ? "☆" : ""}
                </div>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
          </div>
          <div className="text-center mt-8">
            <PrimaryButton>Lihat Semua Testimoni</PrimaryButton>
          </div>
        </div>
        {/* Popular Companies */}
        <div
          className="relative py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('src/assets/img/rice field.png')",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="absolute inset-0 bg-black/25" />

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl text-white font-bold mb-12 text-center">
              Perusahaan Populer
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {companiesData.map((company) => (
                <div
                  key={company.id}
                  className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-24 h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="font-bold text-lg mb-4">{company.name}</h3>
                  <div className="text-center mt-4">
                    <SecondaryButton>
                      {" "}
                      {company.jobCount} Pekerjaan Tersedia{" "}
                    </SecondaryButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
