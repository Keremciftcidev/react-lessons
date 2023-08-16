import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [kerem, setKerem] = useState(0);
  const [feyza, setFeyza] = useState(0);
  useEffect(() => {
    console.log("her zaman");
  });
  useEffect(() => {
   
    console.log("İlk kez render edildiğinde çalışır ve daha da çalışmaz")
     
    }, [])

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve Kerem değerinde değişiklik olduğında çalışır"
    );
  }, [kerem]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve feyza değerinde değişiklik olduğında çalışır"
    );
  }, [feyza]);
  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır ve Kerem ve feyza değerinde değişiklik olduğında çalışır"
    );
  }, [kerem, feyza]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setKerem(kerem + 1)}>Kerem ++</button>
        <div>Kerem: {kerem}</div>
      </div>
      <div>
        <button onClick={() => setFeyza(feyza + 1)}>Feyza ++</button>
        <div>Feyza: {feyza}</div>
      </div>
    </div>
  );
}

export default App;
