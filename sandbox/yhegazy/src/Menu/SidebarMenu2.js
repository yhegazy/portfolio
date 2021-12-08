import {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import menuItems from '../Menu/MenuItems2'



// TODO Today:: This is all under something called a MenuToggle. There will be 2 builds, 1 open & 1 closed. Today, I will only focus on the open aspect of this build. In Sha Allah, I will succeed.  - DONE!
const SIDEBAR_ICON = 'text-3xl text-white text-center leading-normal px-4'
const SIDEBAR_LOGO = "text-2xl font-semibold text-white transition duration-300 delay-100 ease"

// "absolute -top-1.5 mt-0 pt-1.5 pl-20 rounded-md block pointer-events-none opacity-20 bg-green-400 "



const SidebarMenu2 = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    
    return <>
        <nav className={`SIDEBAR ${menuToggle ? "SIDEBAR_OPEN" : "SIDEBAR_CLOSED"}`}>
            <div className={menuToggle && "flex items-center w-full h-auto"}>
                <i 
                    className={` ${SIDEBAR_ICON} ${menuToggle ? "bx bx-x" : "bx bx-menu" }`} 
                    onClick={() => setMenuToggle(!menuToggle)}>
                </i>
                <p className={SIDEBAR_LOGO}>LOGONAME</p>
                
            </div>

            <ul className={menuToggle && "SUBMENU_UL"}>
                {menuItems.map((item) => 
                    <li key={item.id} className={menuToggle && "SUBMENU_LI"}>
                        <div className={menuToggle}>
                            <p className="flex items-center no-underline">
                                <i className={`SUBMENU_LI_I ${item.icon}`} ></i>
                                
                                <span className={menuToggle && "text-lg text-white transition-all duration-500 ease-linear"}>{item.title}</span>
                            </p>
                        </div>
            
                        {/* sub-menu style.css */}
                        <ul className={menuToggle && "py-0.5 pr-1.5 -mt-2.5" }>
                        
                            <li className={menuToggle && "block"}>
                               {!menuToggle && <p className="SUBMENU_A">{item.title}</p>}
                            </li>
                            {item.subMenus ? item.subMenus.map((subItem, index) => {
                                return <>
                                    <li id={index} className={menuToggle ? "w-1/2 pb-1 ml-auto mr-auto": ""}>
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

export default SidebarMenu2
