import React from 'react';
import '../styles/style2.css';
import '../styles/style.css';

function Home() {
    return (
        <div>
            <section className="hero">
                <h1 id="main-text">
                    Leverage <span style={{ color: '#05FF00' }}>YouTube</span> Expertise to get <br /> leads for your <span style={{ color: '#FF00C7' }}>business</span>
                </h1>
                <p id="main-para">
                    N8Wealth is the #1 YouTube "done for you" agency, helping business owners generate <br /> more quality leads with YouTube.
                </p>
                <div id="button-div">
                    <button id="main-button">
                        <a href="/">I want YouTube<br />results</a>
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
                        <h2>Instagram Management</h2>
                    </div>
                    <div className="service-div">
                        <img src="./images/photoshop.png" alt="Photo Editing" />
                        <h2>Photo Editing</h2>
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

            <section className="testimonial">
                <h1>Testimonials</h1>
                <div className="test"><img src="./images/Testimonial/test 1.PNG" alt="Testimonial 1" /><img src="./images/Testimonial/test 2.PNG" alt="Testimonial 2" /></div>
                <div className="test"><img src="./images/Testimonial/test 3.PNG" alt="Testimonial 3" /><img src="./images/Testimonial/test 4.PNG" alt="Testimonial 4" /></div>
            </section>

            <section id="short-video">
                <h2 style={{
                    color: '#FFF',
                    textAlign: 'center',
                    fontFamily: 'Heebo',
                    fontSize: '45px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    marginTop: '-10px',
                    lineHeight: 'normal'
                }}>
                    Sho<span style={{
                        color: '#05FF00',
                        fontFamily: 'Heebo',
                        fontSize: '45px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: 'normal'
                    }}>rts</span>
                </h2>
                <div className="short-container">
                    <video autoPlay muted loop width="240" height="400">
                        <source src="images/short-1.mp4" type="video/mp4" />
                    </video>
                    <video autoPlay muted loop width="240" height="400">
                        <source src="images/short-2.mp4" type="video/mp4" />
                    </video>
                    <video autoPlay muted loop width="240" height="400">
                        <source src="images/short-3.mp4" type="video/mp4" />
                    </video>
                    <video autoPlay muted loop width="240" height="400">
                        <source src="images/short-4.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className="thum">
                <h3 id="thum-text">Thum<span style={{ color: '#fff' }}>b</span><span style={{ color: '#FF00C7' }}>nail</span></h3>
                <div className="thum-container">
                    <img src="images/Thumbnail/1.jpeg" className="imgs" alt="Thumbnail 1" />
                    <img src="images/Thumbnail/2.jpeg" className="imgs" alt="Thumbnail 2" />
                    <img src="images/Thumbnail/3.jpeg" className="imgs" alt="Thumbnail 3" />
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


        </div>
    );
}

export default Home;
