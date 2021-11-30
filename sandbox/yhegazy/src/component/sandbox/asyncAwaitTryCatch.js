import React, {useEffect, useState} from "react";

function ExAsyncAwaitTryCatch() {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
          try {
            const response = await fetch("https://react-tutorial-demo.firebaseio.com/users.json")
            const data = await response.json();
            setIsLoading(false)
            setUsers(data);
          } catch (error) {
              console.log(error)
              setIsLoading(false);
          } 
        })()
    }, []);

    return null
}

export default ExAsyncAwaitTryCatch;