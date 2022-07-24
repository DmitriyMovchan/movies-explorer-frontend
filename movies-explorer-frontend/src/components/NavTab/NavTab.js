import React from "react";
import "./NavTab.css";

function NavTab() {
    return (
        <>
            <nav className="nav-tab">
                <a className="nav-tab__about" href='#about-project'>О проекте</a>
                <a className="nav-tab__about" href='#technology'>Технологии</a>
                <a className="nav-tab__about" href='#me'>Студент</a>
            </nav>
        </>
    )
}

export default NavTab;