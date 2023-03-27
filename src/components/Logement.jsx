// assets
import BannerLogement from "../assets/logementbanner.jpg";
import User from "../assets/UserImg.png";
import RatingRed from "../assets/RatingRed.svg";
import RatingGrey from "../assets/RatingGrey.svg";
import Arrow from "../assets/Arrow.svg";
// css
import "../style/logement.css";
import "../style/reset.css";
//
import { useParams } from "react-router-dom"; // recup params
import logement from "../data/logements.json"; // Fetch real data

// Tag element
function TagElement({ tag }) {
  return <div className="logementTag">{tag}</div>;
}
// Tag Factory
function createTags(tags) {
  return tags.map((tag) => <TagElement key={tag} tag={tag} />);
}

// Equiment element
function StuffElement({ equipement }) {
  return <li>{equipement}</li>;
}
// Equiment Factory
function createEquiment(equipements) {
  // console.log(equipements);
  return equipements.map((equipement) => (
    <StuffElement key={equipement} equipement={equipement} />
  ));
}

// Ratings (1 - 5)
function Ratings() {
  const { id } = useParams(); // get id
  const kasa = logement.find((element) => element.id === id);
  const rating = kasa.rating;
  // console.log(rating);

  if (rating == 1) {
    return (
      <div className="logementRatings">
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
      </div>
    );
  }
  if (rating == 2) {
    return (
      <div className="logementRatings">
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
      </div>
    );
  }
  if (rating == 3) {
    return (
      <div className="logementRatings">
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
      </div>
    );
  }
  if (rating == 4) {
    return (
      <div className="logementRatings">
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingGrey} className="logementRating" alt="logo" />
      </div>
    );
  }
  if (rating == 5) {
    return (
      <div className="logementRatings">
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
        <img src={RatingRed} className="logementRating" alt="logo" />
      </div>
    );
  }
}

// Info Page
function Info() {
  const { id } = useParams(); // get id
  const kasa = logement.find((element) => element.id === id);
  const host = kasa.host.name.split(" ");
  const tags = kasa.tags;
  const tagElements = createTags(tags);
  const equipements = kasa.equipments;
  const stuffElements = createEquiment(equipements);

  // console.log
  // console.log(logement.find((element) => element.id === id));

  return (
    <div>
      <div className="headerContainer">
        <div className="bannerContainerLogement">
          <img
            src={kasa.pictures[0]}
            className="bannerImgLogement"
            alt="logo"
          />
        </div>
      </div>
      <div className="logementContainer">
        <div className="logementInfoHeader">
          <div className="logementInfoHeaderLeft">
            <div className="logementTitleLocation">
              <div className="logementTitle">{kasa.title}</div>
              <div className="logementLocation">{kasa.location}</div>
            </div>
            <div className="logementTags">{tagElements}</div>
          </div>
          <div className="logementInfoHeaderRight">
            <div className="logementId">
              <div className="logementPrenomNom">
                <div className="logementPrenom">{host[0]} </div>
                <div className="logementNom"> {host[1]}</div>
              </div>
              <div>
                <img src={User} className="userImg" alt="logo" />
              </div>
            </div>
            <Ratings />
          </div>
        </div>
        <div className="logementBloc">
          <div className="logementBlocDisplay">
            <div className="barToggle">
              <div>Description</div>
              <img src={Arrow} className="arrowToggle" alt="logo" />
            </div>
            <div className="textToggleLogement">{kasa.description}</div>
          </div>
          <div className="logementBlocDisplay">
            <div className="barToggle">
              <div>Équipements</div>
              <img src={Arrow} className="arrowToggle" alt="logo" />
            </div>
            <ul className="textToggle2">{stuffElements}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
