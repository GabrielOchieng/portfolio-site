import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Body />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
