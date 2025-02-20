import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
