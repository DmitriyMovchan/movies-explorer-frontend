import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import cards from '../../utils/cards'
import Footer from "../Footer/Footer";

function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            <MoviesCardList cards={cards}/>
            <Footer />
        </>
    )
}

export default Movies;