import React, {useState, useEffect} from "react";
import {render} from "react-dom";

// Thoughts: We use a useEffect because I want it automatic. We use a function so I can manually load. 
// Try/Catch is good for loading/logging effects. 

function App() {
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(false)

    async function handleLoadingButton () {
        setIsLoading(true)
        try {
            const response = await fetch("https://react-tutorial-demo.firebaseio.com/users.json")
            const data = await response.json();
            if(data) setUsers(data);
            setIsLoading(false)
        } 
        catch (error) {
            console.log(error)
            setIsLoading(false);
        } 
    }

    return (<>
        <button onClick={handleLoadingButton} disabled={!isLoading ? "": 'false'}>Load users</button>
        <h1>Users</h1>
        <ul>
            {users && users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>);
}

render(<App />, document.querySelector("#react-root"));
