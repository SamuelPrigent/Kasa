import "../style/home.css";
import logement from "../data/logements.json";
import { Link } from "react-router-dom"; // router link

// Card
function LogementCard({ logement }) {
  // cover
  let cover = logement.pictures[0];
  if (logement.cover) {
    cover = logement.cover;
  }

  return (
    <Link className="kasaCardContainer" to={`logement/${logement.id}`}>
      <img src={cover} className="kasaCard" alt="photo logement" />
      <div className="kasaCardBackground"></div>
      <div className="kasaCardText">{logement.title}</div>
    </Link>
  );
}

// Factory
function createLogementCards(logements) {
  return logements.map((logement) => (
    <LogementCard key={logement.id} logement={logement} />
  ));
}

// Affichage Global du container
function Cards() {
  const logementCards = createLogementCards(logement);
  return (
    <div className="homeContainer">
      <div className="home">{logementCards}</div>
    </div>
  );
}

export default Cards;
