import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import JobCard from "../components/Dashboard/JobCard";

const jobs = [
  {
    id: 1,
    title: "Project Manager - Hidroponik Sawi",
    company: "PT. Agro Farmaka Nusantara",
    location: "Majalengka, Indonesia",
    type: "Full Time",
    logo: "../src/assets/img/Companies/agro.png",
  },
  {
    id: 2,
    title: "Junior Software Engineer",
    company: "PT. Yafo Agro Indonesia",
    location: "Jakarta, Indonesia",
    type: "Full Time",
    logo: "../src/assets/img/Companies/yafo agro.png",
  },
  // Tambahkan pekerjaan lainnya di sini
];

const JobPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />

        {/* Main Content */}
        <div
          className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
            isSidebarCollapsed ? "ml-20" : "ml-64"
          }`}
        >
          <main className="flex-grow p-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6">Daftar Pekerjaan</h2>

              <div className="grid grid-cols-1 gap-6">
                {jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    type={job.type}
                    logo={job.logo}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
