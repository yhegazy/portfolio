import {useEffect} from 'react'

const useSave = () => {
     console.log("You're Beautiful without useEffect & useEffectLayout")
    //  This takes effect at render

    useEffect(() => {
         console.log("You're Beautiful with useEffect")
        //  This takes effect after every re-render
    })

    useEffect(() => {
         console.log("No beauty is as good as the first useEffect render ")
        //  Get's rendered the first time
    },[])
    
}

export default useSave
