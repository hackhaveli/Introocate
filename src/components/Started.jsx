import React from 'react';
import './style3.css';

// Remove this import if Faqcomponent.jsx is not used in this file
// import Faqcomponent from './Faqcomponent.jsx';

const Started = () => {
  return (
    <>
      <div className='video-container centras'>
        <h2 className="btn-shine">The Quality that is provided to you:</h2>
      </div>
      <div className="centras">
      <video  autoPlay muted loop style={{ width: '240px',height: '400px',borderRadius: '3px', objectFit: 'cover'}} >
        <source src="/images/short-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video  autoPlay muted loop style={{ width: '240px',height: '400px',borderRadius: '3px', objectFit: 'cover'}} >
        <source src="/images/short-3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video  autoPlay muted loop style={{ width: '240px',height: '400px',borderRadius: '3px', objectFit: 'cover'}} >
        <source src="/images/short-4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <section className="testimonial">
  <h1>Testimonials</h1>
  <div className="test">
    <img
      src="./images/Testimonial/test 1.PNG"
      alt=""
      style={{ filter: "invert(0)" }}
    />
    <img
      src="./images/Testimonial/test 2.PNG"
      alt=""
      style={{ filter: "invert(0)" }}
    />
  </div>
  <div className="test">
    <img
      src="./images/Testimonial/test 3.PNG"
      alt=""
      style={{ filter: "invert(0)" }}
    />
    <img
      src="./images/Testimonial/test 4.PNG"
      alt=""
      style={{ filter: "invert(0)" }}
    />
  </div>
</section>

<section className="together">
                <h1>Let's <span>Work together</span> :)</h1>
            </section>

    </>
  );
}

export default Started;
