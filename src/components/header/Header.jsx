import React, { useState } from 'react'
import "./header.css";

const Header = () => {
    /* ==== Toggle Menu ==== */
    const [Toggle, showMenu]= useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nac_logo">Tania</a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active-link">
                                <i className="util uil-estate nav_icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="util uil-user nav_icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="util uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>

                        {/* <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <i className="util uil-briefcase-alt nav_icon"></i> Services
                            </a>
                        </li> */}

                        <li className="nav_item">
                            <a href="#portfolio" className="nav_link">
                                <i className="util uil-scenery nav_icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="util uil-message nav_icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i class="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header