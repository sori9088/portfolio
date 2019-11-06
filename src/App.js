import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image , Card } from 'react-bootstrap';
import { MDBBtn } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import './App.scss';
import Typist from 'react-typist'
import Navi from './components/Navi'
import profile from './images/avatar (2).jpg'
import thumb1 from './images/solflix_thumb.PNG'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'


function App() {



  return (
    <>
      <div className="App container-fluid">
        <Navi />

        <header>
          <div className="header py-5">
            {/* <Typist
        steps={["", 1000, "I am Web developer", 700]}
        loop={Infinity}
        wrapper="p"
        className = "purple-gradient"
      /> */}
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
              <h3>Hansol Park</h3>
              <h6>Web Developer</h6>
              <div>
                <FontAwesomeIcon icon={faGithub} size={'2x'} className="mx-2" />
                <FontAwesomeIcon icon={faLinkedin} size={'2x'} className="mx-2" />
                <FontAwesomeIcon icon={faFacebook} size={'2x'} className="mx-2" />
              </div>
              <div className="skill-contents my-5">
                <h1>Skill</h1>


              </div>
            </div>
          </div>
        </section>
        <body>
          <div className="d-flex justify-content-end">
            <div className="works">
              <h1>Projects</h1>
            </div>
            <div className="works-contents">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={thumb1} />
                <Card.Body>
                  <Card.Text>Card Title</Card.Text>
                   <MDBBtn gradient="purple" rounded>VIEW</MDBBtn>
                </Card.Body>
                <Card.Img variant="top" src={thumb1} />
                <Card.Body>
                  <Card.Text>Card Title</Card.Text>
                   <MDBBtn gradient="purple" rounded>VIEW</MDBBtn>
                </Card.Body>
                <Card.Img variant="top" src={thumb1} />
                <Card.Body>
                  <Card.Text>Card Title</Card.Text>
                   <MDBBtn gradient="purple" rounded>VIEW</MDBBtn>
                </Card.Body>
              </Card>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}

export default App;
