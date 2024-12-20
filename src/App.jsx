import { Suspense } from "react";
import HomePage from "@/pages/HomePage";
import ContactUs from "@/pages/ContactUs"; // Import the ContactUs page
import Header from "@/components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Footer from "@/components/footer/Footer";
import AboutUs from "@/pages/AboutUs";
export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="min-h-screen">
          <Header />
          <Routes>
            {/* Define routes for the application */}
            <Route path="/" element={<HomePage />} /> {/* Home page route */}
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            {/* Contact Us page route */}
          </Routes>
          <Footer />
        </main>
      </Suspense>
    </BrowserRouter>
  );
}
