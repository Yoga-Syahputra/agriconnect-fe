import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "./../assets/img/login-bg.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
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
            Lupa Password? <br />
            <span className="font-semibold text-[#FFD700]">
              Kami Siap Membantu.
            </span>
          </h1>
          <p className="text-lg text-gray-300">
            Jangan khawatir! Masukkan email Anda dan kami akan mengirimkan
            instruksi untuk mengatur ulang kata sandi Anda.
          </p>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white p-12">
        <div className="w-4/5 max-w-md bg-yellow-500 rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl text-center font-bold text-[#132A13] mb-2">
            Reset Kata Sandi
          </h2>
          <p className="text-[#132A13] text-center mb-8">
            Masukkan email yang terdaftar untuk reset kata sandi
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-[#132A13] transition"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#132A13] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#0F1D0F] transition-transform transform hover:scale-105"
              >
                Kirim Link Reset
              </button>

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="text-[#132A13] font-semibold hover:underline"
                >
                  Kembali ke halaman login
                </Link>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="bg-green-100 text-green-800 p-4 rounded-lg">
                <p className="font-medium">Email Terkirim!</p>
                <p className="text-sm mt-2">
                  Silakan cek inbox email Anda untuk instruksi selanjutnya.
                </p>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-[#132A13] text-white py-3 rounded-lg font-semibold text-lg hover:bg-[#0F1D0F] transition-transform transform hover:scale-105"
              >
                Kirim Ulang Email
              </button>

              <div className="mt-6">
                <Link
                  to="/login"
                  className="text-[#132A13] font-semibold hover:underline"
                >
                  Kembali ke halaman login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
