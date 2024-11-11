import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Syarat dan Ketentuan</h1>
        {/* Terms and conditions content */}
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
