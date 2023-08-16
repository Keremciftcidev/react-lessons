import authContext from './assets/context/auth-context';


import './App.css'
import Auth from './auth'
import { useState } from 'react';

function App() {

  const [authstatus, setAuthStatus] = useState(false)


  const loginAuth =  ()=>{
    setAuthStatus(true)
  }
  return (
    <authContext.Provider value={{status:authstatus,login:loginAuth}}>
      <Auth/>

     
    </authContext.Provider>
  )
}

export default App
