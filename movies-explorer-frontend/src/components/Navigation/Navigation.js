import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <div className='menu'>
            <input className='menu__toggle' id="menu__toggle" type="checkbox" />
            <label className='menu__btn' for="menu__toggle">
                    <span></span>
            </label>

            <div className='box'>
                <div className='box__cover'>
                    <ul class="box__nav">
                        <li><a className="box__nav_item menu__item_home" href="/">Главная</a></li>
                        <li><a className="box__nav_item menu__item_movies" href="/movies">Фильмы</a></li>
                        <li><a className="box__nav_item menu__item_save-movies" href="/saved-movies">Сохраненные фильмы</a></li>
                    </ul>
                    <button className='box__button'> 
                        <a className="box__nav_item menu__item_profile" href="/profile">Аккаунт</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;