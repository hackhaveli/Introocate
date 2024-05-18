import React from 'react';
import '../styles/style2.css';
import '../styles/style.css';

function Instagram() {
    return (
        <div>
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
                        <img src="./images/Youtube logo.png" alt="YouTube Management" />
                        <h2>YouTube Management</h2>
                    </div>
                    <div className="service-div">
                        <img src="./images/imstagram managment.png" alt="Instagram Management" />
                        <h2>YouTube Management</h2>
                    </div>
                    <div className="service-div">
                        <img src="./images/photoshop.png" alt="Photo Editing" />
                        <h2>YouTube Management</h2>
                    </div>
                </div>
            </div>

            <div className="clientsdiv">
                <h1>Clients</h1>
                <div className="clients">
                    <img src="./images/clients/c 1.png" alt="Client 1" />
                    <img src="./images/clients/c 2.png" alt="Client 2" />
                    <img src="./images/clients/c 3.png" alt="Client 3" />
                    <img src="./images/clients/c 4.png" alt="Client 4" />
                    <img src="./images/clients/c 5.png" alt="Client 5" />
                </div>
            </div>

            <section className="instagram">
                <img src="./images/imstagram managment.png" alt="Instagram Management" />
                <h1><span>Instagram</span> Management</h1>
                <div className="instagram1">
                    <div className="div1">
                        <h2>Creating content <br /> <span>strategy</span></h2>
                        <img src="./images/pngs/13.1.png" alt="Creating content strategy" />
                    </div>
                    <div className="div2">
                        <img src="./images/pngs/13.2.png" alt="Creating graphics" />
                        <div>
                            <h2>Creating graphics for <br /> <span>stories and posts</span></h2>
                        </div>
                    </div>
                </div>
                <div className="instagram1">
                    <div className="div1">
                        <h2> <span>Editing </span>reels</h2>
                        <img src="./images/pngs/14.1.png" alt="Editing reels" />
                    </div>
                    <div className="div2">
                        <img src="./images/pngs/14.2.png" alt="Creating reel covers" />
                        <div>
                            <h2>Creating reel <br /> <span>covers</span></h2>
                        </div>
                    </div>
                </div>
                <div className="instagram1">
                    <div className="div1">
                        <h2>Creating <span>hashtags </span>reels</h2>
                        <img src="./images/pngs/15.1.png" alt="Creating hashtags" />
                    </div>
                    <div className="div2">
                        <img src="./images/pngs/15.2.png" alt="Posting on Instagram" />
                        <div>
                            <h2>Posting on <span>Instagram</span></h2>
                        </div>
                    </div>
                </div>
                <div className="instagram1">
                    <div className="div1">
                        <h2>Managing giveaways <br /> <span>+auto DMs </span></h2>
                        <img src="./images/pngs/16.1.png" alt="Managing giveaways" />
                    </div>
                    <div className="div2">
                        <img src="./images/pngs/16.2.png" alt="Creating analytics report" />
                        <div>
                            <h2>Creating analytics <br /> <span>report</span></h2>
                        </div>
                    </div>
                </div>
            </section>

            <section className="work">
                <h1>Our <span>work</span></h1>
                <div className="work1">
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/1.jpeg" alt="Thumbnail 1" />
                    </div>
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/2.jpeg" alt="Thumbnail 2" />
                    </div>
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/3.jpeg" alt="Thumbnail 3" />
                    </div>
                </div>
            </section>

            <section className="results">
                <div className="results1">
                    <div className="result">
                        <img src="./images/results/Picture1.png" alt="Result 1" />
                        <img src="./images/results/Picture1.png" alt="Result 2" />
                    </div>
                    <div className="result">
                        <h1>Results</h1>
                        <img src="./images/results/Picture3.png" alt="Result 3" />
                        <img src="./images/results/Picture4.png" alt="Result 4" />
                    </div>
                    <div className="result">
                        <img src="./images/results/Picture5.png" alt="Result 5" />
                    </div>
                </div>
            </section>

            <section className="together">
                <h1>Let's <span>Work together</span> :)</h1>
            </section>

            <section className="together intro">
                <h1><i>INTROCATE</i></h1>
            </section>
        </div>
    );
}

export default Instagram;
