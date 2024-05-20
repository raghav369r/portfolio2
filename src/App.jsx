import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import MovetoTop from "./components/shared/MovetoTop";

function App() {
  return (
    <div className="font-custome text-white">
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <MovetoTop />
    </div>
  );
}

export default App;
