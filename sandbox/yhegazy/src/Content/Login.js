import {useContext} from 'react'
import {AuthContext}  from './Context/AuthContext';

const Login = () => {
    const context = useContext(AuthContext)
    
    console.log(context)
    return <>
        <button className="BTN_COLOR_ENABLED" onClick={context.toggleLogin}>Click To Login</button>
        <h1>Are you authenticated?</h1>
        {context.status === true ? 
            <p>Yes you are</p>
        : 
            <p>Nopes</p>
        }
    </>
}

export default Login
