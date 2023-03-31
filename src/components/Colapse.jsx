// assets
import Arrow from "../assets/Arrow.svg";
// css
import "../style/logement.css";
import "../style/reset.css";
// react
import { useState } from "react";
// ----

function Colapse({ title, desc, state }) {
  // State
  const [isVisible, setVisible] = useState(state);
  // handle
  const handleToggle = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <div className="infoContainerLogement">
      <div className="barToggle" onClick={handleToggle}>
        <div>{title}</div>
        <img
          src={Arrow}
          className={`toggleMenu ${isVisible ? "rotate" : ""}`}
          alt="fleche"
        />
      </div>
      <div className={`textToggleLogement ${isVisible ? "visible" : ""}`}>
        {desc}
      </div>
    </div>
  );
}
export default Colapse;
