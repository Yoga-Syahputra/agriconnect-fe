import { useState, useRef } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Pencil, Trash2, Plus, Search, X } from "lucide-react";
import Sidebar from "../components/Dashboard/Sidebar";

const ArticleManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([
    {
      article_id: 1,
      title: "Tidak Ada Kata Terlambat untuk Mencoba",
      description:
        "Kisah seorang petani yang menginspirasi dari daerah pedesaan di Indonesia.",
      image: "src/assets/img/Article/featured.png",
      created_at: "2024-10-01",
    },
    {
      article_id: 2,
      title: "Bertani 101",
      description: "Cara menanam sayuran secara efektif.",
      image: "src/assets/img/Article/veggies.png",
      created_at: "2024-10-01",
    },
    {
      article_id: 3,
      title: "Kekeringan Adalah Tantangan Bagi Petani",
      description: "Ketakutan terbesar petani saat musim panas.",
      image: "src/assets/img/Article/drought.png",
      created_at: "2024-10-01",
    },
  ]);
  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const fileInputRef = useRef(null);

  const handleCreateArticle = () => {
    const newId = articles.length + 1;
    const newArticleData = {
      ...newArticle,
      article_id: newId,
      created_at: new Date().toISOString(),
    };
    setArticles([newArticleData, ...articles]);
    setNewArticle({ title: "", description: "", image: null });
    setIsDialogOpen(false);
    toast.success("Article created successfully");
  };

  const handleUpdateArticle = () => {
    setArticles(
      articles.map((article) =>
        article.article_id === selectedArticle.article_id
          ? { ...selectedArticle, ...newArticle }
          : article
      )
    );
    setNewArticle({ title: "", description: "", image: null });
    setIsDialogOpen(false);
    setIsEditMode(false);
    setSelectedArticle(null);
    toast.success("Article updated successfully");
  };

  const handleDeleteArticle = (articleId) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      setArticles(
        articles.filter((article) => article.article_id !== articleId)
      );
      toast.success("Article deleted successfully");
    }
  };

  const handleEditClick = (article) => {
    setSelectedArticle(article);
    setNewArticle({
      title: article.title,
      description: article.description,
      image: article.image,
    });
    setIsEditMode(true);
    setIsDialogOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewArticle({
        ...newArticle,
        image: URL.createObjectURL(file), 
      });
    }
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Kelola Artikel
          </h1>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="relative flex-grow mr-4">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              <button
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                onClick={() => {
                  setIsDialogOpen(true);
                  setIsEditMode(false);
                  setNewArticle({ title: "", description: "", image: null });
                }}
              >
                <Plus className="mr-2" size={20} />
                Artikel Baru
              </button>
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 bg-white shadow-md rounded-lg">
              <p className="text-gray-500">No articles found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.article_id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(article.created_at).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <button
                        className="flex items-center text-blue-500 hover:text-blue-600"
                        onClick={() => handleEditClick(article)}
                      >
                        <Pencil size={16} className="mr-2" />
                        Edit
                      </button>
                      <button
                        className="flex items-center text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteArticle(article.article_id)}
                      >
                        <Trash2 size={16} className="mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {isDialogOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
              <div className="bg-gray-100 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {isEditMode ? "Edit Article" : "New Article"}
                </h2>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <input
                  type="text"
                  placeholder="Title"
                  value={newArticle.title}
                  onChange={(e) =>
                    setNewArticle({ ...newArticle, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Description"
                  value={newArticle.description}
                  onChange={(e) =>
                    setNewArticle({
                      ...newArticle,
                      description: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 h-32 resize-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="mb-4">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="w-full file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
                {newArticle.image && (
                  <div className="mb-4">
                    <img
                      src={newArticle.image}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-md"
                    />
                  </div>
                )}
                <div className="flex justify-end space-x-4">
                  <button
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={
                      isEditMode ? handleUpdateArticle : handleCreateArticle
                    }
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default ArticleManagement;
