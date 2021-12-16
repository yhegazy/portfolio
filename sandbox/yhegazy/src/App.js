import {useState} from 'react'
import {BrowserRouter, Route, Switch,} from 'react-router-dom'
import Welcome from './component/Welcome'
import Sandbox from './component/Sandbox'
import Konva from './component/Konva'
import Paper from './component/Paper'
import Fabric from './component/Fabric'

import SidebarMenu3 from './Menu/SidebarMenu3'

import "./css/general.css"
import "./css/index.css"
import "./css/sidebar.css"




const BORDER_COLOR = ['border-blue-500','border-green-500', 'border-yellow-500', 'border-red-500', 'border-indigo-500','border-purple-500']
const BG_COLORS = ['bg-blue-500','bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-indigo-500','bg-purple-500']

function App() {
  const [displaySizeColor] = useState("bg-blue-500")
  

  
  return <>
    <div className={`App ${displaySizeColor}`}>
      <BrowserRouter> 
        {/* Menu */}
        <SidebarMenu3 />
        
        {/* Content  */}
        <Switch>
          <Route exact path="/">
            <Welcome dsc={displaySizeColor} key="2" />
          </Route>
          
          <Route exact path="/sandbox">
            <Sandbox />
          </Route>
          <Route exact path="/konva">
            <Konva />
          </Route>

          <Route exact path="/paper">
            <Paper />
          </Route>

           <Route exact path="/fabric">
            <Fabric />
          </Route>
      
        </Switch>
      </BrowserRouter>

      {/* Footer */}
      <div className="flex justify-between px-10 text-white bg-gray-600 footer--pin">
        <p>Made in ReactJS </p>
        <p>Day/Dark Mode</p>
      </div>
    </div>
  </>
}

export default App;
