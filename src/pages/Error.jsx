import { Link } from "react-router-dom"; // router link
// css
import "../style/error.css";
import "../style/reset.css";

function Error() {
  return (
    <div className="errorContainer">
      <div className="errorText">404 </div>
      <div className="errorTextMedium">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link className="errorTextSmall" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
