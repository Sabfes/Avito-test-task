import {FETCH_TOGGLE, SET_STORIES} from "../types/ActionTypeConstants";

const initialState = {
    stories: [],
    isFetching: true,
}

const MainPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOGGLE:
            return {
                ...state, isFetching: action.bool,
            }
        case SET_STORIES:
            return {
                ...state, stories: [...action.arr],
            }
        default:
            return state
    }
}
export default MainPageReducer