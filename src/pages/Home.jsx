import React from 'react';
import '../styles/style2.css';
import '../styles/style.css';


function Home() {
    return (
        <div>
            <section className="hero">
                <h1 id="main-text">
                    Helping underated <span style={{ color: '#05FF00' }}>Beginners</span>  <br /> On <span style={{ color: '#FF00C7' }}> <span style={{ color: '#05FF00' }}>Increasing</span><span style={{color:'#fff'}}> and </span> <span style={{ color: '#05FF00' }}>Managing</span> </span>
                </h1>
                {/* <div id="main-para">
                <img src="https://img.icons8.com/?size=100&id=115362&format=png&color=000000" alt="YouTube Management" width='80' />
                        <p> YouTube Management</p>
                </div> */}
                <div class="service-div">
                    <img src="https://img.icons8.com/?size=100&id=115362&format=png&color=000000"/>
                    <p class="paras">Youtube and Buisness Growth</p>
                </div>
                <div id="button-div">
                    <button id="main-button">
                        <a href="/">15min Demo Call</a>
                    </button>
                </div>
            </section>
            
            <div className="para-div">
                <h2 className='Welcomm'>Welcome To <span style={{color: 'rgb(255, 0, 199)'}}>IntroCate</span></h2>
                <p className="Welcomm-para">This is a management agency,That is dedicated to help the hardworking,Individual,who Seriously<br/> Want's an significant increase on their youtube <br/>Buisness </p>
            </div>

            <div id="my-service" style={{ marginTop: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 className="center" style={{ fontSize: '4vw' }}>Our <span style={{ color: '#FF00C7' }}>Services</span></h1>
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
{/* 
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
                </h2> */}
                {/* <div className="short-container">
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
            </section> */}
            {/* <Work/> */}
            

            {/* <section className="thum">
                <h3 id="thum-text">Thum<span style={{ color: '#fff' }}>b</span><span style={{ color: '#FF00C7' }}>nail</span></h3>
                <div className="thum-container">
                    <img src="images/Thumbnail/1.jpeg" className="imgs" alt="Thumbnail 1" />
                    <img src="images/Thumbnail/2.jpeg" className="imgs" alt="Thumbnail 2" />
                    <img src="images/Thumbnail/3.jpeg" className="imgs" alt="Thumbnail 3" />
                </div>
            </section> */}

<h2 className="card__title" style={{ fontSize: '39px', margin: '30px', }}>
               How We <span style={{ color: '#FF00C7' }}>Work's</span>
            </h2>
            
<section id="cardu">
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  We arrange a proper meeting to thoroughly understand your view. We arrange a proper meeting to thoroughly understand your view.
  </div>
</div>
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  We provide some experience-based strategies, offering well-tested solutions and practical insights.
  </div>
  
</div>
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  Helping in improving content, enhancing the quality of information, refining your message, and boosting engagement.
  </div>
  
</div>

</section>
<section id="cardu">
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  We arrange a proper meeting to thoroughly understand your view. We arrange a proper meeting to thoroughly understand your view.
  </div>
</div>
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  We provide some experience-based strategies, offering well-tested solutions and practical insights.
  </div>
  
</div>
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  Helping in improving content, enhancing the quality of information, refining your message, and boosting engagement.
  </div>
  
</div>

</section>



            <h2 className="card__title" style={{ fontSize: '39px', margin: '30px' }}>
               Our <span style={{ color: '#FF00C7' }}>Services</span>
            </h2>
            
          


        </div>
    );
}

export default Home;
