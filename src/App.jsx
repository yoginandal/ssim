import { Suspense, useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import HomePage from "@/pages/HomePage";
import ContactUs from "@/pages/ContactUs"; // Import the ContactUs page
import Header from "@/components/header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Routes and Route
import Footer from "@/components/footer/Footer";
import AboutMessage from "@/components/abouts/AboutMessage"; // Import AboutMessage component
import AboutValues from "@/components/abouts/VisionMission"; // Import AboutValues component
import AboutSetUsApart from "@/components/abouts/AboutSetUsApart"; // Import AboutSetUsApart component
import AboutLayout from "@/components/abouts/AboutLayout";
import LifeAtSsim from "@/components/studentslife/LifeAtSsim";
import { Button } from "./components/ui/button";
import AcademicAdvisoryBoard from "@/components/abouts/AcademicAdvisoryBoard";
import VisionMission from "@/components/abouts/VisionMission";
import Leadership from "@/components/abouts/Leadership";
import BoardOfGovernors from "@/components/abouts/BoardOfGovernors";
import BoardOfStudies from "@/components/abouts/BoardOfStudies";
import AccreditationsRankings from "@/components/abouts/AccreditationsRankings";
import Areas from "@/components/faculty&research/Areas";
import PlacementSection from "@/components/placement/PlacementSection";
// import PlacementTeam from "@/components/placement/PlacementTeam";
import PlacementTeams from "@/components/placement/PlacementTeams";
import FPM from "@/components/admissions/FPM";
import PGDMTPS from "@/components/admissions/PGDMTPS";
import PGDMBIFS from "@/components/admissions/PGDMBIFS";
import PGDMBA from "@/components/admissions/PGDMBA";
import Programs from "@/components/programs/Programs";
import Research from "@/components/faculty&research/Research";
import AlumniSection from "@/components/alumni/Alumni";
const aboutSidebarLinks = [
  { href: "/about/message", label: "Message" },
  { href: "/about/values", label: "Values & Mission" },
  { href: "/about/set-us-apart", label: "What Sets Us Apart" },
];

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

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
                <Route path="directors-message" element={<AboutMessage />} />
                <Route path="values" element={<AboutValues />} />
                <Route path="academic-advisory-board" element={<AcademicAdvisoryBoard />} />
                <Route path="set-us-apart" element={<AboutSetUsApart />} />
                <Route path="vision-mission" element={<VisionMission />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="board-of-governors" element={<BoardOfGovernors />} />
                <Route path="board-of-studies" element={<BoardOfStudies />} />
                <Route path="accreditations-rankings" element={<AccreditationsRankings />} />
              </Route>
              <Route path="/alumni" element={<AlumniSection />} />
              <Route
                path="/faculty"
                element={<AboutLayout sidebarLinks={aboutSidebarLinks} />}
              >
                <Route path="" element={<Navigate to="message" replace />} />
                <Route path="areas" element={<Areas />} />
              </Route>
              <Route
                path="/research"
              >
                <Route path="" element={<Navigate to="message" replace />} />
                <Route path="case-research-center" element={<Research />} />
              </Route>
              <Route
                path="/placement"
                element={<AboutLayout sidebarLinks={aboutSidebarLinks} />}
              >
                <Route path="" element={<Navigate to="message" replace />} />
                {/* <Route path="records" element={<PlacementRecords />} /> */}
                <Route path="records" element={<PlacementSection />} />
                <Route path="team" element={<PlacementTeams />} />
              </Route>
              <Route
                path="/students-life/life-at-ssim"
                element={<LifeAtSsim />}
              />
              <Route path="/admissions/fpm-efpm" element={<FPM />} />
              <Route path="/admissions/pgdm-triple-specialisation" element={<PGDMTPS />} />
              <Route path="/admissions/pgdm-bifs" element={<PGDMBIFS />} />
              <Route path="/admissions/pgdm-ba" element={<PGDMBA />} />
              <Route path="/programs/:id" element={<Programs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              {/* Contact Us page route */}
            </Routes>
            <Footer />
            {isVisible && (
              <Button
                onClick={scrollToTop}
                size="icon"
                className="fixed bottom-4 right-4 h-9 w-9 rounded-md bg-red-600 hover:bg-red-700 animate-bounce shadow-lg z-50"
                aria-label="Scroll to top"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </Button>
            )}
          </main>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
