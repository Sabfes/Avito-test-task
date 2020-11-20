import React, {useState} from 'react'
import classes from './Comments.module.css'
import './Comments.module.css'
import {convertToTime} from "../../utils/utils";
import {getStoryCommentsByStoryId} from "../../hnAPI/hnAPI";

const Comments = (props) => {
    const date = convertToTime(props.time)
    const [comments, setComments] = useState([])

    function onClick(id) {
        getStoryCommentsByStoryId(id).then(res=> {
            setComments(res)
        })
    }
    return (
        <div>
            <div style={props.style} onClick={() => {onClick(props.id)}} className={classes.Comments}>
                <p>{props.text}</p>
                <span className={classes.Comments__author}>{props.author}</span>
                <span className={classes.Comments__date}>{date}</span>
            </div>


            {
                comments
                    ? comments.map((el,i) => {
                        return (<Comments
                            key={i}
                            author={el.by}
                            kids={el.kids}
                            text={el.text}
                            time={el.time}
                            id={el.id}
                            style={{marginLeft: '40px',color: 'darkgrey', cursor: 'pointer'}}
                            onClick={()=> onClick(props.id)}
                        />)
                    })
                    : null
            }
        </div>

    )
}

export default Comments