import React, { Component } from "react";
import "./VideoInfoBox.scss";
import { Image, Button,Divider } from "semantic-ui-react";

class VideoInfoBox extends Component{

    state={
        collapsed:true
    }

    onToggle=()=>{
        this.setState(prevState=>{
            return {collapsed: !prevState.collapsed}
            
        })
    }

  render() {
    let descText = "collapsed";
    let buttonTitle = "Show More";
    if (!this.state.collapsed) {
        descText = 'expanded';
      buttonTitle = 'Show Less';
    }
    return (
   
      <div className="video-info-box">
        <Image
          className="channel-image"
          src="http://via.placeholder.com/48x48"
          circular
        />
        <div className="video-info">
          <div className="channel-name">Channel Name</div>
          <div className="video-publication-date">Thu 24, 2017</div>
        </div>
        <Button compact color="youtube">91.5K Subscribe</Button>
        <div className="video-description">
        <div className={descText}>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
          <p>Paragraph 4</p>
          <p>Paragraph 5</p>
          </div>
          <Button compact onClick={this.onToggle}>{buttonTitle}</Button>
        </div>
      </div>
    
    );
  }
}
export default VideoInfoBox;
