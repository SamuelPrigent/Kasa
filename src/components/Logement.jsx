// assets
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
import { useState } from "react";

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

function ImageSlider({ array }) {
  const [currentImage, setCurrentImage] = useState(array[0]);
  const [currentNumber, setCurrentNumber] = useState(1);

  function handleNextImage() {
    const currentIndex = array.indexOf(currentImage);
    let nextIndex = currentIndex + 1;
    if (nextIndex === array.length) {
      nextIndex = 0;
    }
    setCurrentImage(array[nextIndex]);
    setCurrentNumber(nextIndex + 1);
  }

  function handlePrevImage() {
    const currentIndex = array.indexOf(currentImage);
    let nextIndex = currentIndex - 1;
    if (nextIndex === -1) {
      nextIndex = array.length - 1;
    }
    setCurrentImage(array[nextIndex]);
    setCurrentNumber(nextIndex + 1);
  }

  return (
    <div className="headerContainerLogement">
      <div className="bannerContainerLogement">
        <img src={currentImage} className="bannerImgLogement" alt="logo" />
        <div onClick={handlePrevImage} className="arrowBannerLeftContainer">
          <img src={Arrow} className="arrowBannerLeft" alt="logo" />
        </div>
        <div onClick={handleNextImage} className="arrowBannerRightContainer">
          <img src={Arrow} className="arrowBannerRight" alt="logo" />
        </div>
        <div className="numberBanner">
          {currentNumber}/{array.length}
        </div>
      </div>
    </div>
  );
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
  const picsArray = kasa.pictures;

  // Toggle Visibility
  const [infoVisible, setInfoVisible] = useState({
    desc: true,
    stuff: true,
  });
  const handleToggle = (id) => {
    setInfoVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <ImageSlider array={picsArray} />
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
            <div className="infoContainerLogement">
              <div className="barToggle" onClick={() => handleToggle("desc")}>
                <div>Description</div>
                <img
                  src={Arrow}
                  className={`toggleMenu ${infoVisible.desc ? "rotate" : ""}`}
                  alt="logo"
                />
              </div>
              <div
                className={`textToggleLogement ${
                  infoVisible.desc ? "visible" : ""
                }`}
              >
                {kasa.description}
              </div>
            </div>
          </div>
          <div className="logementBlocDisplay">
            <div className="infoContainerLogement">
              <div className="barToggle" onClick={() => handleToggle("stuff")}>
                <div>Équipements</div>
                <img
                  src={Arrow}
                  className={`toggleMenu ${infoVisible.stuff ? "rotate" : ""}`}
                  alt="logo"
                />
              </div>
              <ul
                className={`textToggle2 ${infoVisible.stuff ? "visible" : ""}`}
              >
                {stuffElements}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
