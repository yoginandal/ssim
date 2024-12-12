import { Suspense } from "react";
import HomePage from "@/pages/HomePage";
import Header from "@/components/header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <main className="min-h-screen">
          <Header />
          <HomePage />
          <Footer />
        </main>
      </Suspense>
    </BrowserRouter>
  );
}
