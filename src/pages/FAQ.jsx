import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins">
      <Navbar />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>
        <div className="space-y-6">
          <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Apa itu AgriConnect?</h2>
            <p>
              AgriConnect adalah platform pencari kerja yang dirancang khusus
              untuk industri perkebunan dan pertanian. Tujuan utamanya adalah
              membantu pemilik usaha menemukan tenaga kerja yang tepat dan
              mempermudah pencari kerja dalam sektor ini menemukan peluang yang
              sesuai.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Mengapa AgriConnect penting?
            </h2>
            <p>
              Banyak lulusan pertanian yang bekerja di luar bidang studinya
              karena terbatasnya informasi lowongan pekerjaan di sektor
              pertanian/perkebunan. Di sisi lain, kebutuhan tenaga kerja sektor
              ini di Indonesia sangat tinggi, mengingat luasnya lahan pertanian
              dan perkebunan yang tersebar di seluruh negeri.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Apa saja fitur utama di AgriConnect?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Direct Action ke Tenaga Ahli:</strong> Memungkinkan
                pemilik usaha terhubung langsung dengan ahli
                pertanian/perkebunan yang sesuai kebutuhan.
              </li>
              <li>
                <strong>Konsultasi Virtual & Real-Time:</strong> Fitur ini
                membantu pemilik usaha untuk berkonsultasi dengan ahli dalam
                mengatasi masalah secara cepat dan efektif.
              </li>
              <li>
                <strong>Peningkatan Produktivitas:</strong> Menyediakan solusi
                teknologi dan praktis untuk optimalisasi pengelolaan lahan,
                irigasi, dan pengendalian hama.
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Bagaimana cara saya bergabung dengan AgriConnect?
            </h2>
            <p>
              Anda dapat mendaftar di platform AgriConnect sebagai pemilik usaha
              untuk mencari tenaga kerja atau sebagai pencari kerja yang mencari
              peluang di sektor pertanian dan perkebunan.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Bagaimana AgriConnect membantu pemilik usaha?
            </h2>
            <p>
              AgriConnect membantu pemilik usaha dengan menyediakan akses
              langsung ke tenaga ahli, mempermudah rekrutmen, dan memberikan
              solusi teknologi untuk meningkatkan efisiensi dan produktivitas
              operasional.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Apakah AgriConnect gratis digunakan?
            </h2>
            <p>
              Untuk informasi lengkap mengenai biaya atau paket layanan yang
              tersedia, silakan kunjungi halaman "Pricing" di platform kami atau
              hubungi tim kami secara langsung.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
