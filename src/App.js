import React, {Fragment, useEffect} from "react";
import {Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/Header/Header";
import StoryPage from "./pages/StoryPage/StoryPage";
import Loader from "./components/Loader/Loader";
import {connect} from "react-redux";
import {getStories} from "./redux/actions/MainPageActions";


function App(props) {
    useEffect(()=> {
        updateNews()

        let timer = setInterval(() => {
                updateNews()
            },
            60000
        )
        return ()=> clearInterval(timer)
    },[])


    const updateNews = () => {
        props.getStories(100)
    }
    return (
        <Fragment>
            {
                props.isFetching
                    ? <Loader />
                    : <div>
                        <Header />
                        <Route path={'/'} exact render={() => <MainPage updateNews={updateNews} />}/>
                        <Route path={'/story/:id?'} exact component={StoryPage}/>
                    </div>
            }

        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        isFetching: state.mainPage.isFetching,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getStories: number => dispatch(getStories(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
