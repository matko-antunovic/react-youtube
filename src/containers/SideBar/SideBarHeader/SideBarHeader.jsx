import React from 'react'
import { Menu, MenuHeader } from 'semantic-ui-react';
import "./SideBarHeader.scss"

const SideBarHeader = ({title}) => {
    
    const heading=title? title.toUpperCase() : "";
    return (
        <Menu.Item>
            <MenuHeader className="sidebar-header">{heading} </MenuHeader>
        </Menu.Item>
    )
}

export default SideBarHeader
