import React, { Component } from 'react';
import "./Home.scss"
import SideBar from "../../containers/SideBar/SideBar"
import VideoGrid from "../VideoGrid/VideoGrid"

class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <SideBar/>
             <div className='home'>
            <div className="responsive-video-grid-container">
            <VideoGrid title='Trending'/>
            <VideoGrid title='Autos & Vehicles' hideDivider={true}/>
            </div></div>
            </React.Fragment>
        )
    }
}
export default Home;
