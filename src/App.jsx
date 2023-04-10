import { Route, Routes } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage.jsx";
import Error from "./pages/Error.jsx"; // page error
import Logement from "./pages/Logement.jsx"; // page logement
import About from "./pages/About.jsx"; // page info
// style
import "./style/index.css";
import "./style/reset.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/logement" element={<Logement />}></Route>
      <Route path="/logement/:id" element={<Logement />}></Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
