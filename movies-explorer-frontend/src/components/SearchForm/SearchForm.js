import React from "react";
import "./SearchForm.css";
import apiMovies from "../../utils/MoviesApi";

function SearchForm(props) {
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

    function handleSubmit(e) {
        e.preventDefault();
        if (!validate(inputText)) {
            return;
        }
        setError("");
        props.setErrorMovies(false);
        setSubmitting(true);
        props.onLoadingStatusChange(true);
        if (props.onFetchMovies) {
        apiMovies.getMovies(inputText)
        .then((res) => {
            setSubmitting(false);
            
            props.onLoadingStatusChange(false);
            props.setFindMovies(inputText);
                props.onFetchMovies(res);
                  localStorage.setItem('movies', JSON.stringify(res)); 
            localStorage.setItem('input', inputText);
            localStorage.setItem('checkbox', props.checkbox);
        }).catch(e => {
            setSubmitting(false);
            props.onLoadingStatusChange(false);
            props.setErrorMovies(true);
            props.setErrorMoviesText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        })

        } else {
            props.setFindMovies(inputText);
            localStorage.setItem('input', inputText);
            localStorage.setItem('checkbox', props.checkbox);
            setSubmitting(false);
            props.onLoadingStatusChange(false);
        }
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

    const handleInputText = (ev) => {
        setInputText(ev.target.value)
    }

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