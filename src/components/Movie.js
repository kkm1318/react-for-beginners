import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Movie = ({ movieCd, movieNm, genreAlt }) => {
  return (
    <div>
      <h2>
        <Link to={`/movie/${movieCd}`}>{movieNm}</Link>
      </h2>
      <ul>{genreAlt}</ul>
    </div>
  );
};

Movie.propTypes = {
  movieCd: PropTypes.number.isRequired,
  movieNm: PropTypes.string.isRequired,
  genreAlt: PropTypes.string.isRequired,
};

export default Movie;
