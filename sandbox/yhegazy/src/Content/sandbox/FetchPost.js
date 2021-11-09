import React, {useState} from 'react'

// TODO: Create DB to save data. Example of a fetch POST (by default, the method, headers, and body are excluded in a GET method)
const FetchPost = () => {
    const [number, setNumber] = useState(0);

    function handleFormSubmit(event) {
        event.preventDefault();

        fetch("https://react-tutorial-demo.firebaseio.com/grades.json", {
            method: "POST", //"PUT" if you're not submitting a form
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({grade: number})
        })
        .then(response => response.json())
        .then(data => {
            console.log("Grade added");
            console.log(data);
        });
    }

    return <form onSubmit={handleFormSubmit}>
        <input type="number" value={number} name="grade" onChange={event => setNumber(event.target.value)} placeholder="Enter the grade" />
        <input type="submit" />
        </form>
    ;
}


export default FetchPost
