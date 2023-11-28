import React from 'react';
import './data.css';
import header from '../../../assets/daisy/header.png';

const Daisy = () => {
    return (
        <section className="data section" id='daisy-the-elf'>
            <h2 className='section_title'>Daisy the Elf</h2>
            <span className="section_subtitle">A Discord Moderation Bot</span>

            <div className="data_container container">
                <div className="data_container-header">
                    <img src={header} alt="" className="data_img" />
                </div>
                
                <div className="data_container-intro grid">
                    {/* stats column */}
                    <div className="data_data">
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
                        Since 2021, I've been programming and overseeing the operations of a dedicated bot for the <i>Anime & Artists</i> server. 
                        The bot serves a dual purpose of efficient server moderation and curated entertainment through a collection of reaction gifs. 
                        While there are plenty of publicly available bots on Discord, my goal was to create a bespoke solution that was tailor-made for the server's first-year celebration.
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

export default Daisy;