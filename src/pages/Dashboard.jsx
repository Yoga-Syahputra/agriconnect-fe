// Pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";
import Chart from "../components/Dashboard/Chart";
import FilterButton from "../components/Dashboard/FilterButton";
import JobCard from "../components/Dashboard/JobCard";
import { Users, Briefcase, Building2, Eye } from "lucide-react";

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const chartData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 45 },
    { name: "Mar", value: 35 },
    { name: "Apr", value: 55 },
    { name: "May", value: 40 },
    { name: "Jun", value: 60 },
  ];

  const stats = [
    {
      title: "Total Users",
      value: "2.5k",
      percentage: 12.5,
      icon: <Users className="text-[#4F772D]" />,
    },
    {
      title: "Total Jobs",
      value: "1.2k",
      percentage: 8.2,
      icon: <Briefcase className="text-[#4F772D]" />,
    },
    {
      title: "Companies",
      value: "350",
      percentage: -2.4,
      icon: <Building2 className="text-[#4F772D]" />,
    },
    {
      title: "Page Views",
      value: "12.5k",
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
                <Chart data={chartData} title="User Growth" />
                <Chart data={chartData} title="Job Postings" />
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

                <div className="space-y-4">
                  {[1, 2, 3].map((job) => (
                    <JobCard
                      key={job}
                      title="Agricultural Engineer"
                      company="FarmTech Solutions"
                      location="Majalengka, Indonesia"
                      type="Full Time"
                      logo="/api/placeholder/48/48"
                    />
                  ))}
                </div>

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
