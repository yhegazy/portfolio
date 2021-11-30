import {useEffect} from 'react'

const useDocumentTitle = (prefix) => {
   useEffect(() => {
        document.title = prefix
    })

}

export default useDocumentTitle
