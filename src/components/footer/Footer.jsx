import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Soutonglang</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Projects</a>
                    </li>

                    <li>
                        <a href="#qualification" className="footer_link">Qualification</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://github.com/tsoutonglang/" className="footer_social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/taniasoutonglang/" className="footer_social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
    
export default Footer