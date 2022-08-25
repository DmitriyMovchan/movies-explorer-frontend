import React, { useCallback } from "react";
import "./SearchForm.css";
import Preloader from "../Preloader/Preloader";
import apiMovies from "../../utils/MoviesApi";

function SearchForm(props) {
    // const [findedMovies, setFindMovies] = React.useState("");
    const [error, setError] = React.useState("");
    const [formValid, setFormValid] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);
    const [inputText, setInputText] = React.useState('');

    React.useEffect(() => {
        setInputText(props.findedMovies)
    }, [])


    function validate(searchText) {
        if (!(searchText && searchText.trim().length)) {
            setError("Нужно ввести ключевое слово");
            setFormValid(false);
            return false;
        } else {
            setError("");
            setFormValid(true);
            return true;
        }   
    }

    function handleSearchMovie(e) {
        props.setFindMovies(e.target.value);
        validate(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        // console.log('submit 0');
        if (!validate(inputText)) {
            return;
        }
        setError("");
        setSubmitting(true);
        props.onLoadingStatusChange(true);
        // apiMovies.getMovies(findedMovies).filter(({ nameRU }) => nameRU.toLowerCase().includes(findedMovies.toLowerCase()))
        apiMovies.getMovies(inputText)
        .then((res) => {
            setSubmitting(false);
            props.onFetchMovies(res);
            props.onLoadingStatusChange(false);
            //setFindMovies("");
            props.setFindMovies(inputText);
            localStorage.setItem('movies', JSON.stringify(res));
            localStorage.setItem('input', inputText);
            localStorage.setItem('checkbox', props.checkbox);
           
           console.log('submit 1');
        }).catch(e => {
            setSubmitting(false);
            props.onLoadingStatusChange(false);
            props.setErrorMovies(true);
            props.setErrorMoviesText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })
    }

    React.useEffect(() => {
        if (props.findedMovies && !error) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [props.findedMovies, error])

    React.useEffect(() => {
        props.setFindMovies(localStorage.getItem('input'));
    }, []);

    // handleSearchMovie

    const handleInputText = /*useCallback(*/(ev) => {
        setInputText(ev.target.value)
    }/*, [setInputText]);*/

    return (
        <section className="search-form">
            <form className="search-form__flex">
                <div className="search-form__search">
                    <div className="search-form__search_cover">
                        <div className="search-form__search_magnifying-glass"></div>
                        <input 
                            className="search-form__search_input" 
                            type="text" 
                            placeholder="Фильм"
                            value={inputText} 
                            onChange={handleInputText}
                        />
                        <span className="search-form__error">{error}</span>
                    </div>
                    
                    <button 
                        className="search-form__search_img"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        {submitting}
                     </button>
                     
                </div>
                <div className="short-films">
                    <label className="short-films__checkbox">
                    	<input type="checkbox"  checked={props.checkbox}  onClick={() => {props.handleCheckbox(!props.checkbox)}} onChange={props.showShortMovies}></input>
                    	<span className="short-films__switch"></span>
                    </label>
                    <p className="short-films__text">Короткометражки</p>
                </div>
            </form>
            
            <div className="search-form__line"></div>
        </section>
    )
}

export default SearchForm;