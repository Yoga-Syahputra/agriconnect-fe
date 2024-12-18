import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-6 md:px-12 font-poppins">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-green-600">
            Syarat dan Ketentuan AgriConnect
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
            Dengan menggunakan platform kami, Anda menyetujui syarat dan
            ketentuan berikut. Harap membaca dengan seksama.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Penggunaan Platform
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 bg-gray-100 p-4 rounded-md">
              <li>
                Anda setuju untuk menggunakan platform ini hanya untuk tujuan
                yang sah sesuai hukum.
              </li>
              <li>
                Anda dilarang menggunakan platform untuk kegiatan yang melanggar
                hukum atau merugikan pihak lain.
              </li>
              <li>
                Informasi yang Anda unggah harus akurat dan tidak menyesatkan.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Hak dan Kewajiban Pengguna
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Sebagai pengguna AgriConnect, Anda memiliki hak dan kewajiban
              berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 bg-gray-100 p-4 rounded-md">
              <li>Menjaga kerahasiaan informasi akun Anda.</li>
              <li>
                Tidak membagikan akses akun Anda kepada pihak lain tanpa izin.
              </li>
              <li>
                Memberikan informasi yang benar, lengkap, dan terkini saat
                menggunakan layanan kami.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Hak Kami
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-md">
              Kami berhak untuk menangguhkan atau menghentikan akses Anda jika
              kami menemukan pelanggaran terhadap syarat dan ketentuan ini.
              Selain itu, kami dapat mengubah atau memperbarui ketentuan ini
              kapan saja dengan pemberitahuan sebelumnya.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Tanggung Jawab
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-md">
              Kami tidak bertanggung jawab atas kerugian yang timbul dari
              penggunaan platform ini. Namun, kami akan melakukan yang terbaik
              untuk memastikan layanan berjalan dengan baik.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Penyelesaian Sengketa
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-md">
              Jika terjadi sengketa, kami mendorong penyelesaian secara damai
              melalui diskusi. Jika tidak berhasil, sengketa akan diselesaikan
              melalui jalur hukum yang berlaku.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Hubungi Kami
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Jika Anda memiliki pertanyaan atau membutuhkan klarifikasi terkait
              syarat dan ketentuan ini, silakan hubungi kami di{" "}
              <a
                href="mailto:support@agriconnect.com"
                className="text-green-600 hover:underline"
              >
                support@agriconnect.com
              </a>
              .
            </p>
          </section>
        </div>
        <p className="text-lg mt-12 text-gray-600 text-center">
          Terima kasih telah menggunakan AgriConnect! Kami menghargai
          kepercayaan Anda.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
