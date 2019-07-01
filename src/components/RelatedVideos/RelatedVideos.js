import React from 'react'
import VideoPreview from "../VideoPreview/VideoPreview"
import "./RelatedVideos.scss"
import NextUp from "./NextUp/NextUp"

const RelatedVideos = () => {
    return (
        <div className="related-videos">
      <NextUp/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
      <VideoPreview horizontal={true}/>
        </div>
    )
}

export default RelatedVideos
