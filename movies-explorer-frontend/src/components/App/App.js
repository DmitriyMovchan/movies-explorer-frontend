import React from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import Preloader from '../Preloader/Preloader';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import { saveMovie, getSavedMovies, deleteMovies, authorize, register, getContent } from '../../utils/MainApi'; 

function App() {
    // фильмы из апи 
    const [movies, setMovies] = React.useState([]);
    // фильмы из моего апи
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [isCheckingToken, setIsCheckinToken] = React.useState(true);
    const [isCardsLoaning, setIsCardsLoading] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const [errLog, setErrLog] = React.useState(false);
    const [textErrLog, setTextErrLog] = React.useState("");
    const [checkbox, setCheckbox] = React.useState(false);
    const [findedMovies, setFindMovies] = React.useState("");
    const [saveFindedMovies, setSaveFindedMovies] = React.useState("")

    React.useEffect(() => {
        setCheckbox(localStorage.getItem('checkbox') === 'true');
        setFindMovies(localStorage.getItem('input'));
        setSaveFindedMovies(localStorage.getItem('inputSave'));
    }, []);

    
    // React.useEffect(() => {
    //     setFindMovies(localStorage.getItem('input'));
    // }, [findedMovies]);

    const handleCheckbox = (value) => {
        setCheckbox(value);
    }
    
    const history = useHistory();

    React.useEffect(() => {
        checkToken();
    }, []);

    const handleRegister = (name, email, password) => {
        return register(name, email, password)
        .then((res) => {
            if (res) {
                handleLogin(email, password)
            }
        })
        .catch((err) => {
            setErrLog(true);
            if (err === 401) {
                setTextErrLog('не верный email или пароль');
            }
            if (err === 500) {
                setTextErrLog('Ошибка сервера');
            }
            if(err ===  409) {
                setTextErrLog('Юзер с таким емейлом уже существует');
            }       
        })
    }

    const handleLogin = (email, password) => {
        return authorize(email, password)
            .then((data) => {
                if (!data.token) {
                    return;
                }
                localStorage.setItem('token', data.token);

                getContent(data.token).then((res) => {
                    setCurrentUser(res);
                    setLoggedIn(true);
                    history.push('/movies');
                })
            })
            .catch((err) => console.log(err))
    }

    // эффект отображени фильмов
    React.useEffect(() => {
        const localMovies = localStorage.getItem('movies');
        if (localMovies) {
            try {
                setMovies(JSON.parse(localMovies));
            } catch (err) {
                localStorage.removeItem('movies');
                setMovies([]);
            }
        } else {
            setMovies([]);
        }
    }, []);

    React.useEffect(() => {
        if (!loggedIn) {
            return
        }
        getSavedMovies().then(response => {
            setSavedMovies(response.filter(x => x.owner === currentUser._id));
        });
    }, [currentUser._id]);

    const onFetchMovies = (movies) => {
        setMovies(movies);
    }
    
// проверка токена
    const checkToken = () => {
        setIsCheckinToken(true);
        const jwt = localStorage.getItem('token');
        if (jwt){
            getContent(jwt)
            .then((res) => {
                if (res){
                    setCurrentUser({
                        email: res.email,
                        name: res.name,
                        _id: res._id
                    });
                    setLoggedIn(true);
                }
                setIsCheckinToken(false);
            }).catch(e => {setIsCheckinToken(false)});
        } else {
            setIsCheckinToken(false);
        }
    }

    // сохранение фильмов
    const saveMovies = (movie) => {
        saveMovie(movie.country,
            movie.director,
            movie.duration,
            movie.year,
            movie.description,
            movie.image,
            movie.trailerLink,
            movie.nameRU,
            movie.nameEN,
            movie.thumbnail,
            movie.movieId)
            .then((res) => {
                setSavedMovies([res, ...savedMovies])
            })
            .catch((err) => console.log(err))
    }

    // удаление фильма
    function deleteMovieCard(movie) {
        deleteMovies(movie._id)
        .then((res) =>{
            setSavedMovies((state) => state.filter((c) => c._id !== movie._id))
        })
        .catch((err) => console.log(err))
    }

    // ф-я логаута
    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('movies');
        localStorage.removeItem('input');
        localStorage.removeItem('checkbox');
        localStorage.removeItem('inputSave')
        setLoggedIn(false);
        history.push('/')
    }

    // ф-я получения контекста юзера
    function handleEditProfile (name, email) {
        getContent(name, email)
        .then((res) => {
            setCurrentUser(res)
        })
        .catch((err) => {
            if(err ===  409) {
                console.log(err)
            }
            if (err === 500) {
               console.log(err)
            }     
        })
        }

   function myFilterFn(card, searchText) {
    let res = true;
    if (checkbox) res = res && card.duration <= 40;
    if (searchText && searchText.trim()) res = res && card.nameRU.toLowerCase().includes(searchText.toLowerCase());
    return res;
   }
    const filteredMovies = movies.filter(x => myFilterFn(x, findedMovies));
    const  filteredSavedMovies = savedMovies ? savedMovies.filter(x => myFilterFn(x, saveFindedMovies)) : [];

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <div className='page'>
        {isCheckingToken ?
            <Preloader/>
            :
        <Switch>   
            
        <Route exact={true} path='/' loggedIn={loggedIn}>
        <Header 
          email={'Регистрация'}
          loggedIn={loggedIn}
         />
            <Main/>
        </Route>

        <ProtectedRoute exact={true} path="/movies"  loggedIn={loggedIn}>
            <Movies cards={filteredMovies}
                onFetchMovies={onFetchMovies}
                onLoadingStatusChange={(value) => {setIsCardsLoading(value)}}
                isLoading={isCardsLoaning}
                saveMovies={saveMovies}
                deleteMovieCard={deleteMovieCard}
                savedMovies={savedMovies}
                checkbox={checkbox}
                handleCheckbox={handleCheckbox}
                findedMovies={findedMovies}
                setFindMovies={setFindMovies}
            />
        </ProtectedRoute>
            
        <ProtectedRoute  exact={true}  path="/saved-movies" loggedIn={loggedIn}>
            <SavedMovies 
                cards={filteredSavedMovies}
                deleteMovieCard={deleteMovieCard}
                savedMovies={savedMovies}
                checkbox={checkbox}
                handleCheckbox={handleCheckbox}
                findedMovies={saveFindedMovies}
                setFindMovies={setSaveFindedMovies}
                onLoadingStatusChange={(value) => {setIsCardsLoading(value)}}
                isLoading={isCardsLoaning}
            />
        </ProtectedRoute>
    
        <ProtectedRoute  exact={true} path="/profile" loggedIn={loggedIn}>
            <Profile 
                handleSignOut={handleSignOut}
                handleEditProfile={handleEditProfile}
            />
        </ProtectedRoute>


        <Route exact={true} path="/signin">
            <Login 
                handleLogin={handleLogin}
            />
        </Route>

        <Route exact={true} path="/signup">
            <Register 
                handleRegister={handleRegister}
                errLog={errLog}
                textErrLog={textErrLog}
            />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>

        </Switch>    
    }
        </div>
        </CurrentUserContext.Provider>
    )
}

export default App;
