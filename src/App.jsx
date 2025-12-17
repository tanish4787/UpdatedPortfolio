import { Routes, Route } from "react-router";

import { HeroHeader } from "./components/header";
import HeroSection from "./components/hero-section";
import Integrations from "./components/integrations-three";
import FeaturesCard from "./components/FeaturescCard";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/footer-four";
import { AdminLogin } from "./components/AdminLogin";
import { UploadPanel } from "./components/UploadPanel";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Integrations />
                <ProjectsSection />
                <FeaturesCard />
                <ContactSection />
              </>
            }
          />

          <Route
            path="/login"
            element={
              <div className="max-h-screen mx-auto flex items-center justify-center mt-52 border-2 p-10 rounded-lg shadow-lg w-96">
                <AdminLogin />
              </div>
            }
          />

          <Route path="/upload" element={<UploadPanel />} />
        </Routes>
      </main>

      <FooterSection />
    </div>
  );
}

export default App;
