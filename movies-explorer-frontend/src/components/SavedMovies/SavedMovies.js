import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import cards from "../../utils/cards";

function SavedMovies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList cards={cards}/>
            <Footer />
        </>
    )
}

export default SavedMovies;