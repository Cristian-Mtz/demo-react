import React from 'react';
import { HomeOutlined, AppstoreOutlined, MailOutlined, SettingOutlined, CalendarOutlined } from "@ant-design/icons";

export const SidebarData1 = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeOutlined />,
        subMenu: []
    },
    {
        title: 'Dashboard',
        path: '#',
        icon: <SettingOutlined />,
        subMenu: [
            {
                title: 'Ventas',
                path: '#',
                icon: <CalendarOutlined />,
            }
        ]
    },
    {
        title: 'Users',
        path: '/tables',
        icon: <AppstoreOutlined />,
        subMenu: []
    },
    {
        title: 'DevOps2',
        path: '#',
        icon: <CalendarOutlined />,
        subMenu: [
            {
                title: 'DevOps',
                path: '#',
                icon: <CalendarOutlined />,
            }
        ]
    }
];

export const SidebarData2 = [
    {
        title: 'Home',
        path: '/',
        icon: <MailOutlined />,
        subMenu: []
    },
    {
        title: 'Users',
        path: '/tables',
        icon: <AppstoreOutlined />,
        subMenu: []
    },
    {
        title: 'DevOps',
        path: '#',
        icon: <SettingOutlined />,
        subMenu: [
        {
            title: 'DevOps',
            path: '#',
            icon: <CalendarOutlined />,
        }
        ]
    }
];