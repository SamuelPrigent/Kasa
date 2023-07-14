import { Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home.jsx"; // home
import Error from "./pages/Error.jsx"; // page error
import Logement from "./pages/Logement.jsx"; // page logement
import About from "./pages/About.jsx"; // page info
// style
import "./style/index.css";
import "./style/reset.css";

function App() {
  return (
    <Routes>
      <Route path="/Kasa" element={<Home />} />
      <Route path="/Kasa/about" element={<About />} />
      <Route path="/Kasa/logement" element={<Logement />} />
      <Route path="/Kasa/logement/:id" element={<Logement />} />
      <Route path="/Kasa/*" element={<Error />} />
    </Routes>
  );
}

export default App;
