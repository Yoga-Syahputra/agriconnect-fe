import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "./../assets/img/register-bg.png";
import api from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "farmer",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = (password) => password.length >= 8;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Kata sandi tidak cocok!");
      return;
    }
    if (!validatePassword(formData.password)) {
      toast.error("Kata sandi harus memiliki minimal 8 karakter!");
      return;
    }

    try {
      const response = await api.auth.register(formData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Pendaftaran gagal");
    }
  };

  return (
    <div className="relative flex h-screen font-poppins">
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white text-[#132A13] py-2 px-4 rounded-full shadow-md z-20 font-semibold text-sm lg:text-lg transition-transform transform hover:bg-[#f0f0f0] hover:shadow-lg hover:scale-105"
      >
        AGRICONNECT
      </Link>

      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-start pl-10 pr-8 py-8 text-white">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-snug">
            Jangkau Lebih Cepat,
            <br />
            <span className="font-semibold text-[#FFD700]">Bersama Kami.</span>
          </h1>
          <p className="text-md lg:text-lg text-gray-300">
            Bergabunglah dengan platform kami dan berdayakan bisnis Anda untuk
            terhubung dengan pelanggan secara instan.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white p-4 lg:p-6">
        <div className="w-full max-w-sm bg-yellow-500 rounded-3xl p-4 lg:p-6 shadow-lg">
          <h2 className="text-xl lg:text-2xl text-center font-bold text-[#132A13] mb-2">
            Buat Akun Baru
          </h2>
          <p className="text-sm lg:text-md text-[#132A13] text-center mb-4 lg:mb-6">
            Gratis dan Mudah
          </p>

          <form className="space-y-3 lg:space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama"
                  className="w-full px-2 py-2 border border-gray-300 rounded-md bg-white focus:ring focus:ring-[#132A13] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email/Nomor
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-2 py-2 border border-gray-300 rounded-md bg-white focus:ring focus:ring-[#132A13] transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Kata Sandi"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md bg-white focus:ring focus:ring-[#132A13] transition"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Konfirmasi
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Konfirmasi"
                    className="w-full px-2 py-2 border border-gray-300 rounded-md bg-white focus:ring focus:ring-[#132A13] transition"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-2 flex items-center text-gray-600"
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-2 py-2 border border-gray-300 rounded-md bg-white focus:ring focus:ring-[#132A13] transition"
              >
                <option value="farmer">Petani</option>
                <option value="expert">Pakar</option>
                <option value="company">Perusahaan</option>
                <option value="jobSeeker">Pelamar</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#132A13] text-white py-2 rounded-md font-semibold hover:bg-[#0F1D0F] transition-transform transform hover:scale-105"
            >
              Daftar
            </button>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 h-4 w-4 text-[#132A13] rounded"
              />
              <label className="text-sm text-gray-600">
                Saya menyetujui syarat & ketentuan
              </label>
            </div>

            <p className="mt-3 text-center text-sm text-gray-700">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-[#132A13] font-semibold hover:underline"
              >
                Masuk
              </Link>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
