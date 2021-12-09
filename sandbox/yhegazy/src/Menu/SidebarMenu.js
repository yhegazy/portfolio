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
        { title: "HTML5 & CSS3", to: "/skeletal" }, 
        { title: "Web scraping", to: "/webscrape" },
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

const SidebarMenu = () => {
    const [mToggle, setMToggle] = useState(false)
    const handleMenuItemToggle = () =>  setMToggle(!mToggle)

return <>

        <div className={`sidebar ${mToggle ? "" : "close"}`}>
            <div className="logo-details">
                <i className={` text-3xl text-white h-12 w-8 text-center leading-normal px-2 ${mToggle ? "bx bx-x" : "bx bx-menu" }`} onClick={handleMenuItemToggle}></i>
                <span className="logo_name">LOGONAME</span>
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
                            {item.subMenus ? item.subMenus.map((subItem, index) => <li id={index} className={mToggle ? "w-1/2 pb-1 ml-auto mr-auto": ""}>
                                 <p className="py-1 text-white transition-all duration-300 ease-linear whitespace-nowrap opacity-60 hover:opacity-100">{subItem.title}</p>
                            </li>): ""}
                        </ul>
                    </li>
                )}



                {/* Profile */}
                <li>
                    <div className={`fixed bottom-0 ${mToggle ? " w-64 flex items-center justify-between bg-gray-700 py-3 space-x-2 transition-all duration-500 ease-out" : " bg-none w-16 p-1"}`}> 
                        <div className="flex items-center">
                            
                            <img src="profile.jpg" alt="profileImg" className={`${mToggle ? "h-12 w-12 object-cover rounded-full": "p-1"}`} />
                        </div>
                        <div>
                            <p className={mToggle ? "font-semibold text-white whitespace-nowrap": "hidden"}>John Doe</p>
                            <p className={mToggle ? "text-white text-xs whitespace-nowrap " : "hidden"}>Web Developer</p>
                        </div>
                        <i className={mToggle ? 'bx bx-log-out': "hidden"} ></i>
                    </div>
                </li>
            </ul>
        </div>
    </>
}

export default SidebarMenu
