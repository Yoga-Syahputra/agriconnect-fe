import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Hubungi Kami</h1>
        {/* Tambahkan form kontak di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
