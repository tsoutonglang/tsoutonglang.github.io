import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Tania Soutonglang</h1>

                <div className="footer_social">
                    <a href="mailto:tsoutonglang12@gmail.com" className="footer_social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-fast-mail"></i>
                    </a>

                    <a href="https://github.com/tsoutonglang/" className="footer_social-link" target="_blank" rel="noreferrer">
                        <i class="uil uil-github-alt"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/taniasoutonglang/" className="footer_social-link" target="_blank" rel="noreferrer">
                        <i class='bx bxl-linkedin'></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
    
export default Footer