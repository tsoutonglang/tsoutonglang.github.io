import React from 'react';
import './data.css';
import header from '../../../assets/live&evil/header.jpg';

const LiveEvil = () => {
    return (
        <section className="data section" id='id'>
            <h2 className='section_title'>live&evil</h2>
            <span className="section_subtitle">Mixed Media Assignment</span>

            <div className="data_container container">
                <div className="data_container-header">
                    <img src={header} alt="" className="data_img" />
                </div>
                
                <div className="data_container-intro grid">
                    {/* stats column */}
                    <div className="data_data">
                        <div className="data_stats">
                            <p className="data_stat_title">My Role</p>
                            <span className="data_stat">Artist</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Duration</p>
                            <span className="data_stat">May to June 2018</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Materials</p>
                            <span className="data_stat">1 illustration, 1 video, 1 sculpture</span>
                        </div>
                    </div>

                    {/* desc column */}
                    <div className="data_data">
                        <p className="data_description">
                        Description
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

export default LiveEvil;