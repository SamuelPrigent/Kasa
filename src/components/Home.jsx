import "../style/home.css";
import logement from "../data/logements.json";
import { Link } from "react-router-dom"; // router link

//
// console.log(logement);

// Card
function LogementCard({ logement }) {
  return (
    <Link className="kasaCardContainer" to={`logement/${logement.id}`}>
      <img
        src={logement.pictures[0]}
        className="kasaCard"
        alt="photo logement"
      />
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
function Home() {
  const logementCards = createLogementCards(logement);
  return (
    <div className="homeContainer">
      <div className="home">{logementCards}</div>
    </div>
  );
}

export default Home;
