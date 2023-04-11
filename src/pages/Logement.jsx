// assets
import Arrow from "../assets/Arrow.svg";
// data
import logement from "../data/logements.json"; // Fetch real data
// css
import "../style/logement.css";
import "../style/reset.css";
// react
import { useParams } from "react-router-dom"; // recup params
import { useState } from "react";
import { useEffect } from "react";
// for redirection
import { useNavigate } from "react-router-dom";
// component
import Colapse from "../components/Colapse.jsx";
import Ratings from "../components/Ratings.jsx";

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

function ImageSlider({ array }) {
  const { id } = useParams(); // get id
  const kasa = logement.find((element) => element.id === id);
  if (kasa) {
    const [currentImage, setCurrentImage] = useState(array[0]);
    const [currentNumber, setCurrentNumber] = useState(1);

    // visibilité or arrow and text
    const [arrowVisible, setArrowVisible] = useState(true);
    useEffect(() => {
      if (array.length === 1) {
        setArrowVisible(false);
      }
    }, [array]);

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

    // Nav via KeyDown
    useEffect(() => {
      function handleKeyDown(e) {
        if (e.keyCode === 37) {
          handlePrevImage();
        }
        if (e.keyCode === 39) {
          handleNextImage();
        }
      }
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [currentImage]);

    return (
      <div className="headerContainerLogement">
        <div className="bannerContainerLogement">
          <img
            src={currentImage}
            className="bannerImgLogement"
            alt="photo logement"
          />
          <div onClick={handlePrevImage} className="arrowBannerLeftContainer">
            <img
              src={Arrow}
              className={`arrowBannerLeft ${arrowVisible ? "" : "hide"}`}
              alt="fleche précédent"
            />
          </div>
          <div onClick={handleNextImage} className="arrowBannerRightContainer">
            <img
              src={Arrow}
              className={`arrowBannerRight ${arrowVisible ? "" : "hide"}`}
              alt="fleche suivant"
            />
          </div>
          <div className={`numberBanner ${arrowVisible ? "" : "hide"}`}>
            {currentNumber}/{array.length}
          </div>
        </div>
      </div>
    );
  }
}

// Info Page
function Info() {
  const { id } = useParams(); // get id
  const kasa = logement.find((element) => element.id === id);
  if (kasa) {
    const host = kasa.host.name.split(" ");
    const tags = kasa.tags;
    const tagElements = createTags(tags);
    const equipements = kasa.equipments;
    const stuffElements = createEquiment(equipements);
    const picsArray = kasa.pictures;

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
                  <img
                    src={kasa.host.picture}
                    className="userImg"
                    alt="photo propriétaire"
                  />
                </div>
              </div>
              <Ratings rating={kasa.rating} />
            </div>
          </div>
          <div className="logementBloc">
            <div className="logementBlocDisplay">
              <Colapse
                title={"Description"}
                desc={kasa.description}
                state={true}
              />
            </div>
            <div className="logementBlocDisplay">
              <Colapse
                title={"Équipements"}
                desc={stuffElements}
                state={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // redirection page d'erreur si id logement non reconnu
    const navigate = useNavigate();
    useEffect(() => {
      const kasa = logement.find((element) => element.id === id);
      if (!kasa) {
        navigate("/error");
      }
    }, [id, logement, navigate]);

    return <div></div>;
  }
}

export default Info;
