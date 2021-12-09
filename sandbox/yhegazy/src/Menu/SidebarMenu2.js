import {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import menuItems from '../Menu/MenuItems2'

const SIDEBAR_LOGONAME = "text-2xl font-semibold text-white transition duration-300 delay-100 ease"
const SIDEBAR_LOGOICON = 'text-3xl text-white text-center leading-normal mx-4'
const SIDEBAR_MENUICON = "text-2xl text-center leading-normal mx-4"
const SIDEBAR_MENUSPAN = "text-xl font-medium text-center align-baseline "

const SidebarMenu2 = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [subToggle, setSubToggle] = useState(-1)
    

    return <>
        <nav className={`SIDEBAR ${menuToggle ? "SIDEBAR_OPEN": "SIDEBAR_CLOSED"}`}>
            <div className="flex items-center w-full h-auto">
                <i 
                    className={` ${SIDEBAR_LOGOICON} ${menuToggle ? "bx bx-x" : "bx bx-menu" }`} 
                    onClick={() => setMenuToggle(!menuToggle)}>
                </i>
                <p className={SIDEBAR_LOGONAME}>LOGONAME</p>
            </div>

            <ul className={menuToggle ? "SUBMENU_UL text-white" : "bg-indigo-50"}>
                {menuItems.map((item) => 
                    <li key={item.id} className="my-6 rounded-lg SUBMENU_LI">
                        <div className="space-x-2" onClick={() => setSubToggle(item.id)} > 
                            <i className={`${SIDEBAR_MENUICON} ${item.icon}`}></i>
                            <span className={SIDEBAR_MENUSPAN}>{menuToggle ? item.title : ''}</span>
                            {item.subMenus &&
                                <i id={item.id} className="px-5 bx bx-caret-down"  ></i>}
                        </div>
                        {item.subMenus && item.subMenus.map((subItem) => {
                            return <>
                                {subToggle === item.id && <ul>
                                    <li>
                                        <div>
                                            <i className={`${SIDEBAR_MENUICON} ${subItem.icon}`}></i>
                                            <span className={SIDEBAR_MENUSPAN}>{menuToggle && subItem.title}</span>
                                        </div>
                                    </li>
                                </ul>}
                            </>
                        }) 
                        }
                    </li>
                
                )}
                
            </ul>
        </nav>
    </>
}

export default SidebarMenu2