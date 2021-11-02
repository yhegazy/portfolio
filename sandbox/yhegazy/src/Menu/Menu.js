import React, {useState} from 'react'
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { SidebarData } from './MenuData'

const Menu = () => {
    const [toggle, setToggle] = useState(false)

    const handleMenuClick = () => {
        setToggle(!toggle)
    }

    return <>
        {/* Menu Hamburger upper left corner */}
        <div className="px-5 py-3 text-white flex space-x-9">
            <button onClick={handleMenuClick}>
                { !toggle ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg> 

                : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                }
            </button>
            <div className={`flex space-x-7 ${!toggle ? "hidden": ""}`}>
                {/* <BrowserRouter> */}
                {SidebarData.map((data, index) => {
                    return <>
                    {/* <Link to={`/Content${data.path}`} component={data.title}> */}
                        <div className={`flex space-x-2 px-3 pt-1 border-b-2 hover:border-blue-500`} key={data.title}>
                            
                                {data.icon}
                                <p>{data.title}</p>
                           
                        </div>
                    {/* </Link> */}
                    </>
                })}

                {/* <Switch>

                </Switch>
                </BrowserRouter> */}
                
            </div>
           
               

                
            
        </div>
    </>
}

export default Menu
