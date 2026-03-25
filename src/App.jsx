import Navbar from "./components/layout/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Works from "./sections/Works";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}
