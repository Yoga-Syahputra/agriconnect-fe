import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Danyi Aprizal",
      role: "Hustler",
      img: "/src/assets/img/Team/Danyi Aprizal.png",
    },
    {
      name: "Alhuwaryist Royhan Apriyanto",
      role: "Hipster",
      img: "/src/assets/img/Team/Alhuwayrist Royhan.png",
    },
    {
      name: "Mohd. Fiqri Raekhal",
      role: "Hipster",
      img: "/src/assets/img/Team/Fiqri Raekhal.png",
    },
    {
      name: "Lola Maharani Saputri",
      role: "Hipster",
      img: "/src/assets/img/Team/Lola Maharani.png",
    },
    {
      name: "Yoga Syahputra",
      role: "Hacker & Scrum Master",
      img: "/src/assets/img/Team/Yoga Syahputra.png",
    },
    {
      name: "Tiara Sonya",
      role: "Hacker",
      img: "/src/assets/img/Team/Tiara Sonya.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-poppins">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-6 md:px-12">
        {/* Hero Section */}
        <div
          className="relative text-center bg-cover bg-center py-20 rounded-lg shadow-md"
          style={{ backgroundImage: "url('/src/assets/img/AgriConnect.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6">
              Temukan Perusahaan Impianmu!
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Kami adalah jembatan antara talenta berbakat dan peluang besar di
              industri agraris.
            </p>
            <button
              className="bg-white text-green-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-500 transition-colors"
              onClick={() => {
                document
                  .getElementById("about-section")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        {/* About Section */}
        <section
          id="about-section"
          className="bg-white shadow-lg rounded-lg p-8 md:p-12 mt-12"
        >
          <h2 className="text-4xl font-extrabold mb-6 text-center text-green-600">
            Tentang Kami
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            AgriConnect adalah platform inovatif yang dirancang untuk
            mempertemukan pencari kerja dan pemberi kerja di sektor agraris.
            Misi kami adalah mendukung perkembangan industri perkebunan dan
            pertanian dengan menyediakan akses ke talenta berbakat, peluang
            pelatihan, dan teknologi terkini. Kami percaya bahwa dengan
            kolaborasi yang tepat, kita bisa membangun masa depan agraris yang
            lebih cerah.
          </p>
        </section>

        {/* Why Choose AgriConnect */}
        <section className="bg-green-50 p-8 rounded-lg mt-12">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
            Kenapa Memilih AgriConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Akses Langsung ke Tenaga Ahli
              </h3>
              <p className="text-gray-700">
                Memungkinkan pemilik usaha untuk menemukan tenaga kerja terbaik
                yang sesuai dengan kebutuhan mereka secara cepat dan efisien.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Konsultasi Virtual & Real-Time
              </h3>
              <p className="text-gray-700">
                Memberikan solusi teknologi terkini untuk komunikasi langsung
                antara kandidat dan perusahaan melalui platform kami.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Peningkatan Produktivitas
              </h3>
              <p className="text-gray-700">
                Meningkatkan efisiensi pengelolaan lahan dan hasil pertanian
                dengan mendukung inovasi dan pelatihan berkelanjutan.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
            Sejarah Kami
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <span className="text-green-600 font-bold text-2xl mr-4">
                2024
              </span>
              <p>
                Peluncuran AgriConnect dengan visi untuk merevolusi industri
                agraris.
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 font-bold text-2xl mr-4">
                2025
              </span>
              <p>
                Kemitraan pertama dengan perusahaan agribisnis besar untuk
                menciptakan dampak luas.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-green-600"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
