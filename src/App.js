import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, ProgressBar } from 'react-bootstrap';
import 'mdbreact/dist/css/mdb.css';
import './App.scss';
import Footer from './components/Footer'
import Typist from 'react-typist'
import Navi from './components/Navi'
import profile from './images/avatar (2).jpg'
// import { CircularProgressbar,  buildStyles} from "react-circular-progressbar";
// import AnimatedProgressProvider from "./AnimatedProgressProvider";
// import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {

 

  return (
    <>
      <div className="App container-fluid">
        <Navi />

        <header>
          <div className="header py-5">
            <div className="headertext">
              <Typist className="TypistExample-header">
                <span className="purple-gradient"> Hello , I'm Hansol </span>
                <Typist.Delay ms={200} />
                <br />
                <span style={{ fontSize: '2rem' }}> “Make it work, make it right, make it fast.” – Kent Beck </span>
              </Typist>
            </div>
          </div>
        </header>
        <section>
          <div className="main text-center">
            <Image src={profile} roundedCircle fluid />
            <div className="main-contents">
              <h2>Hansol Park</h2>
              <h5>Web Developer</h5>
              <h6>sori9088@naver.com</h6>
              <div>
                <FontAwesomeIcon icon={faGithub} size={'2x'} className="mx-2" href="https://github.com/sori9088" />
                <FontAwesomeIcon icon={faLinkedin} size={'2x'} className="mx-2" />
                <FontAwesomeIcon icon={faFacebook} size={'2x'} className="mx-2" />
              </div>
              <div className="skill-contents my-5">
                <h1>Skill</h1>
                <div className="d-flex justify-content-center">
                <div className='col-8 my-4'>
                <h2>Front-end</h2>
                <span>HTML</span><ProgressBar now={90} className="my-2" />
                <span>CSS</span><ProgressBar now={75} className="my-2" />
                <span>React</span><ProgressBar now={80} className="my-2" />
                <span>Bootstrap</span><ProgressBar now={94} className="my-2" />
                <span>JavaScript</span><ProgressBar now={75} className="my-2" />

                <h2 className="mt-5">Back-end</h2>
                <span>Python</span><ProgressBar now={75} className="my-2" />
                <span>Flask</span><ProgressBar now={70} className="my-2" />
                <span>MySQL</span><ProgressBar now={80} className="my-2" />

                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <body>
          <Projects />
          <Contact />
        </body>
        <Footer />

      </div>
    </>
  );
}

export default App;
