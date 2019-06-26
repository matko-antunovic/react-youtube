import React from 'react'
import {Icon, Menu} from "semantic-ui-react"
import "./SideBarItem.scss"

const SideBarItem = ({icon,label,highlight}) => {
    const highlightText =highlight ? "highlight-item" : null;
    return (
        <Menu.Item className={["sidebar-item", highlightText].join(" ")}>
        <div className="sidebar-item-container">
          <span><Icon size="large" name={icon}/></span>
          <span>{label}</span>
        </div>
        </Menu.Item>
    )
}

export default SideBarItem;
