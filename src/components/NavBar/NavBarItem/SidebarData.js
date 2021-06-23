import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';


export const SidebarData = [
  {
    title: 'Lecturer Register Subject',
    path: '/',
    icon: <FaIcons.FaChalkboardTeacher />,
    className: 'menu-link',
    iconClassName: 'menu-icon',
    textClassName: 'menu-text'
  },
  {
    title: 'Department Subject',
    path: '/departmentSubject',
    icon: <MdIcons.MdSubject />,
    className: 'menu-link',
    iconClassName: 'menu-icon',
    textClassName: 'menu-text'
  },
  
];
