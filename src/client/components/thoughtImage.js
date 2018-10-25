import React from 'react'
import './thoughtImage.less'

const ThoughtImage = ({hide}) =>{
    return(
            <div className={hide ? "visible": undefined}>
                <img src='/img/backGround.jpg' alt="Technology Quote"/>
            </div>)
}
export default ThoughtImage