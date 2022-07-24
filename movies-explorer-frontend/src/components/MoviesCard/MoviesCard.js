import React from "react";
import "./MoviesCard.css";

function MoviesCard({ card, text, time }) {
    return (
        <section className="card">
            <img className="card__img" src={card} alt="картинка"></img>
            <div className="card__description">
                <p className="card__description_text">{text}</p>
                <button className="card__description_like" type="submit"></button>
            </div>
            <div className="card__line"></div>
            <p className="card__time">{time}</p>
        </section>
    )
}

export default MoviesCard;