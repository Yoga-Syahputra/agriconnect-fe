import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";
import Chart from "../components/Dashboard/Chart";
import FilterButton from "../components/Dashboard/FilterButton";
import JobCard from "../components/Dashboard/JobCard";
import { Users, Briefcase, Building2, Eye } from "lucide-react";

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
];

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const chartData = [
    { name: "Jul", value: 0 },
    { name: "Aug", value: 0 },
    { name: "Sept", value: 0 },
    { name: "Okt", value: 1 },
    { name: "Nov", value: 2 },
    { name: "Des", value: 3 },
  ];

  const stats = [
    {
      title: "Total Pengguna",
      value: "3",
      percentage: 12.5,
      icon: <Users className="text-[#4F772D]" />,
    },
    {
      title: "Total Pekerjaan",
      value: "10",
      percentage: 8.2,
      icon: <Briefcase className="text-[#4F772D]" />,
    },
    {
      title: "Perusahaan",
      value: "8",
      percentage: -2.4,
      icon: <Building2 className="text-[#4F772D]" />,
    },
    {
      title: "Kunjungan",
      value: "5",
      percentage: 15.8,
      icon: <Eye className="text-[#4F772D]" />,
    },
  ];

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
          {/* Main Content Area */}
          <main className="flex-grow p-8">
            <div className="max-w-7xl mx-auto">
              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <Chart data={chartData} title="Perkembangan Pengguna" />
                <Chart data={chartData} title="Postingan Pekerjaan" />
              </div>

              {/* Recent Jobs Section */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <h3 className="text-lg font-semibold">Pekerjaan Terbaru</h3>
                  <div className="flex flex-wrap gap-2">
                    <FilterButton
                      label="All"
                      active={activeFilter === "all"}
                      onClick={() => setActiveFilter("all")}
                    />
                    <FilterButton
                      label="Full Time"
                      active={activeFilter === "fulltime"}
                      onClick={() => setActiveFilter("fulltime")}
                    />
                    <FilterButton
                      label="Part Time"
                      active={activeFilter === "parttime"}
                      onClick={() => setActiveFilter("parttime")}
                    />
                  </div>
                </div>

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

                <button className="w-full mt-6 py-2 text-[#4F772D] font-medium hover:bg-[#4F772D]/5 rounded-lg transition-colors">
                  Lihat Semua Pekerjaan
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
