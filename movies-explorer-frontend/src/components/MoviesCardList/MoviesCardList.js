import React from "react";
import "./MoviesCardList.css";
import { useCurrentWidth } from '../../hooks/useCurrentWidth';
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from 'react-router-dom';



function MoviesCardList(props) {
    const location = useLocation();
    const width = useCurrentWidth();
    const getLoadStepMovies = (width) => {
        if (width >= 1280) {
            return 4;
        }
            return 2;
    }

    const getInitialCounts = (width) => {
        if (width >= 1280) {
            return 12;
        }
        if (width >= 768) {
            return 8;
        }
            return 5;
    }

    const [visibleMovies, setVisibleMovies] = React.useState(getInitialCounts(width));
    console.log(props.cards)
    // ф-я показать еще фильмы
    const handleLoadMore = () => {
        setVisibleMovies((prevCount) => prevCount + getLoadStepMovies(width));
    }

    return (
        <section className="card-list">
            <div className="card-list__grid">
            {
                props.isLoading ? <Preloader /> : 
                props.errorMovies ? <div className="cards-list__text">{props.errorMoviesText}</div> :
                props.cards.length > 0 ? 
                (<>
                {location.pathname === '/movies' &&
                props.cards.slice(0, visibleMovies).map((card) => 
                    <MoviesCard key={card.id} card={card} isLiked={props.isLiked} 
                    saveMovies={props.saveMovies} 
                    savedMovies={props.savedMovies} 
                    deleteMovieCard={props.deleteMovieCard}
                    />
                 )}  
                {location.pathname === '/saved-movies' && props.cards.map((card) => 
                    <MoviesCard key={card.moviedId} card={card} saveMovies={props.saveMovies} deleteMovieCard={props.deleteMovieCard} />
                )
                } 
                </>)
                 : <div className="cards-list__text">Ничего не найдено</div>
            }
             {}
            </div>
            {location.pathname === '/movies' && visibleMovies < props.cards.length && (<button className="card-list__more" onClick={handleLoadMore}>Еще</button>)}
        </section>
    )
}

export default MoviesCardList;