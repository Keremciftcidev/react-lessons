import "bulma/css/bulma.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Course } from "./Course";
import Brk from "./images/breaking.jpg";
import Lcdp from "./images/lacasadepapel.webp";
import Prison from "./images/prison.webp";
import Himym from "./images/scale.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Best Movies</p>
        </div>
      </section>
      <div className="container">
        <section className="section"></section>
        <div className="columns">
          <div className="column">
            <Course
              image={Brk}
              title="Breaking bad "
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta expedita, quibusdam quidem fugiat totam ipsam veritatis est obcaecati dolorum! Dicta suscipit eius labore ad cupiditate culpa alias blanditiis repudiandae."
            />
          </div>
          <div className="column">
            <Course
              image={Lcdp}
              title="LCDP"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta expedita, quibusdam quidem fugiat totam ipsam veritatis est obcaecati dolorum! Dicta suscipit eius labore ad cupiditate culpa alias blanditiis repudiandae."
            />
          </div>
          <div className="column">
            <Course
              image={Prison}
              title="Prison Break"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta expedita, quibusdam quidem fugiat totam ipsam veritatis est obcaecati dolorum! Dicta suscipit eius labore ad cupiditate culpa alias blanditiis repudiandae."
            />
          </div>
          <div className="column">
            <Course
              image={Himym}
              title="HİMYM"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dicta expedita, quibusdam quidem fugiat totam ipsam veritatis est obcaecati dolorum! Dicta suscipit eius labore ad cupiditate culpa alias blanditiis repudiandae."
            />
          </div>
        </div>
      </div>
      <></>
    </div>
  );
}

export default App;
