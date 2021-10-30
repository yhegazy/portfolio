import "./css/general.css"
import "./css/index.css"
import {useState} from 'react'

function App() {

  const [displaySizeColor] = useState("bg-blue-300")

  return <>
  <div className={`${displaySizeColor}`}>
    {/* Menu Hamburger upper left corner */}
    <div className="px-5 py-3 text-white">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>      
    </div>


    {/* Content  */}



    <div className="content-container ml-auto mr-auto w-2/3 py-48">
      <div className="grid justify-items-center text-7xl text-gray-100 space-y-10">
        <h1 className="strokeme">
          <span className="text-9xl text-yellow-300">H</span>ello and 
          <span className="text-9xl text-yellow-300">W</span>elcome
        </h1>
        <p className="strokeme">
          <span className="text-7xl">M</span>
          <span className="text-6xl">y name is
            <span className="text-yellow-300 font-semibold"> Yahia Hegazy
            </span>
          </span>
        </p>
      </div>
    </div>

    {/* Footer */}
    <div className="footer--pin flex justify-between px-10 bg-gray-600 text-white">
      <p>Made in React + Typescript</p>
      <p>Day/Dark Mode</p>

    </div>
      
  </div>
  
  </>
}

export default App;
