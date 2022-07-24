import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from '../Navigation/Navigation';

function App() {
    return (
        <div className='page'>
        <Switch>
        <Route exact={true} path="/">
            <Main/>
        </Route>

        <Route path="/movies">
            <Movies />
        </Route>

        <Route path="/saved-movies">
            <SavedMovies />
        </Route>

        <Route path="/profile">
            <Profile />
        </Route>

        <Route path="/signin">
            <Login />
        </Route>

        <Route path="/signup">
            <Register />
        </Route>

        <Route path="/404">
            <PageNotFound />
        </Route>

        <Route path="/menu">
            <Navigation />
        </Route>

        </Switch>
        </div>
    )
}

export default App;
