import React from 'react';
import '../styles/style2.css';
import '../styles/style.css';

function Youtube() {
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
                    <button id="main-button"><a href="/">I want YouTube results</a></button>
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

            <section className="youtube">
                <img src="./images/Youtube logo.png" alt="YouTube Management" />
                <h1><span>YouTube</span> Management</h1>
                <div className="main">
                    <div className="one">
                        <h2><span>2 THUMBNAILS </span> for each video</h2>
                        <div className="main2">
                            <img src="./images/pngs/5.1.png" alt="Thumbnail 1" />
                            <img src="./images/pngs/5.2.png" alt="Thumbnail 2" />
                        </div>
                    </div>
                    <div className="two">+</div>
                    <div className="three">
                        <div className="flexend">
                            <h2 style={{ marginTop: '6vw', fontSize: '2.5vw' }}><span>A/B</span> Testing</h2>
                        </div>
                        <img src="./images/pngs/5.3.png" alt="A/B Testing" />
                    </div>
                </div>
                <div className="main3">
                    <h1>High quality video editing <br /> tailored for your channel</h1>
                    <div className="pic border-2s">
                        <img src="./images/pngs/6.1.png" alt="Editing 1" className='border-2s inline' />
                        <img src="./images/pngs/6.2.png" alt="Editing 2" className='border-2s inline' />
                        <img src="./images/pngs/6.3.png" alt="Editing 3" className='border-2s inline' />
                    </div>
                </div>
                <div className="main">
                    <div className="one">
                        <h2>Optimised <span>Title, description </span></h2>
                        <div className="main4">
                            <img src="./images/pngs/7.1.png" alt="Optimized Title" />
                        </div>
                    </div>
                    <div className="two">+</div>
                    <div className="three">
                        <div className="flexend">
                            <h2 style={{ marginTop: '6vw', fontSize: '2.5vw' }}><span>SEO </span> for each video</h2>
                        </div>
                        <img src="./images/pngs/7.2.png" alt="SEO" />
                    </div>
                </div>
                <div className="main5">
                    <h2><span>Trending </span> video ideas <br /> for your Niche</h2>
                    <div className="nestedmain5">
                        <img src="./images/pngs/8.png" alt="Trending Video Ideas" />
                    </div>
                </div>
                <div className="main5">
                    <h2><span>Production Guidelines </span>and <br />feedbacks for high-quality videos</h2>
                    <div className="nestedmain5">
                        <img src="./images/pngs/9.png" alt="Production Guidelines" />
                    </div>
                </div>
                <div className="main5">
                    <h2>Weekly meetings for <br /> discussion <span>strategies</span></h2>
                    <div className="nestedmain5">
                        <img style={{ marginTop: '2vw' }} src="./images/pngs/10.png" alt="Weekly Meetings" />
                    </div>
                </div>
                <div className="main5">
                    <h2>Creating graphics and content <br /> for <span>community</span> posts</h2>
                    <div className="nestedmain5">
                        <img style={{ marginTop: '2vw' }} src="./images/pngs/11.png" alt="Community Posts" />
                    </div>
                </div>
            </section>

            <section className="work">
                <h1>Our <span>work</span></h1>
                <div className="work1">
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/1.jpeg" alt="Work Thumbnail 1" />
                    </div>
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/2.jpeg" alt="Work Thumbnail 2" />
                    </div>
                    <div className="thumbnails">
                        <img src="./images/Thumbnail/3.jpeg" alt="Work Thumbnail 3" />
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
            <h2 className="card__title" style={{ fontSize: '39px', margin: '30px' }}>
                <span style={{ color: '#FF00C7' }}>Our</span> Services
            </h2>
            <section id="service-boxs">
                <div className="card">
                    <div className="card__content">
                        <h2 className="card__title">Instagram</h2>
                        <div className="image-div">
                            <img src="images/instagram.png" className="center" alt="Instagram Management" />
                        </div>
                        <h2 className="card__titles">We Can Manage Your Instagram automation of DMs, handling their pages, and account management.</h2>
                        <div className="btn-div-center">
                            <button className="btn">Get Service</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__content">
                        <h2 className="card__title">Content Creation</h2>
                        <div className="image-div">
                            <img src="images/content.png" className="center" alt="Content Creation" />
                        </div>
                        <h2 className="card__titles">We provide content creation services to enhance your social media presence.</h2>
                        <div className="btn-div-center">
                            <button className="btn">Get Service</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__content">
                        <h2 className="card__title">SEO Optimization</h2>
                        <div className="image-div">
                            <img src="images/seo.png" className="center" alt="SEO Optimization" />
                        </div>
                        <h2 className="card__titles">Optimize your online presence with our SEO services.</h2>
                        <div className="btn-div-center">
                            <button className="btn">Get Service</button>
                        </div>
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

export default Youtube;
