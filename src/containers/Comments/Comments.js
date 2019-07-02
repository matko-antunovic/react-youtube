import React, { Component } from 'react'
import CommentsHeader from "./CommentsHeader/CommentsHeader"
import {Divider} from "semantic-ui-react"
import AddComment from "./AddComment/AddComment"
import Comment from "./Comment/Comment"

class Comments extends Component {
    render() {
        return (
            <div className="comments">
                  <Divider/>
                <CommentsHeader commentsAmount={this.props.commentsAmount} />
                <AddComment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div> 
        )
    }
}
export default Comments;