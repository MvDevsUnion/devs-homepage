import './App.css'
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Projects } from "@/components/Projects";
import { Stats } from "@/components/Stats";
import { Recruitment } from "@/components/Recruitment";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="grain">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Projects />
      <Stats />
      <Recruitment />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
