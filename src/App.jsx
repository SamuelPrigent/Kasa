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
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/logement" element={<Logement />}></Route>
      <Route path="/logement/:id" element={<Logement />}></Route>
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
