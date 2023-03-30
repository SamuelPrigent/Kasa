// assets
import BannerImg from "../assets/homebanner.jpg";
// css
import "../style/banner.css";
import "../style/reset.css";

function Banner() {
  return (
    <div className="headerContainer">
      <div className="bannerContainerHome">
        <img
          src={BannerImg}
          className="bannerImgMain"
          alt="bannière principale"
        />
        <div className="bannerTextMain">Chez vous, partout et ailleurs</div>
      </div>
    </div>
  );
}

export default Banner;
