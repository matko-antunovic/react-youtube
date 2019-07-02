import React from "react";
import { Button, Divider, Icon } from "semantic-ui-react";
import "./VideoMetadata.scss";
import Ratings from "../../components/Ratings/Ratings";

const VideoMetadata = props => {
  const viewCount = Number(props.viewCount).toLocaleString() || "";

  return (
    <div className="metadata">
      <h3>Video Title</h3>
      <div className="video-stats">
        <span>{viewCount}</span>
        <div className='video-actions' >
        <Ratings likeCount={1000} dislikeCount={100} />
        <Button basic icon labelPosition="left">
          <Icon name="share" />
          Share
        </Button>
        <Button basic icon>
          <Icon name="add circle" />
        </Button>
        <Button basic icon>
          <Icon name="ellipsis horizontal" />
        </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default VideoMetadata;
