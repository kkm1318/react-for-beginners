import { useEffect } from "react";
import { useParams } from "react-router-dom";
const Detail = () => {
  const API_KEY = "557fe8995dea2d78c7e83f2a34ee0053";
  const { id } = useParams();
  // const getMovie = async () => {
  //   const json = await (
  //     await fetch(
  //       `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${API_KEY}&movieCd=${id}`
  //     )
  //   ).json();
  //   console.log(json);
  // };
  // useEffect(() => {
  //   getMovie();
  // }, []);
  return <h1>Detail</h1>;
};
// loading
//

export default Detail;
