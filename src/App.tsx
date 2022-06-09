import { BrowserRouter } from "react-router-dom";
import About from "./components/organism/About/About";
// components
import Header from "./components/organism/Header/Header";
import IntroSection from "./components/organism/IntroSection/IntroSection";
import Projects from "./components/organism/Projects/Projects";
import Skills from "./components/organism/Skills/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <IntroSection />
        <About />
        <Skills />
        <Projects />
      </BrowserRouter>
    </div>
  );
}

export default App;
