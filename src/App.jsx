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
      <Route path="/kasa" element={<Home />} />
      <Route path="/kasa/about" element={<About />} />
      <Route path="/kasa/logement" element={<Logement />} />
      <Route path="/kasa/logement/:id" element={<Logement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
