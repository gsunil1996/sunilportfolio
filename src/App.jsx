import Banner from "./components/banner/Banner";
import Contact from "./components/Contact/Contact"
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import TechSkills from "./components/skills/TechSkills";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Resume />
        <TechSkills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
