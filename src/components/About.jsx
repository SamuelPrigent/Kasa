// assets
import BannerImg2 from "../assets/infobanner.jpg";
import Arrow from "../assets/Arrow.svg";
// css
import "../style/about.css";
import "../style/reset.css";

// Tutoriel
// import { useState } from "react";
// import { useState } from "react-dom/client";
// const [open, setOpen] = useState(false);
// <div onClick={() => {setOpen(!open)}}>
// <div className="`dropdown-menu ${open ? "active" : "inactive"}`">
// create 2 css class with className.active // className.inactive

function checkClick(e) {
  console.log("Click");
  // const textDiv = e.querySelector(".textToggle");
  // console.log(textDiv);
  //
  // const toggleBars = document.querySelectorAll(".barToggle");
  // console.log(toggleBars);
}

// function barEventsListener() {
//   const toggleBars = document.querySelectorAll(".barToggle");
//   toggleBars.forEach((element) => {
//     console.log(element);
//   });
// }

// barEventsListener();

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
        <div onClick={checkClick} className="infoContainer">
          <div className="barToggle">
            <div>Fiabilité</div>
            <div>
              <img src={Arrow} className="toggleMenu" alt="logo" />
            </div>
          </div>
          <div className="textToggle">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </div>
        </div>

        <div className="infoContainer">
          <div className="barToggle">
            <div>Respect</div>
            <div>
              <img src={Arrow} className="toggleMenu" alt="logo" />
            </div>
          </div>
          <div className="textToggle">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </div>

        <div className="infoContainer">
          <div className="barToggle">
            <div>Service</div>
            <div>
              <img src={Arrow} className="toggleMenu" alt="logo" />
            </div>
          </div>
          <div className="textToggle">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </div>
        </div>

        <div className="infoContainer">
          <div className="barToggle">
            <div>Sécurité</div>
            <div>
              <img src={Arrow} className="toggleMenu" alt="logo" />
            </div>
          </div>
          <div className="textToggle">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
