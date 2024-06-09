import React from 'react';
import '../styles/style2.css';
import '../styles/style.css';
import FAQComponent from '../components/Faqcomponent';
import Form from '../components/Form';
import Started from '../components/Started';
import Testmonial from '../components/Testmonial';



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

{/* ###########################  O U R W O R K ############################## */}
             <h2 className='gradient-text'>Where We Work</h2>
<div className="cards-container">
  <div className="carda shadowa">
    <div className="image-container">
      <img src="https://img.freepik.com/free-vector/blogger-review-concept_23-2148523115.jpg?t=st=1717655577~exp=1717659177~hmac=d52fb48e13c9843c7a3f13cb32fb089ac3c7964edf6c5526246bf6452cefe35c&w=740" alt="YouTube Management" />
      <div className="overlay-text">YouTube Management</div>
    </div>
  </div>
  <div className="carda shadowa">
    <div className="image-container">
      <img src="https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208252.jpg?t=st=1717656214~exp=1717659814~hmac=12fea814b59076d916a56dded852d6280226db9f431565d25c247d2d395fc2ba&w=1060" alt="YouTube Management" />
      <div className="overlay-text">YouTube Management</div>
    </div>
  </div>
  <div className="carda shadowa">
    <div className="image-container">
      <img src="https://img.freepik.com/free-vector/e-sport-game-streaming-abstract-concept-illustration_335657-3855.jpg?t=st=1717656339~exp=1717659939~hmac=fc8f17a6ab355e49f5cfa20694ed475f90e5745ae0452682628caf68d15439ec&w=740" alt="YouTube Management" />
      <div className="overlay-text">YouTube Management</div>
    </div>
  </div>
</div>
{/* ################################################################################################################## */}


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
  <div id="circle"><p>01</p></div>
  We arrange a proper meeting to thoroughly understand your view. We arrange a proper meeting to thoroughly understand your view.
  </div>
</div>
<div class="custom-container">

  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  <div id="circle"><p>02</p></div>
  We provide some experience-based strategies, offering well-tested solutions and practical insights.
  </div>
  
</div>
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  <div id="circle"><p>03</p></div>
  Helping in improving content, enhancing the quality of information, refining your message, and boosting engagement.
  </div>
  
</div>

</section>
<section id="cardu">
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  <div id="circle"><p>04</p></div>
  We arrange a proper meeting to thoroughly understand your view. We arrange a proper meeting to thoroughly understand your view.
  </div>
  
</div>
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  <div id="circle"><p>05</p></div>
  We provide some experience-based strategies, offering well-tested solutions and practical insights.
  </div>
  
</div>
<div class="custom-container">
  <div class="custom-card1"></div>
  <div class="custom-card2"></div>
  <div class="custom-card3">
  <div id="circle"><p>06</p></div>
  Helping in improving content, enhancing the quality of information, refining your message, and boosting engagement.
  </div>
  
</div>

</section>

<FAQComponent/>


<Form/>





            {/* <h2 className="card__title" style={{ fontSize: '39px', margin: '30px' }}>
               Our <span style={{ color: '#FF00C7' }}>Services</span>
            </h2> */}
           
            

<Started/>

{/* <Testmonial/> */}

        </div>

      
    );
}

export default Home;
