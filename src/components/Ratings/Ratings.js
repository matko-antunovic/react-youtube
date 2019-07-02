import React from "react";
import "./Ratings.scss";
import {Icon,Progress} from "semantic-ui-react"

const Ratings = ({likeCount , dislikeCount}) => {
    let progress=null;
    if(likeCount && dislikeCount){
        const percent=100*(likeCount/(dislikeCount+likeCount));
        progress=<Progress className="progress" percent={percent} size="tiny"/>
    }
    return (
        <div className="rating">
            <div className="thumbs-up">
                <Icon name="thumbs outline up"/>
                <span>{likeCount}</span>
            </div>
            <div className="thumbs-down">
                <Icon name="thumbs outline down"/>
                <span>{dislikeCount}</span>
            </div>
            {progress}
        </div>
    )
}

export default Ratings
