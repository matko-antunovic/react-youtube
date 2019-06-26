import React, { Component } from "react";
import { Menu, Divider } from "semantic-ui-react";
import "./SideBar.scss";
import SideBarItem from "./SideBarItem/SideBarItem"
import SidebarHeader from "./SideBarHeader/SideBarHeader";
import Subscription from "./Subscriptions/Subscription";
import SideBarFooter from "./SideBarFooter/SideBarFooter"

class SideBar extends Component {
  render() {
    return (
      <Menu vertical borderless stackable fixed="left" className="side-nav">
        <SidebarHeader title="Main"/>
        <SideBarItem highlight={true} label="Home" icon="home" />
        <SideBarItem label="Trending" icon="fire" />
        <SideBarItem label="Followers" icon="spy" />
        <Divider/>
        <SidebarHeader title="Library"/>
        <SideBarItem label="History" icon="history" />
        <SideBarItem label="Watch later" icon="clock" />
        <SideBarItem label="Liked videos" icon="thumbs up" />
        <Divider/>
        <SidebarHeader title="More from CopyTube"/>
        <SideBarItem label="Movies and Shows" icon="film" />
        <Divider/>
        <SideBarItem label="Report history" icon="flag" />
        <SideBarItem label="Help" icon="help circle" />
        <SideBarItem label="Send feedback" icon="comment" />
        <Divider/>
        <SidebarHeader title="Subscription"/>
        <Subscription label='MusicChannel' broadcasting/>
        <Subscription label='Coursea' amountNewVideos={10}/>
        <Subscription label='TEDx Talks' amountNewVideos={23}/>
        <Subscription label='Stanford iOS' amountNewVideos={4}/>
        <Subscription label='Udacity' amountNewVideos={114}/>
        <Divider/>
        <SideBarFooter/>
      </Menu>
    );
  }
}
export default SideBar;
