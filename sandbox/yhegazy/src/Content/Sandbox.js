// TODO: Learn https://react-hook-form.com/
// TODO: Learn https://react-leaflet.js.org/ && https://account.mapbox.com/ -> use asyncTryCatchFunction as example (check out react tutorial app project XII for ideas)
// TODO: "" https://konvajs.org/ 
// TODO: "" https://d3js.org/
// TODO: "" https://pixijs.com/
// TODO: "" https://www.typescriptlang.org/
// TODO: "" https://reactrouter.com/
// TODO: Transfer https://react-tutorial.app/ examples to showcase
// TODO: Build useSave using fetch post & get 
// TODO: Learn how to custom mod w/ TailwindCSS
// TODO: Write a blog on each todo item. Preface with: "I am a B average student and so, my code reflects."


import {useState, useEffect} from 'react'
// import useSave from './Content/sandbox/useSave'
import useDocumentTitle from './sandbox/useDocumentTitle'
import useProductCounter from './sandbox/useProductCounter'
import useFetch from './sandbox/useFetch'

const Sandbox = () => {
    // useDocumentTitle customHook
    const [title, setTitle] = useState("")
    // useDocumentTitle(title) //Example
    // useDocumentTitle("Sandbox") //Hardcoded
    useDocumentTitle( title.length > 0 ? `${title}`: 'Sandbox') //Complicated example

    const {count, increment, decrement} = useProductCounter() //2
    const {get, post} = useFetch("http://localhost:3002/") //3 & 4
    const [data, setData] = useState([]) // 3
    const [toggle, setToggle] = useState(false) //3
    const [name, setName] = useState() // 4
    const [username, setUserName] = useState() //4
    const [pData, setPData] = useState([]) //4
    
    const handleToggleButton = () => {
        try{
            get("data.json").then(data => {setData(data); setPData(data); setToggle(!toggle)})
        }
        catch (error) {
            console.log(error)
        }
        
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        try {
            post("data.json", {
                name: name,
                username: username
            })
            .then(data => {
                if(data){
                    setPData([...pData, {
                        id: pData.length + 1,
                        name: name,
                        username: username
                        }]);
                    setName("");
                    setUserName("");
                }
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    console.log(pData)

    return <>
        <div className="w-1/2 py-4 ml-auto mr-auto space-x-3 space-y-5 bg-white rounded">
            <div className="flex justify-center">
                <h1 className="text-2xl">Sandbox/Portfolio/Playpen......who knows?</h1>
            </div>
            <div className="flex justify-between px-5">
                <p>1. Update Document title to something other than Sandbox</p>
                <input className="border-2 border-black"  value={title} onChange={e => setTitle(e.target.value)} size="10"></input>
            </div>
            <div className="flex justify-between px-5">
                <p>2. Custom Hooks with State</p>
                <div className="flex space-x-10 justify-evenly">
                    <p>Count: <span className="font-semibold">{count}</span></p>
                    <button className="p-2 text-white bg-indigo-500 rounded shadow" onClick={increment}>+1</button>
                    <button className={`p-2 text-white rounded shadow ${count > 0 ? "bg-pink-500 ": "bg-gray-600 cursor-not-allowed"}`} disabled={count === 0 ? "false": ""} onClick={decrement}>-1</button>
                </div>
            </div>
            <div className="flex justify-between px-5">
                <p>3. Custom useFetch Hook (pulls up a name)</p>
                <div className="flex space-x-10 justify-evenly">
                  <button onClick={() => handleToggleButton()} className={`text-white bg-indigo-400 rounded hover:bg-indigo-700 py-2 px-4 shadow`}>
                            {!toggle ? "Refresh":"Get" }
                        </button>
                    {!toggle ? data.map((x) => <p class="space-x-3">{x.name}</p>) : ""}
                </div>
            </div>
            <div className="flex justify-between px-5">
                <p>4. Custom useFetch Hook (post data)</p>
                <form onSubmit={handleFormSubmit} >
                    <input className="border-b-2 border-green-200 focus:border-green-400" type="text" value={name} name="name" onChange={event => setName(event.target.value)} placeholder="Enter name" />
                    <input className="border-b-2 border-green-200" type="text" value={username} name="uname" onChange={event => setUserName(event.target.value)} placeholder="username?" />
                    <input className="px-2 py-1 text-black bg-gray-200 rounded shadow hover:bg-gray-400" type="submit" />
                </form>
            </div>
            
        </div>
    </>
}

export default Sandbox
