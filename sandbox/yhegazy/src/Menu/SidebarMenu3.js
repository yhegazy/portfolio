import {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import menuItems from '../Menu/MenuItems2'

const SIDEBAR_ICON = 'text-3xl text-white text-center leading-normal px-4'
const SIDEBAR_LOGO = "text-2xl font-semibold text-white transition duration-300 delay-100 ease"

// "absolute -top-1.5 mt-0 pt-1.5 pl-20 rounded-md block pointer-events-none opacity-20 bg-green-400 "

const SidebarMenu2 = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [menuID, setMenuID] = useState(-1)

    const Open = () => {
        return <>
            <nav className={`SIDEBAR SIDEBAR_OPEN`}>
                <div className="flex items-center w-full h-auto">
                    <i 
                        className={` ${SIDEBAR_ICON} bx bx-x`} 
                        onClick={() => setMenuToggle(!menuToggle)}>
                    </i>
                    <p className={SIDEBAR_LOGO}>LOGONAME</p> 
                </div>

                <ul className="SUBMENU_UL">
                    {menuItems.map((item) => 
                        <li key={item.id} className="SUBMENU_LI">
                            <div>
                                <p className="flex items-center no-underline">
                                    <i className={`SUBMENU_LI_I ${item.icon}`} ></i>
                                    
                                    <span className="text-lg text-white transition-all duration-500 ease-linear">{item.title}</span>
                                </p>
                            </div>
                
                            {/* sub-menu style.css */}
                            <ul className="py-0.5 pr-1.5 -mt-2.5">
                                {item.subMenus ? item.subMenus.map((subItem, index) => {
                                    return <>
                                        <li id={index} className="w-1/2 pb-1 ml-auto mr-auto">
                                            <p className="py-0.5 text-white transition-all duration-300 ease-linear opacity-50 whitespace-nowrap hover:opacity-70">{subItem.title}</p>
                                        </li>
                                    </>
                                })
                                : ""}
                            </ul>
                        </li>
                    )}
                </ul>
            </nav>
        </>
    }

    const Closed = () => {
        return <> 
            <nav className={`SIDEBAR SIDEBAR_CLOSED `}>
                <div>
                    <i 
                        className={` ${SIDEBAR_ICON} bx bx-menu`} 
                        onClick={() => setMenuToggle(!menuToggle)}>
                    </i>
                </div>

                <ul className="overflow-visible">
                    {menuItems.map((item) => 
                        <li key={item.id} className="block px-5 pt-4 rounded-md opacity-100 pointer-events-none left-full duration-0 delay-0">
                            <div className="bg-green-500 ">
                                <p className="flex items-center space-x-3 no-underline">
                                    <i className={`SUBMENU_LI_I ${item.icon}`} ></i>
                                    
                                    <span className="">{item.title}</span>
                                </p>
                            </div>
                
                            {/* sub-menu style.css */}
                            <ul>
                            
                                <li className="SUBMENU_A">
                                {item.title}
                                </li>
                                {item.subMenus ? item.subMenus.map((subItem, index) => {
                                    return <>
                                        <li id={index}>
                                            <p className="py-0.5 text-white transition-all duration-300 ease-linear opacity-50 whitespace-nowrap hover:opacity-70">{subItem.title}</p>
                                        </li>
                                    </>
                                })
                                : ""}
                            </ul>
                        </li>
                    )}
                    
                </ul>
            </nav>
        </>
    }
    
    return <>
    {menuToggle ? <Open /> : <Closed />
        
    }
        
    </>
}

export default SidebarMenu2
