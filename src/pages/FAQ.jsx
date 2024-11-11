import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">FAQ</h1>
        {/* FAQ content */}
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
