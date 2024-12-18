import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const AuthForm = ({
  type, 
  title,
  subtitle,
  submitText,
  onSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-white p-6">
      <div className="w-full max-w-md bg-yellow-500 rounded-3xl p-6 shadow-lg">
        <h2 className="text-2xl text-center font-bold text-[#132A13] mb-2">
          {title}
        </h2>
        <p className="text-[#132A13] text-center mb-6">{subtitle}</p>

        <form className="space-y-4" onSubmit={onSubmit}>
          {/* Common Inputs */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email atau Nomor Telepon
            </label>
            <input
              type="text"
              placeholder="Masukkan email atau nomor telepon"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-[#132A13] transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Kata Sandi
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan kata sandi"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-[#132A13] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password for Register */}
          {showConfirmPassword && (
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Konfirmasi Kata Sandi
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Konfirmasi kata sandi"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:ring focus:ring-[#132A13] transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#132A13] text-white py-2 rounded-lg font-semibold hover:bg-[#0F1D0F] transition-transform transform hover:scale-105"
          >
            {submitText}
          </button>

          <p className="mt-4 text-center text-gray-700">
            {type === "register" ? (
              <>
                Sudah punya akun?{" "}
                <Link
                  to="/login"
                  className="text-[#132A13] font-semibold hover:underline"
                >
                  Masuk
                </Link>
              </>
            ) : (
              <>
                Belum punya akun?{" "}
                <Link
                  to="/register"
                  className="text-[#132A13] font-semibold hover:underline"
                >
                  Daftar
                </Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
