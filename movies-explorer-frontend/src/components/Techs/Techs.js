import React from "react";
import "./Techs.css";

function Techs() {
    return (
        <section className="techs" id="technology">
        <div className="techs__block">
            <h2 className="techs__title">Технологии</h2>
            <div className="techs__line"></div>
            <h2 className="techs__about">7 технологий</h2>
            <h3 className="techs__description">На курсе веб-разработки мы освоили технологии, 
                                                которые применили в дипломном проекте.</h3>
            <div className="techs__flex">
                <h3 className="techs__flex_object">HTML</h3>
                <h3 className="techs__flex_object">CSS</h3>
                <h3 className="techs__flex_object">JS</h3>
                <h3 className="techs__flex_object">React</h3>
                <h3 className="techs__flex_object">Git</h3>
                <h3 className="techs__flex_object">Express.js</h3>
                <h3 className="techs__flex_object">mongoDB</h3>
            </div>
        </div>
        </section>
    )
}

export default Techs;