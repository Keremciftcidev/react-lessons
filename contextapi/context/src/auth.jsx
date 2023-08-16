import {useContext} from 'react'
import authContext from './assets/context/auth-context';


function Auth() {
    const{status, login}= useContext(authContext)
    console.log(status)
    return <div>
        <h1>Giriş yaptın mı</h1>
        {status ? <p>ohoo çoktan</p> : <p>hayır</p>}
        <button onClick={login}>Giriş yap</button>
    </div>  ;
}

export default Auth;