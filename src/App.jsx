import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobListing from "./pages/JobListing";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import JobMarket from "./pages/JobMarket";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
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
import Transaction from "./pages/Transaction";
import JobPage from "./pages/JobPage";
import Worker from "./pages/Worker";
import ArticleManagement from "./pages/ArticleManagement";
import AdminSettings from "./pages/AdminSettings";
import Company from "./pages/Company";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-listing" element={<JobListing />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/company/:companyName" element={<CompanyDetail />} />
        <Route path="/job-market" element={<JobMarket />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/company/" element={<Company />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/admin/workers" element={<Worker />} />
        <Route
          path="/admin/transaction"
          element={
            <PrivateRoute>
              <Transaction />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/job"
          element={
            <PrivateRoute>
              <JobPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/articles"
          element={
            <PrivateRoute>
              <ArticleManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <PrivateRoute>
              <AdminSettings />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
