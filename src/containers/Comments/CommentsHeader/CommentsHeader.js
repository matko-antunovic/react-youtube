import React from 'react'
import {Button, Icon} from "semantic-ui-react"
import "./CommentsHeader.scss"

const CommentsHeader = ({commentsAmount}) => {
    return (
        <div className="comments">
            <h4>{commentsAmount} Comments</h4>
            <Button basic compact icon labelPosition='left'  >
            <Icon neme="align left"/>
            Sort By
            </Button>
        </div>
    )
}

export default CommentsHeader

// left labeled