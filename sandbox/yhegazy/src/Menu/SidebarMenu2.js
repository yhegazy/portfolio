import {useEffect, useState} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import menuItems from '../Menu/MenuItems2'
import MenuItems from '../Menu/MenuItems2'


const sidebarComposition = "fixed top-0 left-0 h-full transition-all duration-500"
const menuComposition = ""
const ToggleCSS = 'text-3xl text-white text-center leading-normal px-4'
const iconComposition = "text-2xl text-center leading-normal mx-4"
const spanComposition = "text-xl font-medium text-center align-baseline "
// absolute left-full -top-3 px-4 py-5 opacity-0 block pointer-events-none hover:top-0 hover:opacity-100 hover:pointer-events-auto hover:transition-all hover:duration-500 hover:ease-linear




const SidebarMenu2 = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [subToggle, setSubToggle] = useState(false)
   

    return <>
        <nav className={`${sidebarComposition} ${menuToggle ? 'w-64  bg-indigo-900 bg-opacity-50': 'w-16 '}`}>
            <div>
                <i 
                    className={` ${ToggleCSS} ${menuToggle ? "bx bx-x" : "bx bx-menu" }`} 
                    onClick={() => setMenuToggle(!menuToggle)}>
                </i>
            </div>
            <ul className={menuToggle ? "text-white" : "bg-indigo-50"}>
                {menuItems.map((item) => {
                    return <>
                        <li className="my-6">
                            <div className="space-x-2"> 
                                <i className={`${iconComposition} ${item.icon}`}></i>
                                <span className={spanComposition}>{menuToggle ? item.title : ''}</span>
                                {item.subMenus ? //when clicking on the down arrow, it automatically closes the previous DD. Ignore the animation
                                    <i id={item.id} className="px-5 bx bx-caret-down"></i>: null}
                            </div>
                            {item.subMenus ? !subToggle && item.subMenus.map((subItem) => {
                                return <>
                                    <ul>
                                        <li>
                                            <div>
                                                <i className={`${iconComposition} ${subItem.icon}`}></i>
                                                <span className={spanComposition}>{menuToggle ? subItem.title : ''}</span>
                                            </div>
                                        </li>
                                    </ul>
                                </>
                            }) 
                            :
                                null}
                        </li>
                    </>
                })}
                
            </ul>
        </nav>
    </>
}

export default SidebarMenu2
