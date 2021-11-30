import {useEffect} from 'react'

const useSave = (prefix, session) => {
 
    useEffect(() => {
        sessionStorage.setItem(prefix, JSON.stringify(session))
    },[prefix, session])

}

export default useSave
