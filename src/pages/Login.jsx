import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import backgroundImage from "./../assets/img/login-bg.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex h-screen font-poppins">
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white text-[#132A13] py-2 px-4 rounded-full shadow-md z-20 font-semibold text-lg
          transition-transform transform hover:bg-[#f0f0f0] hover:shadow-lg hover:scale-105"
      >
        AGRICONNECT
      </Link>

      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-10 flex flex-col justify-center items-start pl-16 pr-10 py-8 text-white">
          <h1 className="text-5xl font-extrabold mb-4 leading-snug">
            Jangkau Lebih Cepat, <br />
            <span className="font-semibold text-[#FFD700]">Bersama Kami.</span>
          </h1>
          <p className="text-lg text-gray-300">
            Bergabunglah dengan platform kami dan berdayakan bisnis Anda untuk
            terhubung dengan pelanggan secara instan.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white p-12">
        <div className="w-4/5 max-w-md bg-yellow-500 rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl text-center font-bold text-[#132A13] mb-2">
            Selamat Datang di AgriConnect!
          </h2>
          <p className="text-[#132A13] text-center mb-8">
            Masukkan Data Anda Untuk Masuk
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email atau Kata Sandi
              </label>
              <input
                type="text"
                placeholder="Masukkan email atau kata sandi"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-[#132A13] transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan kata sandi"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-[#132A13] transition"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-[#132A13] rounded"
                />
                <label className="text-gray-600">Ingat saya</label>
              </div>
              <Link
                to="/forgot-password"
                className="text-[#132A13] text-sm font-medium hover:underline"
              >
                Lupa kata sandi?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#132A13] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#0F1D0F] transition-transform transform hover:scale-105"
            >
              Masuk
            </button>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="px-4 text-gray-500">Atau</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex space-x-4">
              <button className="flex items-center justify-center w-1/2 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <img
                  src="src\assets\img\google.png"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-gray-700 font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center w-1/2 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <img
                  src="src\assets\img\apple.png"
                  alt="Apple"
                  className="w-5 h-5 mr-2"
                />
                <span className="text-gray-700 font-medium">Apple</span>
              </button>
            </div>

            <p className="mt-6 text-center text-gray-700">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-[#132A13] font-semibold hover:underline"
              >
                Masuk
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
