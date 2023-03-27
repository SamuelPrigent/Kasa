import { Route, Routes } from "react-router-dom";

// pages & components
import HomePage from "./pages/HomePage.jsx";
import Error from "./components/Error.jsx"; // page error
import Logement from "./components/Logement.jsx"; // page logement
import About from "./components/About.jsx"; // page info
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
