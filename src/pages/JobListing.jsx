
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobListings from "../components/JobListings";
import JobDetails from "../components/JobDetails";

const jobListingsData = [
  {
    id: 1,
    title: "Project Manager - Hidroponik Sawi",
    company: "PT. Agro Farmaka Nusantara",
    location: "Majalengka",
    postedAt: "1 hari yang lalu",
    logo: "/path-to-company-logo.png",
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
    company: "PT. Teknologi Inovatif",
    location: "Jakarta",
    postedAt: "2 hari yang lalu",
    logo: "/path-to-company-logo2.png",
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
];

const JobListing = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleShowDetails = (jobId) => {
    setSelectedJobId(jobId);
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
            <input
              type="text"
              placeholder="Pekerjaan impianmu?"
              className="p-3 rounded-md bg-white text-gray-800 w-64"
            />
            <input
              type="text"
              placeholder="Klasifikasi pendidikanmu?"
              className="p-3 rounded-md bg-white text-gray-800 w-64"
            />
            <input
              type="text"
              placeholder="Tempat impianmu?"
              className="p-3 rounded-md bg-white text-gray-800 w-64"
            />
          </div>
        </div>
      </div>
      <main className="flex-grow container mx-auto py-8 flex space-x-8">
        <JobListings jobs={jobListingsData} onShowDetails={handleShowDetails} />
        {selectedJob && <JobDetails job={selectedJob} />}
      </main>
      <Footer />
    </div>
  );
};

export default JobListing;
