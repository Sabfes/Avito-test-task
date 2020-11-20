import {ISFETCH_TOGGLE, SET_STORY_COMMENTS, SET_STORY_INFO} from "../types/ActionTypeConstants";

const initialState = {
    storyInfo: {},
    comments: [],
    isFetching: true,
}

const StoryPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STORY_COMMENTS:
            console.log(action)
            return {
                ...state, comments: action.data,
            }
        case ISFETCH_TOGGLE:
            return {
                ...state, isFetching: action.bool,
            }
        case SET_STORY_INFO:
            return {
                ...state, storyInfo: action.info,
            }
        default:
            return state
    }
}

export default StoryPageReducer
