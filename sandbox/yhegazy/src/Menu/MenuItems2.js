
const menuItems = [
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
        { title: "Resume", to: "/about/resume", icon: 'bx bx-face' },
        { title: "Random", to: "/about/random", icon: 'bx bx-subdirectory-right' },
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
        { title: "HTML5 & CSS3", to: "/skeletal", icon: 'bx bx-face' }, 
        { title: "Web scraping", to: "/webscrape", icon: 'bx bx-face' },
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

export default menuItems;