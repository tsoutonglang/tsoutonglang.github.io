import React from 'react';
import './data.css';
import header from '../../../assets/in_the_next_life/header.jpg';

const InTheNextLife = () => {
    return (
        <section className="data section" id='id'>
            <h2 className='section_title'>in the next life i hope to meet you and love you again</h2>
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
                            <span className="data_stat">November 2017</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Materials</p>
                            <span className="data_stat">Ink on 100 5½ in. by 8¼ in. book pages</span>
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

export default InTheNextLife;