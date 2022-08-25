import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {

    const [errorMovies, setErrorMovies] = React.useState(false);
    const [errorMoviesText, setErrorMoviesText] = React.useState('')

    return (
        <>
            <SearchForm 
                checkbox={props.checkbox}
                handleCheckbox={props.handleCheckbox}
                findedMovies={props.findedMovies}
                setFindMovies={props.setFindMovies}
                onLoadingStatusChange={props.onLoadingStatusChange}

                setErrorMovies={setErrorMovies}
                setErrorMoviesText={setErrorMoviesText}
            />
            <MoviesCardList cards={props.cards} 
            deleteMovieCard={props.deleteMovieCard} 
            savedMovies={props.savedMovies} 
            isLoading={props.isLoading}
            errorMovies={errorMovies}
                errorMoviesText={errorMoviesText}
            />
        </>
    )
}

export default SavedMovies;