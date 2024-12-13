import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Lola Maharani Saputri",
    email: "lolamaharani@gmail.com",
    phone: "082222223567",
    address: "Jl. Bahagia, Surabaya, Indonesia",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

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

    // Reset password fields
    setPasswordData({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    toast.success("Password berhasil diubah!");
  };

  const handleLogout = () => {
    toast.info("Anda telah logout", {
      onClose: () => {
        localStorage.removeItem("token");
        navigate("/login");
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-pooppins relative">
      <Navbar />

      {/* Custom Toast Container */}
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

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex items-center justify-center flex-col">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-28 h-28 rounded-full mb-4 transition-transform hover:scale-105"
            />
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
            <div className="mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 
                transition-all hover:bg-blue-600 active:scale-95"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Batal" : "Edit"}
              </button>
              {isEditing && (
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded 
                  transition-all hover:bg-green-600 active:scale-95"
                  onClick={handleSaveProfile}
                >
                  Simpan
                </button>
              )}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded ml-2
                transition-all hover:bg-red-600 active:scale-95"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-700">
              Informasi Akun
            </h3>
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Nama"
                />
                <input
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="phone"
                  value={editedUser.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Nomor Telepon"
                />
                <input
                  type="text"
                  name="address"
                  value={editedUser.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  placeholder="Alamat"
                />
              </div>
            ) : (
              <>
                <p className="mt-2">
                  <strong>Nama:</strong> {user.name}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Nomor Telepon:</strong> {user.phone}
                </p>
                <p>
                  <strong>Alamat:</strong> {user.address}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Change Password Section */}
        <div className="bg-gray-50 shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-green-700">
            Ubah Password
          </h3>
          <form className="space-y-4">
            <input
              type="password"
              name="oldPassword"
              value={passwordData.oldPassword}
              onChange={handlePasswordChange}
              placeholder="Kata Sandi Lama"
              className="w-full p-3 border rounded"
            />
            <input
              type="password"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
              placeholder="Kata Sandi Baru"
              className="w-full p-3 border rounded"
            />
            <input
              type="password"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Konfirmasi Kata Sandi"
              className="w-full p-3 border rounded"
            />
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleChangePassword}
                className="bg-green-500 text-white px-4 py-2 rounded 
                transition-all hover:bg-green-600 active:scale-95"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
