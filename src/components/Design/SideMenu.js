import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Menu, Layout } from "antd";
import {SidebarData1, SidebarData2} from './MenuItems';

const { SubMenu } = Menu;
const { Sider } = Layout;

const rootSubmenuKeys = [];

function SideMenu({collapsed}) {

    const [openKeys, setOpenKeys] = useState([""]);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const role = 1;
    let data = [];
    if (role === 1) {
        data = SidebarData1;
    } else if (role === 2) {
        data = SidebarData2;
    }

    return (
        <Sider collapsedWidth="0" trigger={null} collapsible collapsed={collapsed} style={{zIndex: 1,}}>
            <Menu theme="dark" mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} >
                {data.map((item, index) =>{
                    if (item.subMenu) {
                        rootSubmenuKeys.push(item.title+index);
                    }
                    return item.subMenu.length === 0 ? (
                        <Menu.Item key={item.title+index} icon={item.icon}>
                            <Link to={item.path}>{item.title}</Link>
                        </Menu.Item>
                    ) : (
                        <SubMenu key={item.title+index} icon={item.icon} title={item.title}>
                            {item.subMenu.map((item,index) => {
                                return(
                                    <Menu.Item key={item.title+index}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </Menu.Item>
                                );
                            })}
                        </SubMenu>);
                })}
            </Menu>
        </Sider>
    )
}

export default SideMenu
