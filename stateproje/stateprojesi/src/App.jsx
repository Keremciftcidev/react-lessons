import "./App.css";
import Movie from "./Movie";
import { useState } from "react";

function getrandomMovie() {
  const movieArray = ['Brk', 'Lcdp', 'Prison', 'Himym'];
  return movieArray[Math.floor(Math.random() * movieArray.length)];
}

function App() {
  const [movies, setMovies] = useState([]);

  const handleClick = () => {
    setMovies([...movies, getrandomMovie()]);
  };
  const movieList =  movies.map((movie, index) => {
    return <Movie key={index} movieName={movies} />;
  })
    
  return (
    <div className="App">
      <button onClick={handleClick}>Movie Add</button>   
    </div>
  );
}

export default App;
