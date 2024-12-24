import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "@/pages/HomePage";
import ContactUs from "@/pages/ContactUs"; // Import the ContactUs page
import Header from "@/components/header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Routes and Route
import Footer from "@/components/footer/Footer";
import AboutMessage from "@/components/abouts/AboutMessage"; // Import AboutMessage component
import AboutValues from "@/components/abouts/AboutValues"; // Import AboutValues component
import AboutSetUsApart from "@/components/abouts/AboutSetUsApart"; // Import AboutSetUsApart component
import AboutLayout from "@/components/abouts/AboutLayout";

const aboutSidebarLinks = [
  { href: "/about/message", label: "Message" },
  { href: "/about/values", label: "Values & Mission" },
  { href: "/about/set-us-apart", label: "What Sets Us Apart" },
];

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <main className="min-h-screen">
            <Header />
            <Routes>
              {/* Define routes for the application */}
              <Route path="/" element={<HomePage />} /> {/* Home page route */}
              <Route
                path="/about"
                element={<AboutLayout sidebarLinks={aboutSidebarLinks} />}
              >
                <Route path="" element={<Navigate to="message" replace />} />
                <Route path="message" element={<AboutMessage />} />
                <Route path="values" element={<AboutValues />} />
                <Route path="set-us-apart" element={<AboutSetUsApart />} />
              </Route>
              <Route path="/contact-us" element={<ContactUs />} />
              {/* Contact Us page route */}
            </Routes>
            <Footer />
          </main>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
