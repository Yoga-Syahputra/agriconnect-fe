import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ArticleDetail = () => {
  const { id } = useParams();

  // Data artikel (seharusnya berasal dari backend)
  const articles = [
    {
      id: "1",
      tag: "Inspirasi",
      title:
        "Tidak Ada Kata Terlambat untuk Mencoba: Kisah Seorang Petani yang Menginspirasi dari Daerah Pedesaan di Indonesia",
      readTime: "10 Menit",
      content: `Lahir dan dibesarkan di sebuah desa terpencil di Bangka Belitung, Yusman, seorang petani yang sehari-hari bercocok tanam berhasil menjadi orang pertama yang menemukan varietas padi baru yang mampu tumbuh di lahan gambut dengan produktivitas yang jauh lebih tinggi dibandingkan varietas padi sebelumnya.

Perjalanan panjang Yusman dimulai dari keterbatasan yang ia hadapi sebagai petani di wilayah lahan gambut yang sulit ditanami. Selama bertahun-tahun, ia mengamati karakteristik tanah, pola pertumbuhan tanaman, dan melakukan eksperimen sederhana di ladangnya sendiri. Dengan modal nekat dan keberanian untuk mencoba, Yusman mulai melakukan persilangan dan seleksi benih padi secara mandiri.

Proses pengembangannya tidak mudah. Ia menghabiskan puluhan tahun untuk menyeleksi dan mengembangkan varietas padi yang dapat bertahan di tanah gambut yang asam dan miskin unsur hara. Bertentangan dengan anggapan para ahli pertanian yang meragukan kemungkinan tanaman padi dapat tumbuh subur di lahan tersebut, Yusman terus bekerja keras tanpa mengenal putus asa.

Hasilnya memang di luar dugaan. Varietas padi yang ia kembangkan mampu menghasilkan produktivitas hingga 7,2 ton per hektare, padahal sebelumnya lahan gambut hanya mampu menghasilkan kurang dari 3 ton per hektare. Keberhasilannya ini tidak hanya mengubah nasib keluarganya, tetapi juga memberikan secercah harapan bagi petani-petani lain di wilayah lahan marginal.

Pemerintah daerah akhirnya mengakui karya spektakuler Yusman. Balai Penelitian Pertanian setempat melakukan serangkaian uji coba dan memverifikasi keberhasilan varietas padi temuan Yusman. Hasilnya, varietas tersebut kini resmi didaftarkan dan disebarluaskan kepada petani-petani di wilayah Bangka Belitung dan sekitarnya.

Yusman sendiri tidak pernah menyangka bahwa kerja kerasnya akan membawa perubahan begitu besar. "Saya hanya ingin membuktikan bahwa lahan gambut bisa produktif," ujarnya dengan sederhana. Kini, ia kerap diundang untuk berbagi pengalaman di berbagai forum pertanian dan menjadi inspirasi bagi petani-petani muda.

Keberhasilannya mengubah pandangan bahwa petani tradisional tidak mampu berinovasi. Yusman membuktikan bahwa pengetahuan lokal dan ketekunan dapat menghasilkan terobosan ilmiah yang signifikan. Para akademisi pertanian kini mulai melirik metode empiris yang dikembangkannya, mengakui bahwa inovasi tidak selalu datang dari laboratorium canggih.

Saat ini, Yusman tidak hanya dikenal sebagai petani biasa, tetapi juga sebagai penemu varietas padi unggul. Kontribusinya telah membantu meningkatkan ketahanan pangan di wilayahnya dan memberikan harapan baru bagi pengolahan lahan gambut yang selama ini dianggap tidak produktif.

Kisah Yusman mengingatkan kita bahwa inovasi sejati datang dari mereka yang tidak takut untuk terus mencoba, bahkan ketika semua orang menganggap hal itu mustahil. Ia adalah bukti nyata bahwa passion dan dedikasi dapat mengubah keterbatasan menjadi peluang yang luar biasa.`,
      image: "/src/assets/img/Article/Featured.png",
      readTime: "10 Menit",
    },
    {
      id: "2",
      title: "Bertani 101",
      content: "Panduan efektif menanam sayuran...",
    },
  ];

  // Cari artikel berdasarkan ID
  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-r from-green-800 to-green-400">
        <Navbar />
      </div>
      <main className="flex-grow container mx-auto py-12 px-4 font-poppins">
        <div className="space-y-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto rounded-xl"
          />
          <div className="inline-flex items-center p-2 bg-gray-100 rounded-[15px] w-fit">
            <span className="bg-gray-500 text-white px-4 py-1.5 rounded-full text-sm font-medium">
              {article.tag}
            </span>
            <span className="text-gray-600 text-sm px-4">
              {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl font-bold">{article.title}</h1>
          <div className="whitespace-pre-line text-justify">
            {article.content}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
