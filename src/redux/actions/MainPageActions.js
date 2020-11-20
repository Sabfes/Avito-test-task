import {FETCH_TOGGLE, SET_STORIES} from "../types/ActionTypeConstants";
import {getNewStories} from "../../hnAPI/hnAPI";

// ACTIONS
export const setStories = (arr) => {
    return {
        type: SET_STORIES, arr,
    }
}

export const fetchToggle = (bool) => {
    return {
        type: FETCH_TOGGLE, bool,
    }
}

// THUNK
export const getStories = (number) => (dispatch) => {
    dispatch(fetchToggle(true))
    getNewStories(number).then(res => {
        dispatch(setStories(res))
        dispatch(fetchToggle(false))
    })
}