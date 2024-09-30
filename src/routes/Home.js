import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const API_KEY = "557fe8995dea2d78c7e83f2a34ee0053";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${API_KEY}`
      )
    ).json();
    console.log(json);
    setMovies(json.movieListResult.movieList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.movieCd}
              movieCd={movie.movieCd}
              movieNm={movie.movieNm}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
