import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <section className='about-me' id="me">
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__line'></div>
            <div className='about-me__photo'></div>
            <h3 className='about-me__name'>Виталий</h3>
            <h3 className='about-me__profession'>Фронтенд-разработчик, 30 лет</h3>
            <h4 className='about-me__description'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                                                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                                                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
                                                    начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </h4>
            <div className='about-me__social-networks'>
                <a className='about-me__social-networks_link' href='https://www.facebook.com/movchanDmitriy/' target="_ blank">Facebook</a>
                <a className='about-me__social-networks_link' href='https://github.com/DmitriyMovchan' target="_ blank">Github</a>
            </div>
            <h3 className='about-me__portfolio'>Портфолио</h3>
            <a className='about-me__links' href="https://dmitriymovchan.github.io/how-to-learn/" target="_ blank">
                <h3 className='about-me__links_text'>Статичный сайт</h3>
                <div className='about-me__links_img'></div>
            </a>
            <div className='about-me__links_line'></div>
            <a className='about-me__links' href="https://dmitriymovchan.github.io/russian-travel/" target="_ blank">
                <h3 className='about-me__links_text'>Адаптивный сайт</h3>
                <div className='about-me__links_img'></div>
            </a>
            <div className='about-me__links_line'></div>
            <a className='about-me__links' href="http://mesto.movchan.nomoreparties.sbs/" target="_ blank">
                <h3 className='about-me__links_text'>Одностраничное приложение</h3>
                <div className='about-me__links_img'></div>
            </a>
        </section>
    )
}

export default AboutMe;