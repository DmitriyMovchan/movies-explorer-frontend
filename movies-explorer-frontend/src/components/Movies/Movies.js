import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {

    const [errorMovies, setErrorMovies] = React.useState(false);
    const [errorMoviesText, setErrorMoviesText] = React.useState('')

    return (
        <>
            <SearchForm 
                onFetchMovies={props.onFetchMovies}
                onLoadingStatusChange={props.onLoadingStatusChange}
                setErrorMovies={setErrorMovies}
                setErrorMoviesText={setErrorMoviesText}
                checkbox={props.checkbox}
                handleCheckbox={props.handleCheckbox}
                findedMovies={props.findedMovies}
                setFindMovies={props.setFindMovies}
                />
            <MoviesCardList 
                cards={props.cards}
                isLoading={props.isLoading}
                errorMovies={errorMovies}
                errorMoviesText={errorMoviesText}
                isLiked={props.isLiked}
                saveMovies={props.saveMovies}
                deleteMovieCard={props.deleteMovieCard}
                savedMovies={props.savedMovies}
                checkbox={props.checkbox}
                />
        </>
    )
}

export default Movies;