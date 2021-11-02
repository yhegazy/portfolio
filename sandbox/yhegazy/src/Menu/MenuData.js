import React from 'react';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiOutlineHome />,
  },
  {
    title: 'About',
    path: '/about',
    icon: <SiIcons.SiAboutdotme />,
  },
  {
    title: 'Sandbox',
    path: '/sandbox',
    icon: <SiIcons.SiCodesandbox />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoMdContact />,
  },
];