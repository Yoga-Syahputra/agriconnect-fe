import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Halaman tidak ditemukan</p>
        <Link
          to="/"
          className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800"
        >
          Kembali ke Beranda
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
