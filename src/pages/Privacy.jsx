import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-6 md:px-12">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-green-600">
            Kebijakan Privasi AgriConnect
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center">
            Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda.
            Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan
            melindungi informasi Anda saat menggunakan platform kami.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Informasi yang Kami Kumpulkan
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 bg-gray-100 p-4 rounded-md">
              <li>Informasi pribadi seperti nama, alamat email, dan nomor telepon.</li>
              <li>Data pekerjaan dan pengalaman kerja yang Anda unggah.</li>
              <li>Informasi penggunaan aplikasi, termasuk data analitik.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Penggunaan Informasi
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Kami menggunakan informasi Anda untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 bg-gray-100 p-4 rounded-md">
              <li>Memfasilitasi pencarian kerja dan perekrutan.</li>
              <li>Meningkatkan layanan dan pengalaman pengguna di platform kami.</li>
              <li>Berkomunikasi dengan Anda mengenai peluang kerja dan pembaruan platform.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Keamanan Informasi
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-md">
              Kami mengimplementasikan langkah-langkah keamanan yang ketat untuk melindungi
              informasi Anda dari akses yang tidak sah dan penggunaan yang tidak semestinya.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Hak Anda</h2>
            <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-md">
              Anda memiliki hak untuk mengakses, memperbaiki, atau menghapus informasi pribadi
              yang kami miliki tentang Anda. Untuk melakukan hal ini, silakan hubungi kami.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Perubahan Kebijakan Privasi
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 bg-gray-50 p-4 rounded-md">
              Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Kami akan memberi tahu
              Anda tentang setiap perubahan dengan memposting kebijakan privasi yang diperbarui
              di platform kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Kontak Kami</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi ini,
              jangan ragu untuk menghubungi kami di{" "}
              <a href="mailto:support@agriconnect.com" className="text-green-600 hover:underline">
                support@agriconnect.com
              </a>
              .
            </p>
          </section>
        </div>
        <p className="text-lg mt-12 text-gray-600 text-center">
          Terima kasih telah menggunakan AgriConnect! Kami berkomitmen untuk menjaga privasi Anda.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
