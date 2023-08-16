import Brk from "./images/breaking.jpg";
import Lcdp from "./images/lacasadepapel.webp";
import Prison from "./images/prison.webp";
import Himym from "./images/scale.jpeg";

const movieMap ={
    Brk,
    Lcdp,
    Prison,
    Himym
}

function Movie({movieName}) {
    // console.log(movieName)   
   
    console.log(movieMap[movieName])
  return (
  <div>
    <img src={movieMap[movieName]} alt="" />
  </div>
  );

}

export default Movie;
