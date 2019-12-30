import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';
import { MDBBtn, MDBView, MDBMask } from "mdbreact";
import thumb1 from '../images/solflix_thumb.PNG'
import thumb2 from '../images/mariogame_thumb.PNG'
import thumb3 from '../images/mealplan_thumb.PNG'



export default function Projects() {
  return (
    <div className="d-flex justify-content-end col-md-12" id="projects">
      <div className="works mx-4 px-2" >
        <h1>Projects</h1>
      </div>
      <div className="works-contents">
        <CardGroup>
          <Card>
            <MDBView hover zoom>
              <Card.Img variant="top" src={thumb3} />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text">ReactJS / Python / Flask / PorstgreSQL / Responsive</p>
              </MDBMask>
            </MDBView>
            <Card.Body>
              <Card.Text>Meal Plan</Card.Text>
              <MDBBtn gradient="purple" href="https://mealplan.netlify.com/" target="_blank" rounded>VIEW</MDBBtn>
            </Card.Body>
            <MDBView hover zoom>
              <Card.Img variant="top" src={thumb1} />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text">React / APIs </p>
              </MDBMask>
            </MDBView>
            <Card.Body>
              <Card.Text>Solflix (IMDB)</Card.Text>
              <MDBBtn gradient="purple" href="https://solflix.netlify.com/" target="_blank" rounded>VIEW</MDBBtn>
            </Card.Body>
            <MDBView hover zoom>
              <Card.Img variant="top" src={thumb2} />
              <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text">HTML / CSS / Canvas</p>
              </MDBMask>
            </MDBView>
            <Card.Body>
              <Card.Text>Mario Canvas Game</Card.Text>
              <MDBBtn gradient="purple" href="https://hs-mario.netlify.com" target="_blank" rounded>VIEW</MDBBtn>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </div>
  )
}
