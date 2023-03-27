import KasaText from "../assets/KasaText.svg";
import "../style/footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-container">
        <img src={KasaText} className="footer-logo" alt="logo" />
        <div className="footer-text">© 2020 Kasa. All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
