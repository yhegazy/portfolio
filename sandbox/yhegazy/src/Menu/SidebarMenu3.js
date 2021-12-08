import React, {useState} from 'react'

export const menuData = [
    {
        id: 1,
        title: 'Home',
        exact: true,
        to: '/',
        icon: 'bx bx-home-alt',
        
    },
    {
        id: 2,
        title: 'About',
        exact: true,
        to: '/about',
        icon: 'bx bx-font',
        subMenus: [
        { title: "Resume", to: "/about/resume" },
        { title: "Random", to: "/about/random" },
        ],
        subIcon: ' bx bx-subdirectory-right'
    },
    {
        id: 3,
        title: 'Sandbox',
        exact: true,
        to: '/sandbox',
        icon: 'bx bx-bracket ',
        subMenus: [
        { title: "Web Dev", to: "/skeletal" }, 
        { title: "Web Scrape", to: "/webscrape" },
        ],
    },
    {
        id: 4,
        title: 'Contact',
        exact: true,
        to: '/contact',
        icon: 'bx bx-comment-detail',
    },
    {
        id: 5,
        title: 'User Profile',
        exact: true,
        to: '/userprofile',
        icon: 'bx bx-face',
    },
];

const sidebarComposition = "fixed top-0 left-0 h-full transition-all duration-500"
const menuComposition = ""
const ToggleCSS = 'text-3xl text-white text-center leading-normal px-4'
const iconComposition = "text-2xl text-center leading-normal mx-4"
const spanComposition = "text-xl font-medium text-center align-baseline "


const SidebarMenu = () => {
    const [mToggle, setMToggle] = useState(false)
    const handleMenuItemToggle = () =>  setMToggle(!mToggle)

return <>

        <nav className={`sidebar ${mToggle ? "" : "close"}`}>
            <div className="logo-details">
                <i 
                    className={` ${ToggleCSS} ${mToggle ? "bx bx-x" : "bx bx-menu" }`} 
                    onClick={() => setMToggle(!mToggle)}>
                </i>
            </div>
            <ul className="nav-links">
                {menuData.map((item) => 
                    <li key={item.id}>
                        <div className={mToggle ? "flex item-center justify-between":"block"}>
                            <p className="flex items-center no-underline">
                                <i className={item.icon} ></i>
                                <span className={mToggle ? "text-lg text-white transition-all duration-500 ease-linear ": "opacity-0 pointer-events-none"}>{item.title}</span>
                            </p>
                        </div>
            
                        {/* sub-menu style.css */}
                        <ul className={mToggle ? "text-lg text-white opacity-100 border-b-4 border-dotted border-gray-800" : "sub-menu"}>
                        
                            <li>
                               {mToggle ? "" :  <p className="text-lg text-white transition-all duration-500 ease-linear ">{item.title}</p>}
                            </li>
                            {item.subMenus ? item.subMenus.map((subItem, index) => {
                                return <>
                                    <li id={index} className={mToggle ? "w-1/2 pb-1 ml-auto mr-auto": ""}>
                                        <p className="py-1 text-white transition-all duration-300 ease-linear whitespace-nowrap opacity-30 hover:opacity-70">{subItem.title}</p>
                                    </li>
                                </>
                            }): ""}
                        </ul>
                    </li>
                )}
                
            </ul>
        </nav>
    </>
}

export default SidebarMenu
