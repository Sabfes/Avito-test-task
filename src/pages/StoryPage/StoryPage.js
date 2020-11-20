import React, {Fragment, useEffect} from 'react'
import classes from './StoryPage.module.css'
import {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {getInfo, getStoryComments} from "../../redux/actions/StoryPageActions";
import {convertToTime} from "../../utils/utils";
import Loader from "../../components/Loader/Loader";
import Comments from "../../components/Comments/Comments";

const StoryPage = props => {
    useEffect(()=> {
        props.getInfo(props.match.params.id)
        updateComments()

        let timer = setInterval(() => {
                updateComments()
            },
            60000
        )
        return ()=> clearInterval(timer)
    },[])


    const story = props.storyInfo
    const date = convertToTime(story.time)

    const updateComments = () => {
        props.getStoryComments(props.match.params.id)
        console.log('update comments')
    }

    return (
        <Fragment>
        {
            props.isFetching
                ? <Loader />
                : <div className={classes.StoryPage}>

                    <div className={classes.StoryPage__info}>
                        <h1 className={classes.StoryPage__title}>{story.title}</h1>
                        <p className={classes.StoryPage__text}>{story.text || 'The author didn\'t have time to come up with anything :З'}</p>
                        <span className={classes.StoryPage__commTitle}>Comments: {story.descendants || 0}</span>

                        <div className={classes.StoryPage__comments}>
                            {
                                props.comments
                                    ? props.comments.map((el,i) => {
                                            return (
                                                <Comments
                                                    key={i}
                                                    author={el.by}
                                                    kids={el.kids}
                                                    text={el.text}
                                                    time={el.time}
                                                    id={el.id}
                                                />
                                            )
                                        })
                                    : null
                            }
                        </div>


                        <div className={classes.StoryPage__footer}>
                            <div className={classes.StoryPage__btns}>
                                <button onClick={updateComments} className={classes.StoryPage__button}>
                                    Update
                                    <img src="https://img.icons8.com/small/32/000000/messaging-.png"/>
                                </button>
                                <NavLink style={{textDecoration: 'none',}} to={'/'}>
                                    <button className={classes.StoryPage__button}>Back</button>
                                </NavLink>
                                <a target={"_blank"} href={story.url} style={{textDecoration: 'none',}}>
                                    <button className={classes.StoryPage__button}>Link</button>
                                </a>

                            </div>

                            <div className={classes.StoryPage__time}>
                                <img alt="icon" src="https://img.icons8.com/windows/32/000000/clock.png"/>
                                <span>{date}</span>
                                <img alt="icon" src="https://img.icons8.com/windows/32/000000/user-male.png"/>
                                <span>{story.by}</span>
                            </div>
                        </div>
                    </div>
                </div>
        }
        </Fragment>
    )

}

const mapStateToProps = state => {
    return {
        storyInfo: state.storyPage.storyInfo,
        isFetching: state.storyPage.isFetching,
        comments: state.storyPage.comments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfo: (id) => dispatch(getInfo(id)),
        getStoryComments: (id) => dispatch(getStoryComments(id)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(StoryPage)