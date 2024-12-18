import { useState } from "react";
import {
  Search,
  MoreVertical,
  Phone,
  Pencil,
  ChevronDown,
  Download,
  Upload,
  Trash2,
  Filter,
} from "lucide-react";
import Sidebar from "../components/Dashboard/Sidebar";

const Worker = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [selectedWorkers, setSelectedWorkers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null);

  const workers = [
    {
      id: 1,
      nama: "Lola Maharani Saputri",
      email: "lolamaharani@gmail.com",
      status: "aktif",
      avatar: "/src/assets/img/Team/Lola Maharani.png",
      lokasi: "Surabaya, Jawa Timur",
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "aktif":
        return "bg-green-100 text-green-800 border border-green-200";
      case "nonaktif":
        return "bg-red-100 text-red-800 border border-red-200";
      case "menunggu":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedWorkers(workers.map((w) => w.id));
    } else {
      setSelectedWorkers([]);
    }
  };

  const handleSelectWorker = (id) => {
    if (selectedWorkers.includes(id)) {
      setSelectedWorkers(selectedWorkers.filter((w) => w !== id));
    } else {
      setSelectedWorkers([...selectedWorkers, id]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden">
        <div className="bg-white m-6">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-xl font-semibold">
                  Manajemen Admin / Pekerja
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                  Kelola semua pekerja dalam satu tempat
                </p>
              </div>
              <select
                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="">Filter Tanggal</option>
                <option value="today">Hari Ini</option>
                <option value="week">Minggu Ini</option>
                <option value="month">Bulan Ini</option>
              </select>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="relative flex-1 w-full">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Cari pekerja berdasarkan nama atau email..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <button
                    onClick={() =>
                      setShowDropdown(
                        showDropdown === "filter" ? null : "filter"
                      )
                    }
                    className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <Filter size={18} />
                    <span>Filter</span>
                    <ChevronDown size={16} />
                  </button>
                  {showDropdown === "filter" && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                        Status: Aktif
                      </button>
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                        Status: Nonaktif
                      </button>
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                        Status: Menunggu
                      </button>
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                        Lokasi
                      </button>
                    </div>
                  )}
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Download size={18} />
                  <span>Ekspor</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  <Upload size={18} />
                  <span>Impor Data</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 pr-4 font-medium text-gray-500">
                      Nama Pekerja
                    </th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">
                      Email
                    </th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">
                      Lokasi
                    </th>
                    <th className="text-left py-4 pl-4 font-medium text-gray-500">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workers.map((worker) => (
                    <tr
                      key={worker.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-4 pr-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={worker.avatar}
                            alt={worker.nama}
                            className="w-8 h-8 rounded-full border border-gray-200"
                          />
                          <span className="font-medium">{worker.nama}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-500">
                        {worker.email}
                      </td>
                      <td className="py-4 px-4 text-gray-500">
                        {worker.lokasi}
                      </td>
                      <td className="py-4 pl-4">
                        <div className="flex items-center space-x-2">
                          <button
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Hubungi"
                          >
                            <Phone size={18} className="text-green-600" />
                          </button>
                          <button
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Pencil size={18} className="text-green-600" />
                          </button>
                          <button
                            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Hapus"
                          >
                            <Trash2 size={18} className="text-red-500" />
                          </button>
                          <div className="relative">
                            <button
                              onClick={() =>
                                setShowDropdown(
                                  showDropdown === worker.id ? null : worker.id
                                )
                              }
                              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                              <MoreVertical
                                size={18}
                                className="text-gray-400"
                              />
                            </button>
                            {showDropdown === worker.id && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                                <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                                  Lihat Detail
                                </button>
                                <button className="w-full px-4 py-2 text-left hover:bg-gray-50">
                                  Ubah Status
                                </button>
                                <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-50">
                                  Nonaktifkan
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>Menampilkan 1 dari 1 pekerja</span>
              <button className="px-4 py-2 text-green-700 hover:bg-green-50 rounded-lg transition-colors">
                Lihat Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Worker;
