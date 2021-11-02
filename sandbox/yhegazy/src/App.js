import {useState} from 'react'
import Welcome from './Content/Welcome'
import Menu from './Menu/Menu'
import useSave from './Content/sandbox/useSave'

import "./css/general.css"
import "./css/index.css"


const BORDER_COLOR = ['border-blue-500','border-green-500', 'border-yellow-500', 'border-red-500', 'border-indigo-500','border-purple-500']
const BG_COLORS = ['bg-blue-500','bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-indigo-500','bg-purple-500']

function App() {
  const [displaySizeColor] = useState("bg-blue-500")
 
    

  return <>
    <div className={`App ${displaySizeColor}`}>
      {/* Menu */}
      <Menu dsc={displaySizeColor} key="1"/>

      {/* Content  */}
      <Welcome dsc={displaySizeColor} key="2" />
     {useSave()}


      {/* Footer */}
      <div className="footer--pin flex justify-between px-10 bg-gray-600 text-white">
        <p>Made in React + Typescript</p>
        <p>Day/Dark Mode</p>
      </div>
    </div>
  </>
}

export default App;
