import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SecondaryButton from "../components/SecondaryButton";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Building2, Globe, Users, MessageCircleQuestion } from "lucide-react";

const companyDetails = {
  "PT. AGRIKULTUR GEMILANG": {
    description:
      "Peternakan Hidroponik yang berbasis di Semarang, mengintegrasikan teknologi modern dengan praktik pertanian berkelanjutan.",
    location: "Semarang",
    established: "2015",
    employees: "300+",
    website: "www.agrofarma.com",
    culture:
      "Kami menjunjung tinggi inovasi dan keberlanjutan di sektor pertanian, dengan fokus pada pengembangan teknologi hidroponik yang ramah lingkungan dan efisien.",
    jobs: [
      {
        title: "Agronomist",
        type: "Full-time",
        location: "Semarang",
        description:
          "Bergabunglah dengan tim penelitian kami untuk merevolusi praktik pertanian hidroponik.",
      },
      {
        title: "Teknisi Hidroponik",
        type: "Part-time",
        location: "Semarang",
        description:
          "Bantu kami mengoperasikan dan memelihara sistem hidroponik canggih kami.",
      },
    ],
    reviews: [
      {
        user: "Budi Santoso",
        comment:
          "Lingkungan kerja yang mendukung dan penuh inovasi. Setiap hari adalah kesempatan untuk belajar dan berkembang.",
        rating: 4.5,
      },
      {
        user: "Ayu Kartika",
        comment:
          "Sangat fokus pada inovasi teknologi. Di sini, kami tidak hanya bekerja, tetapi juga berkontribusi pada masa depan pertanian Indonesia.",
        rating: 5,
      },
    ],
    additionalInfo: {
      vision:
        "Menjadi pemimpin dalam transformasi pertanian melalui solusi hidroponik berkelanjutan yang mengintegrasikan teknologi terkini.",
      impact:
        "Mengurangi ketergantungan pada lahan tradisional, meningkatkan efisiensi produksi pangan, dan mendukung ketahanan pangan nasional.",
    },
  },
  "YAFO AGRO INDONESIA": {
    description:
      "Perkebunan Kelapa Sawit terkemuka di Tembilahan, berkomitmen pada praktik berkelanjutan dan pemberdayaan masyarakat lokal.",
    location: "Tembilahan",
    established: "2012",
    employees: "1000+",
    website: "www.yafoagro.com",
    culture:
      "Kami menitikberatkan kolaborasi tim untuk hasil yang optimal, dengan penekanan pada pengembangan sumber daya manusia dan praktik lingkungan yang bertanggung jawab.",
    jobs: [
      {
        title: "Operator Mesin",
        type: "Full-time",
        location: "Tembilahan",
        description:
          "Peran kunci dalam mengoperasikan teknologi canggih di perkebunan kami.",
      },
      {
        title: "Manager Perkebunan",
        type: "Full-time",
        location: "Jakarta",
        description:
          "Pemimpin strategis untuk mengembangkan dan mengelola operasi perkebunan berkelanjutan.",
      },
    ],
    reviews: [
      {
        user: "Dewi Rahayu",
        comment:
          "Manajemen perusahaan yang sangat profesional dengan fokus pada pengembangan karyawan dan praktik berkelanjutan.",
        rating: 4.7,
      },
      {
        user: "Ahmad Fauzan",
        comment:
          "Sarana dan prasarana yang memadai, dengan lingkungan kerja yang mendukung pertumbuhan profesional.",
        rating: 4.5,
      },
    ],
    additionalInfo: {
      vision:
        "Menjadi model perkebunan kelapa sawit berkelanjutan yang mengintegrasikan kesejahteraan lingkungan dan masyarakat.",
      impact:
        "Berkontribusi pada pembangunan ekonomi daerah sambil menjaga keseimbangan ekosistem dan mendukung masyarakat lokal.",
    },
  },
};

const CompanyDetail = () => {
  const { companyName } = useParams();
  const company = companyDetails[companyName];

  if (!company) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-16 text-center">
          <h1 className="text-2xl font-bold text-red-500">
            Perusahaan tidak ditemukan!
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 font-poppins">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            {companyName}
          </h1>
          <p className="text-lg text-gray-600 mt-4">{company.description}</p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 bg-white font-poppins">
        <div className="container mx-auto px-6 lg:px-20">
          <Tabs>
            <TabList className="flex space-x-4 border-b-2 border-blue-200 pb-2">
              <Tab className="flex items-center text-gray-600 px-4 py-2 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                <Building2 className="mr-2" /> Tentang
              </Tab>
              <Tab className="flex items-center text-gray-600 px-4 py-2 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                <Globe className="mr-2" /> Kehidupan & Budaya
              </Tab>
              <Tab className="flex items-center text-gray-600 px-4 py-2 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                <Users className="mr-2" /> Pekerjaan
              </Tab>
              <Tab className="flex items-center text-gray-600 px-4 py-2 hover:text-blue-500 cursor-pointer transition-colors duration-300">
                <MessageCircleQuestion className="mr-2" /> Ulasan
              </Tab>
            </TabList>

            {/* Tentang */}
            <TabPanel>
              <div className="py-6">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
                  Informasi Perusahaan
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-green-600">
                      Detail Perusahaan
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>
                        <strong>Lokasi:</strong> {company.location}
                      </li>
                      <li>
                        <strong>Tahun Berdiri:</strong> {company.established}
                      </li>
                      <li>
                        <strong>Jumlah Karyawan:</strong> {company.employees}
                      </li>
                      <li>
                        <strong>Website:</strong>
                        <a
                          href={`https://${company.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:underline ml-2"
                        >
                          {company.website}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-3 text-green-600">
                      Visi & Dampak
                    </h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Visi:</strong> {company.additionalInfo.vision}
                    </p>
                    <p className="text-gray-700">
                      <strong>Dampak:</strong> {company.additionalInfo.impact}
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* Kehidupan & Budaya */}
            <TabPanel>
              <div className="py-6">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
                  Kehidupan & Budaya Perusahaan
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 leading-relaxed">
                    {company.culture}
                  </p>
                  <div className="mt-6 border-t pt-4 border-green-200">
                    <h3 className="text-xl font-semibold mb-3 text-green-600">
                      Komitmen Kami
                    </h3>
                    <ul className="text-gray-700 space-y-2 list-disc pl-5">
                      <li>Pengembangan berkelanjutan bagi setiap karyawan</li>
                      <li>Lingkungan kerja yang inklusif dan mendukung</li>
                      <li>Inovasi sebagai inti dari setiap proses bisnis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* Pekerjaan */}
            <TabPanel>
              <div className="py-6">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
                  Pekerjaan Tersedia
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {company.jobs.map((job, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-green-600">
                        {job.title}
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Tipe:</strong> {job.type}
                      </p>
                      <p className="text-gray-700 mb-2">
                        <strong>Lokasi:</strong> {job.location}
                      </p>
                      <p className="text-gray-700">
                        <strong>Deskripsi:</strong> {job.description}
                      </p>
                      <SecondaryButton className="mt-4">
                        Lamar Sekarang
                      </SecondaryButton>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>

            {/* Ulasan */}
            <TabPanel>
              <div className="py-6">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
                  Testimoni Karyawan
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {company.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-blue-50 p-6 rounded-lg shadow-md"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                          {review.user.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-600">
                            {review.user}
                          </h3>
                          <div className="text-yellow-500">
                            {"★".repeat(Math.round(review.rating))}
                            {"☆".repeat(5 - Math.round(review.rating))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 italic">"{review.comment}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CompanyDetail;
