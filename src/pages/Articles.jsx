import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import TertiaryButton from "../components/TertiaryButton";

const Articles = () => {
  const featuredArticle = {
    tag: "Inspirasi",
    readTime: "10 Menit",
    title:
      "Tidak Ada Kata Terlambat untuk Mencoba: Kisah Seorang Petani yang Menginspirasi dari Daerah Pedesaan di Indonesia",
    description:
      "Lahir dan dibesarkan di sebuah desa terpencil di Bangka Belitung, Yusman, seorang petani yang sehari-hari bercocok tanam berhasil menjadi orang pertama yang...",
    image: "src/assets/img/Article/featured.png",
  };

  const recentArticles = [
    {
      author: "Danyi Aprizal",
      date: "1 Okt 2024",
      title: " Bertani 101: Cara Menanam Sayuran Secara Efektif",
      description:
        "Tinggal di negara tropis bisa berarti dua hal: tumbuh subur selama musim panas atau bertahan hidup selama musim hujan, tapi jangan khawatir...",
      image: "src/assets/img/Article/veggies.png",
    },
    {
      author: "Tiara Sonya",
      date: "1 Okt 2024",
      title: "Kekeringan Adalah Tantangan Bagi Kami Para Petani",
      description:
        "Musim panas tahunan telah tiba, dan bagi seorang petani, hal ini merupakan salah satu ketakutan terbesar bagi hasil panen...",
      image: "src/assets/img/Article/drought.png",
    },
    {
      author: "Lola Maharani",
      date: "1 Okt 2024",
      title: "Memanen Padi Tidak Pernah Semudah Ini, Percayalah!",
      description:
        "Karena teknologi tidak pernah berhenti berkembang di era ini, hampir semua aspek kehidupan menerima dampaknya...",
      image: "src/assets/img/Article/rice.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-green-800 to-green-400">
        <Navbar />
      </div>

      <main className="flex-grow container mx-auto py-12 px-4 font-poppins">
        {/* Featured Article */}
        <div className="bg-gray-50 rounded-xl shadow-sm mb-20">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={featuredArticle.image}
                alt="Featured farmer"
                className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center p-2 bg-gray-100 rounded-[15px] w-fit">
                <span className="bg-gray-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                  {featuredArticle.tag}
                </span>
                <span className="text-gray-600 text-sm px-4">
                  {featuredArticle.readTime}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {featuredArticle.description}
              </p>
              <Link to={`/article/1`}>
                <TertiaryButton className="mt-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Articles Section */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Artikel Terbaru dari Kami
              </h2>
              <p className="text-gray-600">
                Terus Ikuti Perkembangan Pertanian di Indonesia dengan
                AgriConnect!
              </p>
            </div>
            <Link to={`/more-articles`}>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentArticles.map((article, index) => (
              <ArticleCard
                key={index}
                image={article.image}
                title={article.title}
                description={article.description}
                author={article.author}
                date={article.date}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
