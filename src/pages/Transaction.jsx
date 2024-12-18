import { useState, useEffect } from "react";
import Sidebar from "../components/Dashboard/Sidebar";

const Transaction = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Ambil data transaksi dari API dan perbarui state
    const ambilTransaksi = async () => {
      try {
        const respons = await fetch("");
        const data = await respons.json();
        setTransaksi(data);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil transaksi:", error);
      }
    };
    ambilTransaksi();
  }, []);

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
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-700">Transaksi</h1>
              </div>

              {/* Transaction Table */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-600 text-sm">
                      <th className="px-4 py-3 text-left">ID Pembayaran</th>
                      <th className="px-4 py-3 text-left">Fitur</th>
                      <th className="px-4 py-3 text-right">Jumlah</th>
                      <th className="px-4 py-3 text-left">Tanggal</th>
                      <th className="px-4 py-3 text-left">Status</th>
                      <th className="px-4 py-3 text-left">Email</th>
                      <th className="px-4 py-3 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transaksi.length > 0 ? (
                      transaksi.map((t) => (
                        <tr key={t.idPembayaran} className="border-b">
                          <td className="px-4 py-3">{t.idPembayaran}</td>
                          <td className="px-4 py-3">{t.flur}</td>
                          <td className="px-4 py-3 text-right">
                            {t.jumlah.toLocaleString()}
                          </td>
                          <td className="px-4 py-3">{t.tanggal}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                t.status === "Berhasil"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-red-100 text-red-600"
                              }`}
                            >
                              {t.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">{t.email}</td>
                          <td className="px-4 py-3 text-center">
                            <button className="text-blue-500 hover:text-blue-700">
                              Lihat
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="7"
                          className="px-4 py-6 text-center text-gray-500"
                        >
                          Tidak ada data transaksi.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
