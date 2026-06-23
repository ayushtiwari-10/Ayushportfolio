import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorBlob from "./components/CursorBlob";
import CommandPalette from "./components/CommandPalette";

export default function App() {
  return (
    <ThemeProvider>
      <div className="noise-overlay" />
      <CursorBlob />
      <CommandPalette />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}