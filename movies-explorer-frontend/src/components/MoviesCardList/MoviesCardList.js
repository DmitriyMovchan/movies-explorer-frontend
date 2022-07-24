import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import logo from "../../images/card.svg"

function MoviesCardList() {
    return (
        <section className="card-list">
            <div className="card-list__grid">
            <MoviesCard 
                card={logo}
                text={'здесь будет название'}
                time={'1ч42м'}
            />
            <MoviesCard 
                card={logo}
                text={'здесь будет название'}
                time={'1ч42м'}
            />
            <MoviesCard 
                card={logo}
                text={'здесь будет название'}
                time={'1ч42м'}
            />
            <MoviesCard 
                card={logo}
                text={'здесь будет название'}
                time={'1ч42м'}
            />
            <MoviesCard 
                card={logo}
                text={'здесь будет название'}
                time={'1ч42м'}
            />
            <MoviesCard 
                card={logo}
                text={'здесь будет название'}
                time={'1ч42м'}
            />
            <MoviesCard 
                card={logo}
                text={'здесь будет название'}
                time={'1ч42м'}
            />
            <MoviesCard 
                card={logo}
                text={'здесь будет название'}
                time={'1ч42м'}
            />
            </div>
        <button className="card-list__more">Еще</button>
        </section>
    )
}

export default MoviesCardList;