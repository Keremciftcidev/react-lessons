import { useState } from 'react'
import './App.css'


function App() {
 const [value, setValue] = useState(0) // valuenun başlangıc değerini gösterir


 const handleClick =()=>{
  setValue(value +1)
 }
  return (
    <>
   <div className="App">
    <button onClick={handleClick}>Kurs ekle</button>
    <div>Kurs sayısı:{value}</div>
   </div>
    </>
  )
}

export default App
