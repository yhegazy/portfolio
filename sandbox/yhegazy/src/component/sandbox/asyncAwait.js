import React, {useState, useEffect} from "react";

function ExAsyncAwait() {
  const [users, setUsers] = useState();

   useEffect(() => {
    (async () => {
      const response = await fetch('https://react-tutorial-demo.firebaseio.com/users.json')
      const data = await response.json()
      setUsers(data)
    })();
  },[])

   if (!users) {
    return null;
  }
  
  return <>
    <h1>Users ({users.length})</h1>
    <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  </>
}

export default ExAsyncAwait;