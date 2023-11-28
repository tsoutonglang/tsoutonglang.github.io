import React from 'react';
import './data.css';
import header from '../../../assets/to_all_the_boys/header.png';

const ToAllTheBoys = () => {
    return (
        <section className="data section" id='id'>
            <h2 className='section_title'>To All the Boys I've Loved Before</h2>
            <span className="section_subtitle">A Video Game</span>

            <div className="data_container container">
                <div className="data_container-header">
                    <img src={header} alt="" className="data_img" />
                </div>
                
                <div className="data_container-intro grid">
                    {/* stats column */}
                    <div className="data_data">
                        <div className="data_stats">
                            <p className="data_stat_title">My Role</p>
                            <span className="data_stat">Designer</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Duration</p>
                            <span className="data_stat">September 2022</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Tools</p>
                            <span className="data_stat">Canva</span>
                        </div>
                    </div>

                    {/* desc column */}
                    <div className="data_data">
                        <p className="data_description">
                            <i>To All the Boys I've Loved Before</i> is an IP video game concept for IIT's HUM 371 Fundamentals of Game Design class.
                        </p>
                    </div>
                </div>

                <div className="data_container-process">
                    <h3 className="data_title">Process</h3>
                    
                    <div className="process_step">
                        <h4> 1. Getting Started</h4>
                        <p>  </p>
                    </div>
                </div>
                
            </div>

            <a href="/portfolio" className="goback">
                <i className="uil uil-arrow-left goback_icon"></i> Portfolio
            </a>

            <a href="/portfolio" className="next">
                Next <i className="uil uil-arrow-right next_icon"></i>
            </a>

        </section>
    )
}

export default ToAllTheBoys;