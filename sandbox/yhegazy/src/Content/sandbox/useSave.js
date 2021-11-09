import {useState, useEffect} from 'react'

const useSave = (prefix, session) => {
    
    const [save, setSave] = useState(() => JSON.parse(sessionStorage.getItem(session)));
    useEffect(() => {
        setSave(sessionStorage.setItem(prefix, JSON.stringify(session)))
    },[prefix, session])

    alert("Saved!")
    console.log(save)
    
}

export default useSave
