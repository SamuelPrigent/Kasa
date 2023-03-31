// assets
import BannerImg2 from "../assets/infobanner.jpg";
// css
import "../style/about.css";
import "../style/reset.css";
// component
import Colapse from "./Colapse.jsx";

function ColapseElements() {
  return (
    <div>
      <Colapse
        title={"Fiabilité"}
        desc={
          "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        }
        state={true}
      />
      <Colapse
        title={"Respect"}
        desc={
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        }
        state={true}
      />
      <Colapse
        title={"Service"}
        desc={
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        }
        state={false}
      />
      <Colapse
        title={"Sécurité"}
        desc={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
        state={false}
      />
    </div>
  );
}

function Info() {
  return (
    <div>
      <div className="headerContainerAbout">
        <div className="bannerContainerInfo">
          <img src={BannerImg2} className="bannerImgInfo" alt="logo" />
          <div className="bannerTextInfo"></div>
        </div>
      </div>

      <div className="infoContainers">
        <ColapseElements />
      </div>
    </div>
  );
}

export default Info;
