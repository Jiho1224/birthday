import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName : 'nav-text'

    },
    {
        title:'Letter',
        path: '/letter',
        icon: <AiIcons.AiFillMessage />,
        cName : 'nav-text'

    },
    {
        title:'Picture',
        path: '/picture',
        icon: <AiIcons.AiFillPicture />,
        cName : 'nav-text'

    },
    {
        title:'Gift',
        path: '/gift',
        icon: <AiIcons.AiFillGift />,
        cName : 'nav-text'

    },
    {
        title:'Camera',
        path: '/camera',
        icon: <AiIcons.AiFillCamera />,
        cName : 'nav-text'

    },
    {
        title:'HBD',
        path: '/hbd',
        icon: <FaIcons.FaBirthdayCake />,
        cName : 'nav-text'

    }


]