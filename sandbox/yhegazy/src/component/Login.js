import {useContext} from 'react'
import {AuthContext}  from '../context/AuthContext';

const Login = () => {
    const {status, toggleLogin} = useContext(AuthContext)
        
    // console.log(status, toggleLogin)
    return <>
    {/* Construct into a form -> Fetch Get is used to validate against the data. If correct, then toggle to true. Otherwise, print red msg of uname/pwd incorrect */}
        <button className={status ? "RESETALL" : "OVERRIDE_D"} onClick={toggleLogin}>{status ? 'Logout': 'Click To Login'}</button>
        <h1>Are you authenticated?</h1>
        {status ? 
            <p>Yes you are</p>
        : 
            <p>Nopes</p>
        }
    </>
}

export default Login
