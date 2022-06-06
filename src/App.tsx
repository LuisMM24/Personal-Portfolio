import { BrowserRouter, Routes } from "react-router-dom";
import Header from "./components/organism/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
