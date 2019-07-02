import React from 'react'
import "./Comment.scss";
import {Button, Image} from "semantic-ui-react";
import Ratings from "../../../components/Ratings/Ratings";

const Comment = () => {
    return (
        <div className="comment">
            <Image className="user-image" src="http://via.placeholder.com/48x48" circular/>
            <div className="comment-info">
            <div className="user-name">User name</div>
            <span>Comment text</span>
            <div className='comment-actions'>
            <Ratings likeCount={1}/> 
            <Button size='mini' compact>REPLY</Button>
            </div>

            </div>
        </div>
    )
}

export default Comment
