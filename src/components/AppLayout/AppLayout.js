import React from 'react';
import "./AppLayout.scss";
import Nav from "../../containers/Nav/Nav"

const AppLayout = ({children}) => {
    return (
        <div className="app-layout">
            <Nav/>
            {children}
        </div>
    )
}

export default AppLayout
