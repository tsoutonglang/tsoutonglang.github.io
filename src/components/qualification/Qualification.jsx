import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My personal journey</span>

            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={
                        toggleState === 1 ?
                            "qualification_button qualification_active button-flex" :
                            "qualification_button button-flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i>Education
                    </div>

                    <div className={
                        toggleState === 2 ?
                            "qualification_button qualification_active button-flex" :
                            "qualification_button button-flex" }
                        onClick={() => toggleTab(2)}    
                    >
                        <i className="i uil uil-briefcase-alt qualification_icon"></i>Experience
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Illinois Institute of Technology</h3>
                                <span className="qualification_subtitle">Undergraduate Co-Terminal Program</span>
                                <div className="qualification_calendar">
                                    <i class='bx bx-calendar-alt'></i> Expected Graduation May 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification_title">Jones College Prep</h3>
                                <span className="qualification_subtitle">High School</span>
                                <div className="qualification_calendar">
                                    <i class='bx bx-calendar-alt'></i> Class of 2019
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Girls Who Code</h3>
                                <span className="qualification_subtitle">Summer Immersion Program</span>
                                <div className="qualification_calendar">
                                    <i class='bx bx-calendar-alt'></i> Jun - Aug 2017
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>


                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Campus Life Ambassador</h3>
                                <span className="qualification_subtitle">Illinois Institute of Technology, Chicago, IL</span>
                                <div className="qualification_calendar">
                                    <i class='bx bx-calendar-alt'></i> May 2023 - May 2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification_title">Artist Intern</h3>
                                <span className="qualification_subtitle">Manga Art Studio, Chicago, IL</span>
                                <div className="qualification_calendar">
                                    <i class='bx bx-calendar-alt'></i> May 2020 - Mar 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Hybrid II Intern</h3>
                                <span className="qualification_subtitle">Onto Adaptive, Chicago, IL</span>
                                <div className="qualification_calendar">
                                    <i class='bx bx-calendar-alt'></i> May - Dec 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification