import { BrowserRouter } from "react-router-dom";
import About from "./components/organism/About/About";
// components
import Header from "./components/organism/Header/Header";
import IntroSection from "./components/organism/IntroSection/IntroSection";
import Projects from "./components/organism/Projects/Projects";
import Skills from "./components/organism/Skills/Skills";
import BackgroundBubbles from "./components/templates/BackgroundStars/BackgroundBubbles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="bgGradient">
          <Header />
          <IntroSection />
        </div>
        <BackgroundBubbles>
          <About />
        </BackgroundBubbles>
        <Skills />
        <Projects />
      </BrowserRouter>
    </div>
  );
}

export default App;
