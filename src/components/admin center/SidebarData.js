import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from "react-icons/md";
// import * as GiIcons from "react-icons/gi";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: 'Home',
    link: '/adHome',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Posts',
    link: '/adPosts',
    icon: <MdIcons.MdLocalPostOffice />,
    cName: 'nav-text'
  },
  {
    title: 'Teacher Staff',
    link: '/adStaff',
    icon: <FaIcons.FaChalkboardTeacher />,
    cName: 'nav-text'
  },
  {
    title: 'Admin Credentials',
    link: '/adCreds',
    icon: <ImIcons.ImKey />,
    cName: 'nav-text'
  }
  ,
  {
    title: 'Student Credentials',
    link: '/adStudents',
    icon: <FaIcons.FaIdBadge />,
    cName: 'nav-text'
  }
  ,
  {
    title: 'Publish',
    link: '/publish',
    icon: <MdIcons.MdPublish />,
    cName: 'nav-text'
  }
];