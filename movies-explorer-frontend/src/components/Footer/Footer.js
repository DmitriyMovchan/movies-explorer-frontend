import React from "react";
import "./Footer.css";


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__cover">
                    <h2 className="footer__description">
                        Учебный проект Яндекс.Практикум х BeatFilm.
                    </h2>
                    <div className="footer__line"></div>
                    <div className="footer__block">
                        <h3 className="footer__block_year">&copy; 2020</h3>
                        <nav className="footer__block_nav">
                            <a className="footer__block_nav-link" href="https://praktikum.yandex.ru/" target="_ blank">Яндекс.Практикум</a>
                            <a className="footer__block_nav-link" href="https://github.com/DmitriyMovchan" target="_ blank">Github</a>
                            <a className="footer__block_nav-link" href="https://www.facebook.com/movchanDmitriy/" target="_ blank">Facebook</a>
                        </nav>
                    </div>
                </div>
            </footer>
        </>
    )
}



export default Footer;