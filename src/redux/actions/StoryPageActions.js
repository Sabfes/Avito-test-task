import {getStory, getStoryCommentsByStoryId} from "../../hnAPI/hnAPI";
import {ISFETCH_TOGGLE, SET_STORY_COMMENTS, SET_STORY_INFO} from "../types/ActionTypeConstants";

// ACTION
export const setStoryInfo = (info) => {
    return {
        type: SET_STORY_INFO, info
    }
}

export const isfetchToggle = (bool) => {
    return {
        type: ISFETCH_TOGGLE, bool,
    }
}

export const setStoryComments = (data) => {
    return {
        type: SET_STORY_COMMENTS, data,
    }
}

// THUNK

export const getInfo = (id) => (dispatch) => {
    dispatch(isfetchToggle(true))
    getStory(id).then(res => {
        dispatch(setStoryInfo(res))
        dispatch(isfetchToggle(false))
    })
}

export const getStoryComments = (storyid) => (dispatch) => {
    getStoryCommentsByStoryId(storyid).then(res => {
        dispatch(setStoryComments(res))
    })
}