import AboutSections from "./components/AboutSections";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto mt-28 sm:mt-36 px-12 py-4">
        <HeroSection />
        <AboutSections />
        <ProjectsSection />
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
