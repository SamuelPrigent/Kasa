// assets
import BannerImg2 from "../assets/infobanner.jpg";
import Arrow from "../assets/Arrow.svg";
// css
import "../style/about.css";
import "../style/reset.css";
// from react
import { useState } from "react";

function ToggleElement() {
  const [infoVisible, setInfoVisible] = useState({
    fiabilite: true,
    respect: true,
    service: false,
    securite: false,
  });

  const handleToggle = (id) => {
    setInfoVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <div className="infoContainer">
        <div className="barToggle" onClick={() => handleToggle("fiabilite")}>
          <div>Fiabilité</div>
          <img
            src={Arrow}
            className={`toggleMenu ${infoVisible.fiabilite ? "rotate" : ""}`}
            alt="logo"
          />
        </div>
        <div className={`textToggle ${infoVisible.fiabilite ? "visible" : ""}`}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>
      </div>

      <div className="infoContainer">
        <div className="barToggle" onClick={() => handleToggle("respect")}>
          <div>Respect</div>
          <img
            src={Arrow}
            className={`toggleMenu ${infoVisible.respect ? "rotate" : ""}`}
            alt="logo"
          />
        </div>
        <div className={`textToggle ${infoVisible.respect ? "visible" : ""}`}>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </div>
      </div>

      <div className="infoContainer">
        <div className="barToggle" onClick={() => handleToggle("service")}>
          <div>Service</div>
          <img
            src={Arrow}
            className={`toggleMenu ${infoVisible.service ? "rotate" : ""}`}
            alt="logo"
          />
        </div>
        <div className={`textToggle ${infoVisible.service ? "visible" : ""}`}>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </div>
      </div>
      <div className="infoContainer">
        <div className="barToggle" onClick={() => handleToggle("securite")}>
          <div>Sécurité</div>
          <img
            src={Arrow}
            className={`toggleMenu ${infoVisible.securite ? "rotate" : ""}`}
            alt="logo"
          />
        </div>
        <div className={`textToggle ${infoVisible.securite ? "visible" : ""}`}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div>
      <div className="headerContainer">
        <div className="bannerContainerInfo">
          <img src={BannerImg2} className="bannerImgInfo" alt="logo" />
          <div className="bannerTextInfo"></div>
        </div>
      </div>

      <div className="infoContainers">
        <ToggleElement />
      </div>
    </div>
  );
}

export default Info;
