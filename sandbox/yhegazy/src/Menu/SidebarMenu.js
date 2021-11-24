import React, {useState} from 'react'
// First, we get this bad boy working - this is going to take a while so don't give up. I believe that once I clean and convert this to reactjs standards, I can then customize and tweak from there. THIS WILL TAKE ME ALL DAY! I BELIEVE I CAN GET THIS ACCOMPLISHED! useREF!

// I was making this too complicated. I simplified it. Open Menu will have drop downs on display. 


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
        icon: 'bx bx-pie-chart-alt-2',
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
        icon: 'bx bx-pie-chart-alt-2',
    },
];

const SidebarMenu = () => {
    const [mToggle, setMToggle] = useState(false)
    const menuState = "text-lg text-white opacity-100 block"
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
                        <div className="iocn-link">
                            <a href="#">
                                <i className={item.icon} ></i>
                                <span className="link_name">{item.title}</span>
                            </a>
                        </div>
            
                        <ul className={mToggle ? "text-lg text-white opacity-100 px-10 bg-indigo-900" : "sub-menu"}>
                            <li>
                               {mToggle ? "" :  <a className="link_name" href="#">{item.title}</a>}
                            </li>
                            {item.subMenus ? item.subMenus.map((subItem, index) => <li id={index}>
                                <a href="#">{subItem.title}</a>
                            </li>): ""}
                        </ul>
                    </li>
                )}
                <li>
                    <div className={`fixed bottom-0 ${mToggle ? " w-64 flex items-center justify-between bg-gray-700 py-3 space-x-2 transition-all duration-500 ease-out" : " bg-none w-16 p-1"}`}> 
                        <div className="flex items-center">
                            
                            <img src="profile.jpg" alt="profileImg" className={`${mToggle ? "h-12 w-12 object-cover rounded-full bg-indigo-900": "p-1"}`} />
                        </div>
                        <div className="name-job">
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
