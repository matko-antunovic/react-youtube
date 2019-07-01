import React, { Component } from "react";
import "./VideoPreview.scss";
import { Image } from "semantic-ui-react";


class VideoPreview extends Component {
  render() {
    const horizontal=this.props.horizontal ? "-horizontal" : null;
    return (
      <div className={["video" , horizontal].join("")}>
        <div className="video__thumbnail">
          <Image src="http://via.placeholder.com/210x118" />
          <div className="video__time">
            <span>05:22</span>
          </div>
        </div>
        <div className="video__info">
          <div className="video__title">Video title</div>
          <div className="video__preview">
            <div className="video__channel-title">Channel title</div>
            <div>
              <span>2.1M views • 2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoPreview;
