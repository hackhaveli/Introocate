import React from 'react';
import '../styles/style2.css';
import '../styles/style.css';

const VideoEditing = () => {
    return (
        <>
            <section className="hero">
                <h1 id="main-text">
                    Leverage <span style={{ color: '#05ff00' }}>YouTube</span> Expertise to get
                    <br />
                    leads for your <span style={{ color: '#ff00c7' }}>business</span>
                </h1>
                <p id="main-para">
                    N8Wealth is the #1 YouTube "done for you" agency, helping business
                    owners generate <br />
                    more quality leads with YouTube.
                </p>
                <div id="button-div">
                    <button id="main-button">
                        <a href="/">I want YouTube results</a>
                    </button>
                </div>
            </section>

            <div id="my-service" style={{ marginTop: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 className="center" style={{ fontSize: '4vw' }}>Our Services</h1>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="aaa">
                    <div className="service-div">
                        <img src="./images/Youtube logo.png" alt="" />
                        <h2>Youtube managment</h2>
                    </div>
                    <div className="service-div">
                        <img src="./images/imstagram managment.png" alt="" />
                        <h2>Youtube managment</h2>
                    </div>
                    <div className="service-div">
                        <img src="./images/photoshop.png" alt="" />
                        <h2>Youtube managment</h2>
                    </div>
                </div>
            </div>

            <div className="clientsdiv">
                <h1>Clients</h1>
                <div className="clients">
                    <img src="./images/clients/c 1.png" alt="" />
                    <img src="./images/clients/c 2.png" alt="" />
                    <img src="./images/clients/c 3.png" alt="" />
                    <img src="./images/clients/c 4.png" alt="" />
                    <img src="./images/clients/c 5.png" alt="" />
                </div>
            </div>

            <section className="videoediting">
                <img src="./images/photoshop.png" alt="" />
                <h1>Video <span>editing</span> services</h1>
                <div className="videoediting1">
                    <div className="div1">
                        <h2>Colour <span>Grading </span></h2>
                        <img src="./images/pngs/18.1.png" alt="" />
                    </div>
                    <div className="div2">
                        <img src="./images/pngs/18.2.png" alt="" />
                        <div>
                            <h2><span>Audio</span> Editing + sound design</h2>
                        </div>
                    </div>
                </div>
                <div className="videoediting1">
                    <div className="div1">
                        <h2>Motion <span>Graphics </span></h2>
                        <img src="./images/pngs/19.1.png" alt="" />
                    </div>
                    <div className="div2">
                        <img src="./images/pngs/19.2.png" alt="" />
                        <div>
                            <h2>B rolls+cuts+ <span>Transition</span></h2>
                        </div>
                    </div>
                </div>
                <div className="videoediting1">
                    <div className="div1">
                        <h2>Intro/Outro</h2>
                        <img src="./images/pngs/20.1.png" alt="" />
                    </div>
                    <div className="div2">
                        <img src="./images/pngs/20.2.png" alt="" />
                        <div>
                            <h2>Memes+Relvant <span>Images</span></h2>
                        </div>
                    </div>
                </div>
                <div className="videoediting1">
                    <div className="div1">
                        <h2>Captions</h2>
                        <img src="./images/pngs/21.1.png" alt="" />
                    </div>
                    <div className="div2">
                        <img src="./images/pngs/21.2.png" alt="" />
                        <div>
                            <h2><span>Multiple</span> revisions</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work">
                <h1>Our <span>work</span></h1>
                <div className="work1">
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/1.jpeg" alt="" />
                    </div>
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/2.jpeg" alt="" />
                    </div>
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/3.jpeg" alt="" />
                    </div>
                </div>
            </section>

            <section className="results">
                <div className="results1">
                    <div className="result">
                        <img src="./images/results/Picture1.png" alt="" />
                        <img src="./images/results/Picture1.png" alt="" />
                    </div>
                    <div className="result">
                        <h1>Results</h1>
                        <img src="./images/results/Picture3.png" alt="" />
                        <img src="./images/results/Picture4.png" alt="" />
                    </div>
                    <div className="result">
                        <img src="./images/results/Picture5.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="together">
                <h1>Lets <span>Work together</span> :)</h1>
            </section>
            <section className="together intro">
                <h1><i>INTROCATE</i></h1>
            </section>
        </>
    );
};

export default VideoEditing;
