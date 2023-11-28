import React from 'react';
import AboutImg from "../../assets/about.png";

const Extra = () => {
    return (
        <div className="about section">
            <h2 className="section_title">More About Me!</h2>
            <span className="section_subtitle">(≧◡≦)</span>

            <div className="about_container-extra container grid">
                <img src={AboutImg} alt="" className="about_img" />

                <div className="about_data">
                    <p className="about_description">
                        In my free time I enjoy watching anime, crocheting, and playing video games. You can catch me 
                        crocheting new clothes for my plushies or myself and watching <i>One Piece</i> (I'm currently on episode 1026!).
                        I'm currently playing <i>Genshin Impact</i>, <i>Honkai: Star Rail</i>, and <i>The Sims 4</i>. 
                        I also enjoy cosplaying and go to conventions in my free time.
                    </p>

                    <p className="about_description">
                        I'm a second-generation Thai-American. I'm currently learning how to speak Thai and Spanish, 
                        and I hope I can travel the world after I graduate Illinois Tech.
                        I have three cats who are the loves of my life: Jam, Jelly, and Kewpie!
                    </p>
                </div>
            </div>

            <h2 className="section_title">Quick Fun Facts</h2>
            <span className="section_subtitle">˚ʚ♡ɞ˚</span>
            
            <div className="about_funfacts-box">
                <div className="about_group">
                    <div className="about_extra">
                        <i class='bx bx-moon'></i>

                        <div>
                            <h3 className="about_name">Pronouns</h3>
                            <span className="about_fact">she/they</span>
                        </div>
                    </div>

                    <div className="about_extra">
                        <i class='bx bx-baguette'></i>

                        <div>
                            <h3 className="about_name">Favorite Foods</h3>
                            <span className="about_fact">Fries, bread, and sushi</span>
                        </div>
                    </div>

                    <div className="about_extra">
                        <i class='bx bx-heart'></i>

                        <div>
                            <h3 className="about_name">Next Convention</h3>
                            <span className="about_fact">Anime Magic! 2024</span>
                        </div>
                    </div>
                </div>

                <div className="about_group">
                    <div className="about_extra">
                        <i class='bx bx-ghost'></i>

                        <div>
                            <h3 className="about_name">Genshin Impact Main</h3>
                            <span className="about_fact">Childe/Tartaglia</span>
                        </div>
                    </div>

                    <div className="about_extra">
                        <i class='bx bx-cross'></i>

                        <div>
                            <h3 className="about_name">Honkai: Star Rail Main</h3>
                            <span className="about_fact">Jing Yuan</span>
                        </div>
                    </div>

                    <div className="about_extra">
                        <i class='uil uil-tv-retro'></i>

                        <div>
                            <h3 className="about_name">Currently Watching</h3>
                            <span className="about_fact">One Piece, Jujutsu Kaisen,
                                <br/>The Fall of the House of Usher</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extra