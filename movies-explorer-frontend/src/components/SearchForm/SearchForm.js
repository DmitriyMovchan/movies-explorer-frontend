import React from "react";
import "./SearchForm.css";
import Preloader from "../Preloader/Preloader"

function SearchForm() {
    return (
        <section className="search-form">
            <form className="search-form__flex">
                <div className="search-form__search">
                    <div className="search-form__search_cover">
                        <div className="search-form__search_magnifying-glass"></div>
                        <input className="search-form__search_input" type="text" placeholder="Фильм" required></input>
                    </div>
                    <button className="search-form__search_img"></button>
                </div>
                <div className="short-films">
                    <label class="short-films__checkbox">
                    	<input type="checkbox"></input>
                    	<span class="short-films__switch"></span>
                    </label>
                    <p className="short-films__text">Короткометражки</p>
                </div>
            </form>
            <div className="search-form__line"></div>
        </section>
    )
}

export default SearchForm;