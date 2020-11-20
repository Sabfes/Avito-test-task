import React from 'react';
import classes from './MainPage.module.css'
import {connect} from "react-redux";
import Story from "../../components/Story/Story";
import {NavLink} from "react-router-dom";


const MainPage = (props) => {
    return (
        <div className={classes.MainPage}>

            <button className={classes.MainPage__button} onClick={props.updateNews}>
                Update
            </button>

            <div className={classes.MainPage__container}>
                {
                    props.stories.map((el,i) => {
                        return (
                            <NavLink className={classes.NavLink} to={`story/${el.id}`} key={i}>
                                <Story
                                    id={el.id}
                                    title={el.title}
                                    author={el.by}
                                    time={el.time}
                                    score={el.score}
                                />
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}



function mapStateToProps(state) {
    return {
        stories: state.mainPage.stories,
    }
}

export default connect(mapStateToProps, null)(MainPage)





