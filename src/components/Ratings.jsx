// assets
import RatingRed from "../assets/RatingRed.svg";
import RatingGrey from "../assets/RatingGrey.svg";

// Logement Ratings
function Ratings({ rating }) {
  const ratings = [1, 2, 3, 4, 5];

  const ratingStars = ratings.map((starIndex) => {
    if (starIndex <= rating) {
      return (
        <img
          src={RatingRed}
          key={`red-star-${starIndex}`}
          className="logementRating"
          alt="red star"
        />
      );
    } else {
      return (
        <img
          src={RatingGrey}
          key={`grey-star-${starIndex}`}
          className="logementRating"
          alt="grey star"
        />
      );
    }
  });

  return <div className="logementRatings">{ratingStars}</div>;
}

export default Ratings;
