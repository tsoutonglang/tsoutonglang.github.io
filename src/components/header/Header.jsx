import React, { useState } from 'react';
import "./header.css";
import logo from "../../assets/logo.png"

const Header = () => {
    /* ==== Change Background Header ==== */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the show-header class to a tag with the header tag
        if (this.scrollY >= 200) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    /* ==== Toggle Menu ==== */
    const [Toggle, showMenu]= useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav_logo">
                    <img src={logo} alt="" className="nav_logo-img" />
                </a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        {/* home */}
                        <li className="nav_item">
                            <a href="/" 
                                onClick={() => setActiveNav ('/')} 
                                className={activeNav === "/" ? 
                                    "nav_link active-link" : "nav_link"}
                             >
                                <i className="util uil-estate nav_icon"></i> Home
                            </a>
                        </li>

                        {/* about */}
                        <li className="nav_item">
                            <a href="/about"
                                onClick={() => setActiveNav ('/about')} 
                                className={activeNav === "/about" ? 
                                    "nav_link active-link" : "nav_link"}
                            >
                                <i className="util uil-user nav_icon"></i> About
                            </a>
                        </li>

                        {/* skills */}
                        <li className="nav_item">
                            <a href="/skills" 
                                onClick={() => setActiveNav ('/skills')} 
                                className={activeNav === "/skills" ? 
                                    "nav_link active-link" : "nav_link"}
                            >
                                <i className="util uil-file-alt nav_icon"></i> Skills
                            </a>
                        </li>

                        {/* portfolio */}
                        <li className="nav_item">
                            <a href="/portfolio"
                                onClick={() => setActiveNav ('/portfolio')} 
                                className={activeNav === "/portfolio" ? 
                                    "nav_link active-link" : "nav_link"}
                            >
                                <i className="util uil-scenery nav_icon"></i> Portfolio
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