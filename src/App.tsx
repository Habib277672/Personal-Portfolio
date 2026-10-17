import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionAbout } from "./components/SectionAbout";
import { SectionContact } from "./components/SectionContact";
import { SectionHome } from "./components/SectionHome";
import { SectionProjects } from "./components/SectionProjects";
import { SectionServices } from "./components/SectionServices";
import { SectionTestimonials } from "./components/SectionTestimonials";
import { SectionWork } from "./components/SectionWork";
import { useNavActiveLink } from "./hooks/useNavActiveLink";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();
  useNavActiveLink();

  return (
    <>
      <Header />

      <main className="main">
        <CustomCursor />
        <SectionHome />
        <SectionAbout />
        <SectionProjects />
        <SectionWork />
        <SectionServices />
        <SectionTestimonials />
        <SectionContact />
      </main>

      <Footer />
    </>
  );
}
