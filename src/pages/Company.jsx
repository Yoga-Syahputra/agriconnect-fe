import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Company = () => {
  const processSteps = [
    {
      icon: { content: "📝", bg: "#FEEBC8" },
      title: "Daftar Akun",
      description: "Daftar akun di AgriConnect dengan mudah dan cepat.",
    },
    {
      icon: { content: "🏢", bg: "#FED7D7" },
      title: "Buat Profil Perusahaan",
      description:
        "Lengkapi informasi perusahaan Anda untuk mulai memasang lowongan.",
    },
    {
      icon: { content: "📋", bg: "#C6F6D5" },
      title: "Pasang Lowongan",
      description:
        "Publikasikan lowongan kerja Anda dan temukan kandidat terbaik.",
    },
    {
      icon: { content: "✅", bg: "#BEE3F8" },
      title: "Evaluasi Pelamar",
      description:
        "Terima dan evaluasi pelamar untuk menemukan kandidat terbaik.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 font-poppins">
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto flex flex-wrap items-center justify-between px-6 lg:px-20">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
                Pasang Iklan Lowongan Kerja{" "}
                <span className="text-yellow-500">Gratis</span>
              </h1>
              <form className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg shadow-lg">
                <input
                  type="text"
                  placeholder="Nama Depan"
                  className="p-3 border rounded"
                />
                <input
                  type="text"
                  placeholder="Nama Belakang"
                  className="p-3 border rounded"
                />
                <input
                  type="email"
                  placeholder="Email Kerja"
                  className="p-3 border rounded col-span-2"
                />
                <input
                  type="tel"
                  placeholder="+62 Nomor Telepon"
                  className="p-3 border rounded"
                />
                <button className="bg-yellow-500 text-white font-bold py-3 rounded col-span-2 hover:bg-yellow-600">
                  Daftar Sekarang
                </button>
              </form>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src="src/assets/img/Woman.png"
                alt="Professional woman"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center text-3xl mb-4 hover:scale-105 transition-transform bg-white"
                    style={{ backgroundColor: step.icon.bg }}
                  >
                    {step.icon.content}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                value: "75+",
                label: "Talenta Profesional",
              },
              {
                value: "80",
                label: "Perusahaan Menggunakan AgriConnect",
              },
              {
                value: "1200",
                label: "Kandidat Direkrut oleh Perusahaan",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-yellow-300 p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-bold text-[#4F772D] mb-2">
                  {stat.value}
                </h2>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Company;
