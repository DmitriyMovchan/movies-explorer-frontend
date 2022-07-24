import React from "react";
import "./AboutProject.css";

function AboutProject() {
    return (
            <section className="about-project" id="about-project">
                <h2 className="about-project__about">О проекте</h2>
                <div className="about-project__line"></div>
                <div className="about-project__grid">
                    <h2 className="about-project__grid_title">Дипломный проект включал 5 этапов</h2>
                    <h3 className="about-project__grid_description">Составление плана, работу над бэкендом, 
                                                                    вёрстку, добавление функциональности и финальные доработки.</h3>
                    <h2 className="about-project__grid_title">На выполнение диплома ушло 5 недель</h2>
                    <h3 className="about-project__grid_description">У каждого этапа был мягкий и жёсткий дедлайн, 
                                                                    которые нужно было соблюдать, чтобы успешно защититься.</h3>
                </div>
                <div className="about-project__grid-week">
                    <h2 className="about-project__grid-week_one-week">1 неделя</h2>
                    <h2 className="about-project__grid-week_four-week">4 недели</h2>
                    <h3 className="about-project__grid-week_back">Back-end</h3>
                    <h3 className="about-project__grid-week_front">Front-end</h3>
                </div>
            </section>
    )
}

export default AboutProject;