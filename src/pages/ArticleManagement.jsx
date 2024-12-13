import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import api from "../services/api";
import Sidebar from "../components/Dashboard/Sidebar";

const ArticleManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    title: "",
    description: "", 
    image: null,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fileInputRef = useRef(null);

  // Fetch articles on component mount
  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      const response = await api.articles.getAll();
      setArticles(response.data);
    } catch (error) {
      toast.error("Failed to fetch articles");
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateArticle = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newArticle.title);
      formData.append("description", newArticle.description); // Changed from content to description
      if (newArticle.image) {
        formData.append("image", newArticle.image);
      }

      setIsLoading(true);
      const response = await api.articles.create(formData);
      setArticles([response.data, ...articles]);
      setNewArticle({ title: "", description: "", image: null });
      setIsDialogOpen(false);
      toast.success("Article created successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create article");
      console.error("Error creating article:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateArticle = async () => {
    try {
      const formData = new FormData();
      formData.append("title", newArticle.title);
      formData.append("description", newArticle.description); // Changed from content to description
      if (newArticle.image instanceof File) {
        formData.append("image", newArticle.image);
      } else {
        formData.append("image", newArticle.image || "default_image.png");
      }

      setIsLoading(true);
      const response = await api.articles.update(
        selectedArticle.article_id,
        formData
      );
      setArticles(
        articles.map((article) =>
          article.article_id === selectedArticle.article_id
            ? response.data
            : article
        )
      );
      setNewArticle({ title: "", description: "", image: null });
      setIsDialogOpen(false);
      setIsEditMode(false);
      setSelectedArticle(null);
      toast.success("Article updated successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update article");
      console.error("Error updating article:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteArticle = async (articleId) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      try {
        await api.articles.delete(articleId);
        setArticles(
          articles.filter((article) => article.article_id !== articleId)
        ); // Changed from id to article_id
        toast.success("Article deleted successfully");
      } catch (error) {
        toast.error("Failed to delete article");
        console.error("Error deleting article:", error);
      }
    }
  };

  const handleEditClick = (article) => {
    setSelectedArticle(article);
    setNewArticle({
      title: article.title,
      description: article.description, // Changed from content to description
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
        image: file,
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 ml-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Manage Articles</h1>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {isLoading ? (
          <div className="text-center py-4">Loading articles...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles
              .filter((article) =>
                article.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((article) => (
                <div
                  key={article.article_id} // Changed from id to article_id
                  className="border rounded-lg p-4 shadow hover:shadow-md transition"
                >
                  <h2 className="text-lg font-semibold">{article.title}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    {new Date(article.created_at).toDateString()}{" "}
                    {/* Changed from createdAt to created_at */}
                  </p>
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover mb-2"
                    />
                  )}
                  <p className="text-gray-800 mb-4">{article.description}</p>{" "}
                  {/* Changed from content to description */}
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => handleEditClick(article)}
                      className="px-3 py-1 bg-blue-500 text-white rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteArticle(article.article_id)} // Changed from id to article_id
                      className="px-3 py-1 bg-red-500 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}

        <button
          onClick={() => {
            setIsEditMode(false);
            setNewArticle({ title: "", description: "", image: null }); // Changed from content to description
            setIsDialogOpen(true);
          }}
          className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Add Article
        </button>

        {isDialogOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">
                {isEditMode ? "Edit Article" : "Create New Article"}
              </h2>
              <input
                type="text"
                placeholder="Title"
                value={newArticle.title}
                onChange={(e) =>
                  setNewArticle({ ...newArticle, title: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-md mb-4"
              />
              <textarea
                placeholder="Description" // Changed from Content to Description
                value={newArticle.description}
                onChange={
                  (e) =>
                    setNewArticle({
                      ...newArticle,
                      description: e.target.value,
                    }) // Changed from content to description
                }
                className="w-full px-4 py-2 border rounded-md mb-4"
                rows={4}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="mb-4"
              />
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => {
                    setIsDialogOpen(false);
                    setIsEditMode(false);
                    setSelectedArticle(null);
                    setNewArticle({ title: "", description: "", image: null });
                  }}
                  className="px-4 py-2 bg-gray-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={
                    isEditMode ? handleUpdateArticle : handleCreateArticle
                  }
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  {isEditMode ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleManagement;
