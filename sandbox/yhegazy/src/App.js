import {useState} from 'react'
import Welcome from './Content/Welcome'
import Menu from './Menu/Menu'

import "./css/general.css"
import "./css/index.css"


function App() {
  const [displaySizeColor] = useState("bg-blue-300")
    

  return <>
    <div className={`App ${displaySizeColor}`}>
      {/* Menu */}
      <Menu />

      {/* Content  */}
      <Welcome />

      {/* Footer */}
      <div className="footer--pin flex justify-between px-10 bg-gray-600 text-white">
        <p>Made in React + Typescript</p>
        <p>Day/Dark Mode</p>
      </div>
    </div>
  </>
}

export default App;
