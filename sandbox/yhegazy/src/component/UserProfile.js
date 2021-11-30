import {useContext} from 'react'
import {AuthContext}  from '../context/AuthContext';
import Button from './sandbox/Button'

const UserProfile = () => {
    const context = useContext(AuthContext)
    
    console.log(context)
    return <>
            <div className="w-1/2 p-32 ml-auto mr-auto">
                <Button>Dark Theme</Button>
                <button className="BTN_COLOR_ENABLED" onClick={context.toggleLogin}>Click To Login</button>
                <div>
                    <h1>Are you authenticated?</h1>
                    {context.status === true ? 
                        <p>Yes you are</p>
                    : 
                        <p>Nopes</p>
                    }    
                </div>
              
            </div>
    </>
}

export default UserProfile
