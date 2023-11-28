import React from 'react';
import './data.css';
import header from '../../../assets/cosmic_duels/header.png';

const CosmicDuels = () => {
    return (
        <section className="data section" id='cosmic-duels'>
            <h2 className='section_title'>Cosmic Duels</h2>
            <span className="section_subtitle">A Strategy Board Game</span>

            <div className="data_container container">
                <div className="data_container-header">
                    <img src={header} alt="" className="data_img" />
                </div>
                
                <div className="data_container-intro grid">
                    {/* stats column */}
                    <div className="data_data">
                        <div className="data_stats">
                            <p className="data_stat_title">My Role</p>
                            <span className="data_stat">Designer, Artist</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Duration</p>
                            <span className="data_stat">October to December 2022</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Tools</p>
                            <span className="data_stat">Clip Studio Paint for the art</span>
                        </div>
                    </div>

                    {/* desc column */}
                    <div className="data_data">
                        <p className="data_description">
                        <i>Cosmic Duels</i> is a strategy board game group project for IIT's HUM 371 Fundamentals of Game Design class.
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

export default CosmicDuels;