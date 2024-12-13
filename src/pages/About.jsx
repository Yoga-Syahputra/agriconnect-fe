import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const teamMembers = [
    { name: "Danyi Aprizal", role: "Hustler", img: "/path/to/image1.png" },
    {
      name: "Alhuwaryist Royhan Apriyanto",
      role: "Hipster",
      img: "/path/to/image2.png",
    },
    {
      name: "Mohd. Fiqri Raekhal",
      role: "Hipster",
      img: "/path/to/image3.png",
    },
    {
      name: "Lola Maharani Saputri",
      role: "Hipster",
      img: "/path/to/image4.png",
    },
    {
      name: "Yoga Syahputra",
      role: "Hacker & Scrum Master",
      img: "/path/to/image5.png",
    },
    { name: "Tiara Sonya", role: "Hacker", img: "/path/to/image6.png" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-poppins">
      <Navbar />
      <main className="flex-grow container mx-auto py-12 px-6 md:px-12">
        {/* Hero Section */}
        <div
          className="relative text-center bg-cover bg-center py-20 rounded-lg shadow-md"
          style={{ backgroundImage: "url('/path/to/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-white mb-6">
              Temukan Perusahaan Impianmu!
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Solusi lengkap untuk pencari kerja di industri agraris.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition duration-300">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 mt-12">
          <h2 className="text-4xl font-extrabold mb-6 text-center text-green-600">
            Tentang Kami
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-8">
            AgriConnect adalah platform pencari kerja yang dirancang khusus
            untuk industri perkebunan dan pertanian...
          </p>
        </div>

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
              <p className="text-gray-700">Memungkinkan pemilik usaha...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Konsultasi Virtual & Real-Time
              </h3>
              <p className="text-gray-700">Menawarkan solusi teknologi...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Peningkatan Produktivitas
              </h3>
              <p className="text-gray-700">Meningkatkan pengelolaan lahan...</p>
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
              <p>Peluncuran AgriConnect...</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 font-bold text-2xl mr-4">
                2025
              </span>
              <p>Kemitraan Pertama dengan Perusahaan Agribisnis...</p>
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
                className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
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
