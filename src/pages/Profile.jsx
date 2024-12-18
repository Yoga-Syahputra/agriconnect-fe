import { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SecondaryButton from "../components/SecondaryButton";

const Profile = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          name: "Lola Maharani Saputri",
          email: "lolamaharani@gmail.com",
          phone: "082222223567",
          address: "Jl. Bahagia, Surabaya, Indonesia",
          cv: null,
        };
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Update localStorage whenever the user state changes
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveProfile = () => {
    // Validate inputs before saving
    if (!editedUser.name || !editedUser.email) {
      toast.error("Nama dan Email tidak boleh kosong!");
      return;
    }

    // Save edited user to local storage
    setUser(editedUser);
    setIsEditing(false);
    toast.success("Profil berhasil diperbarui!");
  };

  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Konfirmasi password tidak cocok!");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      toast.warn("Password minimal 6 karakter!");
      return;
    }

    // In a real application, you would handle password change logic here
    toast.success("Password berhasil diubah!");

    // Reset password fields
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type and size
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!allowedTypes.includes(file.type)) {
        toast.error("Hanya file PDF dan Word yang diperbolehkan!");
        return;
      }

      if (file.size > maxSize) {
        toast.error("Ukuran file maksimal 5MB!");
        return;
      }

      // Read file as base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser(prev => ({
          ...prev,
          cv: {
            name: file.name,
            type: file.type,
            data: reader.result
          }
        }));
        toast.success("CV berhasil diunggah!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCVRemove = () => {
    setUser(prev => ({ ...prev, cv: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.info("CV telah dihapus.");
  };

  const handleCVDownload = () => {
    if (user.cv) {
      const link = document.createElement('a');
      link.href = user.cv.data;
      link.download = user.cv.name;
      link.click();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 font-poppins relative">
      <Navbar />

      <ToastContainer
        className="absolute top-4 right-4 z-50"
        toastClassName={(type) =>
          `${
            type === "success"
              ? "bg-green-500"
              : type === "error"
              ? "bg-red-500"
              : type === "warn"
              ? "bg-yellow-500"
              : "bg-blue-500"
          } 
          text-white px-4 py-2 rounded shadow-lg mb-2`
        }
        bodyClassName="toast-body"
        progressClassName="toast-progress"
      />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        {/* Profile Section */}
        <div className="bg-white shadow-2xl rounded-xl p-8 mb-8 transform transition-all hover:scale-[1.02]">
          <div className="flex items-center justify-center flex-col">
            <div className="relative mb-4">
              <img
                src="src/assets/img/Team/Lola Maharani.png"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow-lg 
                transition-transform hover:scale-105"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 text-white p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 mb-4">{user.email}</p>
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded transition-all 
                ${
                  isEditing
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } 
                text-white active:scale-95`}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Batal" : "Edit Profil"}
              </button>
              {isEditing && (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded 
                  transition-all hover:bg-green-600 active:scale-95"
                  onClick={handleSaveProfile}
                >
                  Simpan Perubahan
                </button>
              )}
            </div>
          </div>

          <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Informasi Akun
            </h3>
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Nama Lengkap"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Email Aktif"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Nomor Telepon"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Alamat</label>
                  <textarea
                    name="address"
                    value={editedUser.address}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Alamat Lengkap"
                    rows="3"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong className="text-green-700">Nama:</strong> {user.name}
                </p>
                <p>
                  <strong className="text-green-700">Email:</strong>{" "}
                  {user.email}
                </p>
                <p>
                  <strong className="text-green-700">Nomor Telepon:</strong>{" "}
                  {user.phone}
                </p>
                <p>
                  <strong className="text-green-700">Alamat:</strong>{" "}
                  {user.address}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* CV Upload Section */}
        <div className="bg-white shadow-2xl rounded-xl p-8 mb-8 transform transition-all hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-6 text-green-700">
            Unggah CV
          </h3>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-green-500 rounded-lg p-6 text-center">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleCVUpload}
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="cv-upload"
              />
              {user.cv ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0013.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-700">
                        {user.cv.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {((user.cv.data.length * 0.75) / 1024).toFixed(2)} KB
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCVDownload}
                      className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                      title="Unduh CV"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-9.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={handleCVRemove}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                      title="Hapus CV"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ) : (
                <label
                  htmlFor="cv-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                  <p className="text-gray-600">
                    Klik untuk mengunggah CV (maks. 5MB, PDF/Word)
                  </p>
                </label>
              )}
            </div>
          </div>
        </div>

        {/* Change Password Section */}
        <div className="bg-white shadow-2xl rounded-xl p-8 transform transition-all hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-6 text-green-700">
            Ubah Password
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Kata Sandi Lama
              </label>
              <input
                type="password"
                name="oldPassword"
                value={passwordData.oldPassword}
                onChange={handlePasswordChange}
                placeholder="Masukkan kata sandi lama"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Kata Sandi Baru
              </label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="Minimal 6 karakter"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Konfirmasi Kata Sandi
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Ulangi kata sandi baru"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex justify-end">
              <SecondaryButton
                onClick={handleChangePassword}
                className="bg-green-500 text-white px-6 py-3 rounded-lg 
                transition-all hover:bg-green-600 active:scale-95 shadow-md"
              >
                Simpan Password Baru
              </SecondaryButton>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;