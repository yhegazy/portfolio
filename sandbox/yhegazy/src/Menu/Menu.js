import React, {useState} from 'react'

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
                :
                <div className="bg-white text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                }
            </button>
            <div className={`flex space-x-6 ${!toggle ? "hidden": ""}`}>
                <p>Home</p>
                <p>About</p>
                <p>Sandbox</p>
                <p>Contact</p>
            </div>
           
               

                
            
        </div>
    </>
}

export default Menu
