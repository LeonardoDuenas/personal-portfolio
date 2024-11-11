import Header from "./components/Header";
import FullName from "./components/FullName";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import EducationWork from "./components/EducationWork";
import Background from "./components/Background";
import "./styles/style.css";

function App() {
  return (
    <>
      <Header />
      <FullName />
      <Background />
      <main className="content-container">
        <About />
        <hr />
        <Skills />
        <hr />
        <Projects />
        <hr />
        <EducationWork />
        <hr />
        <Contact />
      </main>
    </>
  );
}

export default App;
