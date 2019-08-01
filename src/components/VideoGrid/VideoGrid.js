import React from "react";
import "./VideoGrid.scss";
import VideoPreview from "../VideoPreview/VideoPreview";
import { Divider } from "semantic-ui-react";
import VideoGridHeader from "./VideoGridHeader/VideoGridHeader"


const VideoGrid = ({ hideDivider,title }) => {
  const divider = hideDivider ? null : <Divider />;
  return (
    <React.Fragment>
     <VideoGridHeader title={title} />
      <div className="video-grid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </React.Fragment>
  );
};

export default VideoGrid;
