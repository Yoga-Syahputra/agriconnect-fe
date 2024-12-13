import axios from "axios";

// Create axios instance with default config
const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth related endpoints
const auth = {
  login: (email, password) => api.post("/auth/login", { email, password }),
  register: (userData) => api.post("/auth/register", userData),
  logout: () => api.post("/auth/logout"),
};

// User related endpoints
const users = {
  getProfile: (userId) => api.get(`/users/${userId}`),
  updateProfile: (userId, userData) => api.put(`/users/${userId}`, userData),
  deleteAccount: (userId) => api.delete(`/users/${userId}`),
};

// Farmer related endpoints
const farmers = {
  getAll: () => api.get("/farmers"),
  getOne: (farmerId) => api.get(`/farmers/${farmerId}`),
  create: (farmerData) => api.post("/farmers", farmerData),
  update: (farmerId, farmerData) => api.put(`/farmers/${farmerId}`, farmerData),
  delete: (farmerId) => api.delete(`/farmers/${farmerId}`),
};

// Expert related endpoints
const experts = {
  getAll: () => api.get("/experts"),
  getOne: (expertId) => api.get(`/experts/${expertId}`),
  create: (expertData) => api.post("/experts", expertData),
  update: (expertId, expertData) => api.put(`/experts/${expertId}`, expertData),
  delete: (expertId) => api.delete(`/experts/${expertId}`),
  getRating: (expertId) => api.get(`/experts/${expertId}/rating`),
};

// Company related endpoints
const companies = {
  getAll: () => api.get("/companies"),
  getOne: (companyId) => api.get(`/companies/${companyId}`),
  create: (companyData) => api.post("/companies", companyData),
  update: (companyId, companyData) =>
    api.put(`/companies/${companyId}`, companyData),
  delete: (companyId) => api.delete(`/companies/${companyId}`),
};

// Job seeker related endpoints
const jobSeekers = {
  getAll: () => api.get("/job-seekers"),
  getOne: (seekerId) => api.get(`/job-seekers/${seekerId}`),
  create: (seekerData) => api.post("/job-seekers", seekerData),
  update: (seekerId, seekerData) =>
    api.put(`/job-seekers/${seekerId}`, seekerData),
  delete: (seekerId) => api.delete(`/job-seekers/${seekerId}`),
};

// Connection related endpoints
const connections = {
  getAll: (userId) => api.get(`/connections/${userId}`),
  create: (connectionData) => api.post("/connections", connectionData),
  delete: (connectionId) => api.delete(`/connections/${connectionId}`),
  getJobConnections: (userId) => api.get(`/connections/${userId}/job`),
  getExpertConnections: (userId) => api.get(`/connections/${userId}/expert`),
};

// Article related endpoints
const articles = {
  getAll: () => api.get("/api/articles"),
  getOne: (articleId) => api.get(`/api/articles/${articleId}`),
  create: (formData) =>
    api.post("/api/articles", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  update: (articleId, formData) =>
    api.put(`/api/articles/${articleId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  delete: (articleId) => api.delete(`/api/articles/${articleId}`),
  getByAuthor: (authorId) => api.get(`/api/articles/author/${authorId}`),
};

// Question related endpoints
const questions = {
  getAll: () => api.get("/questions"),
  getOne: (questionId) => api.get(`/questions/${questionId}`),
  create: (questionData) => api.post("/questions", questionData),
  update: (questionId, questionData) =>
    api.put(`/questions/${questionId}`, questionData),
  delete: (questionId) => api.delete(`/questions/${questionId}`),
  getByUser: (userId) => api.get(`/questions/user/${userId}`),
};

// Review related endpoints
const reviews = {
  getAll: () => api.get("/reviews"),
  create: (reviewData) => api.post("/reviews", reviewData),
  update: (reviewId, reviewData) => api.put(`/reviews/${reviewId}`, reviewData),
  delete: (reviewId) => api.delete(`/reviews/${reviewId}`),
  getByTarget: (targetId, targetType) =>
    api.get(`/reviews/target/${targetId}?type=${targetType}`),
};

// Category related endpoints
const categories = {
  getAll: () => api.get("/categories"),
  getByType: (type) => api.get(`/categories/type/${type}`),
  create: (categoryData) => api.post("/categories", categoryData),
  update: (categoryId, categoryData) =>
    api.put(`/categories/${categoryId}`, categoryData),
  delete: (categoryId) => api.delete(`/categories/${categoryId}`),
};

// Activity related endpoints
const activities = {
  getAll: (userId) => api.get(`/activities/${userId}`),
  create: (activityData) => api.post("/activities", activityData),
};

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      // Redirect to login or handle unauthorized access
    }
    return Promise.reject(error);
  }
);

// Export all API services
export default {
  auth,
  users,
  farmers,
  experts,
  companies,
  jobSeekers,
  connections,
  articles,
  questions,
  reviews,
  categories,
  activities,
};

