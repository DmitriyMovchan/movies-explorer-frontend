import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import logo from "../../images/card.svg"

function MoviesCardList({cards}) {
    return (
        <section className="card-list">
            <div className="card-list__grid">

            {cards.map((card) => (
                    <MoviesCard key={card.id} card={card}/>
                ))}
            </div>
        <button className="card-list__more">Еще</button>
        </section>
    )
}

export default MoviesCardList;