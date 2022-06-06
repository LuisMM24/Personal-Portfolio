import { BrowserRouter } from "react-router-dom";
// components
import Header from "./components/organism/Header/Header";
import IntroSection from "./components/organism/IntroSection/IntroSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <IntroSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
