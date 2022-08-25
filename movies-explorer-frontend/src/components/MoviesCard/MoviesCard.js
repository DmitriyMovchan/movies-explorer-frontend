import React from "react";
import "./MoviesCard.css";
import { useLocation } from 'react-router-dom';

function MoviesCard(card) {
    const location = useLocation();
    const [isSaved, setIsSaved] = React.useState(false);
    let isMoviesLiked = true;
    
    if (location.pathname==='/movies') {
        if (card.card && card.card.id && card.savedMovies) 
            isMoviesLiked = card.savedMovies.map((i)=>i.movieId).includes(card.card.id)
    }
    

    function handleSave() {
        card.saveMovies({country: card.card.country,
            director: card.card.director,
            duration: card.card.duration,
            year: card.card.year,
            description: card.card.description,
            image: `https://api.nomoreparties.co/${card.card.image.url}`,
            trailerLink: card.card.trailerLink,
            nameRU: card.card.nameRU,
            nameEN: card.card.nameEN,
            thumbnail:  `https://api.nomoreparties.co/${card.card.image.formats.thumbnail.url}`,
            movieId: card.card.id,})
        
        //card.isLiked(card.card);
        console.log(card)
        setIsSaved(!isSaved);
    }

    function handleDelete() {
        if(location.pathname === '/saved-movies'){
            card.deleteMovieCard(card.card)
        }
        if(location.pathname === '/movies')
        card.deleteMovieCard(card.savedMovies.find((i) => i.movieId===card.card.id))
    }

    return (
        <section className="card" key={card.card.id || card.card.movieId}>
            <div className="card__description">
                <div className="card__info">
                    <p className="card__info_text">{card.card.nameRU}</p>
                    <p className="card__info_time">{card.card.duration} мин</p>
                </div>
                {location.pathname === "/saved-movies" && 
                    <button className="card__description_like_delete" onClick={handleDelete} type="submit"></button>}
                {location.pathname === "/movies" &&
                    <button className={isMoviesLiked ? "card__description_like_green" : "card__description_like"} onClick={isMoviesLiked ? handleDelete : handleSave} type="submit"></button>
                }

            </div>
            
                <a href={card.card.trailerLink} target="_blank" rel="noreferrer">
                    {location.pathname === "/movies" && 
                        <img className="card__img" src={`https://api.nomoreparties.co/${card.card.image.url}`} alt="картинка" />
                    }
                    {location.pathname === "/saved-movies" && 
                        <img className="card__img" src={card.card.image} alt="картинка" />
                    }
                        
                </a>
        </section>
    )
}

export default MoviesCard;