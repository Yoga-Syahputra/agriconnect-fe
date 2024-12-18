import { useEffect, useState } from "react";
import { Lock, User, Bell, Shield } from "lucide-react";
import Sidebar from "../components/Dashboard/Sidebar";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminSettings = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone_number: "",
    role: "",
  });
  const [settings, setSettings] = useState({
    notifications: true,
    twoFactorAuth: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const userId = "12";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.users.getProfile(userId);
        console.log("Fetched Profile Data:", response.data);

        if (response.data.role !== "admin") {
          toast.error("Akses ditolak. Halaman ini hanya untuk admin.");
          return;
        }

        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Gagal memuat profil pengguna.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleUpdateProfile = async () => {
    setIsSaving(true);
    try {
      const response = await api.users.updateProfile(userId, userData);
      console.log("Profile Update Response:", response.data);

      toast.success("Profil berhasil diperbarui!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Gagal memperbarui profil.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateSettings = async () => {
    setIsSaving(true);
    try {
      const response = await api.users.updateSettings(userId, settings);
      console.log("Settings Update Response:", response.data);

      toast.success("Pengaturan berhasil diperbarui!");
    } catch (error) {
      console.error("Error updating settings:", error);
      toast.error("Gagal memperbarui pengaturan.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        <p className="ml-4 text-gray-700">Memuat data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          setIsCollapsed={setIsSidebarCollapsed}
        />
        <main
          className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${
            isSidebarCollapsed ? "ml-20" : "ml-64"
          } p-6 space-y-8`}
        >
          {/* Section: Profile Settings */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <header className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <User className="mr-3 text-blue-500" size={28} />
                Pengaturan Profil
              </h2>
              {isEditing ? (
                <button
                  onClick={handleUpdateProfile}
                  className={`px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-400 ${
                    isSaving ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={isSaving}
                >
                  {isSaving ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                >
                  Edit Profil
                </button>
              )}
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Nama", value: "name", type: "text" },
                {
                  label: "Email",
                  value: "email",
                  type: "email",
                  disabled: true,
                },
                { label: "Nomor Telepon", value: "phone_number", type: "tel" },
                { label: "Peran", value: "role", type: "text", disabled: true },
              ].map((field, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={userData[field.value] || ""}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        [field.value]: e.target.value,
                      })
                    }
                    disabled={!isEditing || field.disabled}
                    className={`w-full p-2 border border-gray-300 rounded-lg ${
                      field.disabled
                        ? "bg-gray-100"
                        : "focus:outline-none focus:ring-2 focus:ring-blue-400"
                    }`}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Section: Security and Preferences */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <header className="flex items-center mb-6">
              <Shield className="mr-3 text-green-500" size={28} />
              <h2 className="text-2xl font-semibold text-gray-800">
                Keamanan & Preferensi
              </h2>
            </header>
            <div className="space-y-6">
              {[
                {
                  icon: <Bell className="mr-3 text-yellow-500" size={24} />,
                  label: "Notifikasi",
                  description: "Terima pembaruan dan pemberitahuan penting",
                  value: "notifications",
                },
                {
                  icon: <Lock className="mr-3 text-purple-500" size={24} />,
                  label: "Autentikasi Dua Faktor",
                  description: "Tambahkan lapisan keamanan ekstra ke akun Anda",
                  value: "twoFactorAuth",
                },
              ].map((setting, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center">
                    {setting.icon}
                    <div>
                      <p className="font-semibold text-gray-700">
                        {setting.label}
                      </p>
                      <p className="text-sm text-gray-500">
                        {setting.description}
                      </p>
                    </div>
                  </div>
                  <label className="relative inline-block w-12 h-7">
                    <input
                      type="checkbox"
                      checked={settings[setting.value]}
                      onChange={() =>
                        setSettings((prev) => ({
                          ...prev,
                          [setting.value]: !prev[setting.value],
                        }))
                      }
                      className="sr-only"
                      disabled={isSaving}
                    />
                    <span
                      className={`block w-full h-full rounded-full transition-all duration-300 ${
                        settings[setting.value] ? "bg-blue-600" : "bg-gray-200"
                      }`}
                    ></span>
                  </label>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminSettings;
