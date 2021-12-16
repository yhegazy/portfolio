
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
        to: '#',
        icon: 'bx bx-font',
        subMenus: [
        { title: "Me", to: "/me", icon: 'bx bx-face' },
        { title: "Resume", to: "/resume", icon: 'bx bx-subdirectory-right' },
        ],
        subIcon: ' bx bx-subdirectory-right'
    },
    {
        id: 3,
        title: 'Sandbox',
        exact: true,
        to: '#',
        icon: 'bx bx-bracket ',
        subMenus: [
        { title: "ReactJS", to: "/sandbox" }, 
        { title: "Konva", to: "/konva" },
        { title: "PaperJS", to: "/paper" },
        { title: "FabricJS", to: "/fabric" },
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