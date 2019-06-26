import React from 'react'
import {Icon,Image,Menu} from "semantic-ui-react"
import "./Subscription.scss"

const Subscription = ({label,broadcasting, amountNewVideos}) => {

    let rightElement = null;
    if(broadcasting){
        rightElement=<Icon name="signal"/>
    }else if(amountNewVideos){
        rightElement= <span className="new-videos">{amountNewVideos}</span>
    }

    return (
        <div>
            <Menu.Item>
                <div className="subscription">
                    <div>
                        <Image src="http://via.placeholder.com/28x28" avatar />
                        <span>{label}</span>
                    </div>
                    {rightElement}
                </div>
            </Menu.Item>
        </div>
    )
}

export default Subscription
