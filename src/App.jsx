import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobListing from "./pages/JobListing";
import Companies from "./pages/Companies";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Worker from "./pages/Worker";
import ArticleManagement from "./pages/ArticleManagement";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-listing" element={<JobListing />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/workers" element={<Worker />} />
        <Route path="/admin/articles" element={<ArticleManagement/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
