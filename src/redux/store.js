import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import MainPageReducer from "./reducers/MainPageReducer";
import StoryPageReducer from "./reducers/StoryPageReducer";


const rootReducer = combineReducers({
    mainPage: MainPageReducer,
    storyPage: StoryPageReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store