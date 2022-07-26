import React from "react";
import "./MoviesCard.css";
import {useLocation} from 'react-router-dom';

function MoviesCard({ card }) {

    const location = useLocation();
    const [isSaved, setIsSaved] = React.useState(false);

    function handleSave() {
        setIsSaved(!isSaved);
    }

    return (
        <section className="card">
            <div className="card__description">
                <div className="card__info">
                    <p className="card__info_text">{card.name}</p>
                    <p className="card__info_time">{card.time}</p>
                </div>
                {location.pathname === "/saved-movies" && 
                    <button className="card__description_like_delete" onClick={handleSave} type="submit"></button>}
                {location.pathname === "/movies" &&
                    <button className={isSaved ? "card__description_like" : "card__description_like_green"} onClick={handleSave} type="submit"></button>
                }

            </div>
            <img className="card__img" src={card.image} alt="картинка"></img>
        </section>
    )
}

export default MoviesCard;