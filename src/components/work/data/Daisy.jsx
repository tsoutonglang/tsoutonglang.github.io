import React from 'react';
import './data.css';
import daisy from '../../../assets/daisy/daisy.png';

const Daisy = () => {
    return (
        <section className="data section" id='daisy-the-elf'>
            <h2 className='section_title'>Daisy the Elf</h2>
            <span className="section_subtitle">A Discord Moderation Bot</span>

            <div className="data_container container">
                <div className="data_container-grid grid">
                    {/* stats column */}
                    <div className="data_data">
                        <img src={daisy} alt="" className="data_img" />

                        <div className="data_stats">
                            <p className="data_stat_title">My Role</p>
                            <span className="data_stat">Programmer, designer</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Duration</p>
                            <span className="data_stat">Ongoing since June 2021</span>
                        </div>

                        <div className="data_stats">
                            <p className="data_stat_title">Tools</p>
                            <span className="data_stat">Discord.js library for programming
                            <br/>Clip Studio Paint for the art</span>
                        </div>
                    </div>

                    {/* desc column */}
                    <div className="data_data">
                        <p className="data_description">
                            A Discord bot created for the server <i>Anime & Artists</i>.
                        </p>
                    </div>
                </div>

                <div className="data_container-wip">
                    <h3 className="data_title">Process</h3>
                    <p>This is the wip section</p>
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

export default Daisy;