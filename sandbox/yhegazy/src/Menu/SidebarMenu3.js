import {useState} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import menuItems from '../Menu/MenuItems2'

const SIDEBAR_LOGONAME = "text-2xl font-semibold text-white transition duration-300 delay-100 ease"
const LOGO_DETAILS = "flex w-full h-16 mt-4 text-center"

const SidebarMenu2 = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [subToggle, setSubToggle] = useState(-1)

    return <>
        <div className={` sidebar left-full ${menuToggle ? "SIDEBAR_OPEN" : "SIDEBAR_CLOSED close"}`}>
             <div className={LOGO_DETAILS}>
                <i className={` text-3xl text-white h-12 w-20 px-7 text-center  ${menuToggle ? "bx bx-x" : "bx bx-menu" }`} 
                    onClick={() => setMenuToggle(!menuToggle)}>
                </i>
                <p className={SIDEBAR_LOGONAME}>LOGONAME</p>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => 
                    <li key={item.id}>
                        <div className={menuToggle ? "flex item-center justify-between":"block"}  onClick={() => setSubToggle(item.id)}>
                            <p className="flex items-center no-underline">
                                <i className={item.icon} ></i>
                                <span className={menuToggle ? "text-lg text-white transition-all duration-500 ease-linear ": "opacity-0 pointer-events-none"}>{item.title}</span>
                            </p>
                            {menuToggle && item.subMenus &&
                                <i id={item.id} className="px-5 bx bx-caret-down"  ></i>}
                        </div>
            
                            <ul className={subToggle === item.id &&menuToggle ? "text-lg text-white opacity-100" : "sub-menu hidden"}>
                        
                            <li>
                               {menuToggle ? "" :  <p className="text-lg text-white transition-all duration-500 ease-linear ">{item.title}</p>}
                            </li>
                            {item.subMenus && item.subMenus.map((subItem, index) => <li id={index} className={menuToggle && "w-1/2 pb-1 ml-auto mr-auto"}>
                                 <p className="py-1 text-white transition-all duration-300 ease-linear whitespace-nowrap hover:opacity-100">{subItem.title}</p>
                            </li>)}
                        </ul>
                    </li>
                )}

                <li>
                    <div className={`fixed bottom-10 ${menuToggle ? " SIDEBAR_OPEN flex items-center justify-between p-3 space-x-2 transition-all duration-500 ease-out" : " w-16"}`}> 
                        <div className="flex items-center">
                            
                            <img src="profile.jpg" alt="profileImg" className={`${menuToggle ? "h-12 w-12 object-cover rounded-full": "p-1"}`} />
                        </div>
                        <div>
                            <p className={menuToggle ? "font-semibold text-white whitespace-nowrap": "hidden"}>John Doe</p>
                            <p className={menuToggle ? "text-white text-xs whitespace-nowrap " : "hidden"}>Web Developer</p>
                        </div>
                        <i className={menuToggle ? 'bx bx-log-out': "hidden"} ></i>
                    </div>
                </li>
            </ul>
        </div>
    </>
}

export default SidebarMenu2