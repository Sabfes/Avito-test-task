import React from 'react'
import classes from './Story.module.css'
import {convertToTime} from "../../utils/utils";

const Story = (props) => {
    const time = convertToTime(props.time)
    return (
        <div className={classes.Story} id={props.id}>
            <h1 className={classes.Story__title}>{props.title}
                <img alt="icon" src="https://img.icons8.com/windows/32/000000/facebook-like.png"/>
                <span className={classes.Story__likeCounter}>{props.score}</span>
            </h1>

            <div className={classes.Story__desc}>
                <div className={classes.Story__author}>
                    <img alt="icon" src="https://img.icons8.com/windows/32/000000/user-male.png"/>
                    <span>{props.author}</span>
                </div>
                <div className={classes.Story__time}>
                    <img alt="icon" src="https://img.icons8.com/windows/32/000000/clock.png"/>
                    <span>{time}</span>
                </div>
            </div>

        </div>
    )
}

export default Story


