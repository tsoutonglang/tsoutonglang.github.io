import React from 'react';

const Info = () => {
    return (
        <div className="about_info grid">
            <a href='/skills'>
                <div className="about_box">
                    <i class='bx bx-award about_icon'></i>
                    
                    <h3 className="about_title">Experience</h3>
                    <span className="about_subtitle">1 Internship</span>
                </div>
            </a>

            <a href="/portfolio" className="href">
                <div className="about_box">
                    <i class='bx bx-briefcase-alt about_icon'></i>

                    <h3 className="about_title">Completed</h3>
                    <span className="about_subtitle">5 Projects</span>
                </div>
            </a>

            <a href="#footer" className="href">
                <div className="about_box">
                    <i class = 'bx bx-support about_icon'></i>

                    <h3 className="about_title">Support</h3>
                    <span className="about_subtitle">Online 24/7</span>
                </div>
            </a>
        </div>
    )
}

export default Info