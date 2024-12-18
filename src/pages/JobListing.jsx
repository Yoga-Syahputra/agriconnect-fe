import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobListings from "../components/JobListings";
import JobDetails from "../components/JobDetails";
import { Search, University, Tractor } from "lucide-react";

const jobListingsData = [
  {
    id: 1,
    title: "Project Manager - Hidroponik Sawi",
    company: "PT. Agro Farmaka Nusantara",
    location: "Majalengka",
    postedAt: "1 hari yang lalu",
    logo: "../src/assets/img/Companies/agro.png",
    details: {
      jobType: "Manajemen Proyek (Konstruksi)",
      employmentType: "Fulltime",
      salary: "5.000.000 - 6.000.000",
      responsibilities: [
        "Merencanakan dan mengembangkan proyek hidroponik sawi dari konsep hingga implementasi.",
        "Mengelola anggaran proyek dan sumber daya dengan efisien.",
        "Mengawasi tim dan memastikan kegiatan operasional berjalan lancar.",
      ],
    },
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "PT. Yafo Agro Indonesia",
    location: "Jakarta",
    postedAt: "2 hari yang lalu",
    logo: "../src/assets/img/Companies/yafo agro.png",
    details: {
      jobType: "Teknologi Informasi",
      employmentType: "Fulltime",
      salary: "5.000.000 - 6.000.000",
      responsibilities: [
        "Merancang dan mengembangkan aplikasi perangkat lunak untuk mendukung sistem manajemen proyek hidroponik.",
        "Mengimplementasikan solusi teknologi untuk mengoptimalkan proses tracking dan monitoring proyek pertanian.",
        "Mengembangkan dashboard untuk visualisasi data proyek dan kinerja pertanian hidroponik.",
        "Berkolaborasi dengan tim teknis dan tim pertanian untuk mengintegrasikan solusi perangkat lunak dengan kebutuhan operasional.",
        "Melakukan pengujian dan debugging pada aplikasi yang dikembangkan.",
        "Mendokumentasikan kode dan proses pengembangan perangkat lunak.",
        "Merancang dan memelihara basis data untuk penyimpanan dan manajemen data proyek.",
      ],
    },
  },
];

const JobListing = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);
  const navigate = useNavigate();

  const handleShowDetails = (jobId) => {
    setSelectedJobId(jobId);
  };

  // Check user authentication
  const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  const handleApplyNow = () => {
    if (!isAuthenticated()) {
      navigate("/login");
    } else {
      alert("Anda berhasil melamar pekerjaan!");
    }
  };

  const handleSaveJob = () => {
    if (!isAuthenticated()) {
      navigate("/login");
    } else {
      alert("Lowongan telah disimpan!");
    }
  };

  const selectedJob = jobListingsData.find((job) => job.id === selectedJobId);

  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <div
        className="bg-cover bg-center h-96 relative"
        style={{ backgroundImage: "url('/src/assets/img/hero-bg.png')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center flex-col px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Temukan Pekerjaan Impianmu!
          </h1>
          <div className="flex space-x-4">
            <div className="relative text-black w-60">
              <input
                type="text"
                placeholder="Pekerjaan impianmu?"
                className="px-4 py-3 pl-12 rounded-lg bg-white/90 backdrop-blur-sm w-full"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative text-black w-60">
              <input
                type="text"
                placeholder="Klasifikasi pendidikan"
                className="px-4 py-3 pl-12 rounded-lg bg-white/90 backdrop-blur-sm w-full"
              />
              <University className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="relative text-black w-60">
              <input
                type="text"
                placeholder="Tempat impianmu?"
                className="px-4 py-3 pl-12 rounded-lg bg-white/90 backdrop-blur-sm w-full"
              />
              <Tractor className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <main className="flex-grow container mx-auto py-8 flex space-x-8">
        <JobListings
          jobs={jobListingsData}
          onShowDetails={handleShowDetails}
          onApplyNow={handleApplyNow}
          onSaveJob={handleSaveJob}
        />
        {selectedJob && <JobDetails job={selectedJob} />}
      </main>
      <Footer />
    </div>
  );
};

export default JobListing;
