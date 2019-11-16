import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

const FormPage = () => {
  return (
    <div className="py-5" id="contacts">
    <MDBContainer >
      <MDBRow>
      <MDBCol>
      </MDBCol>
        <MDBCol md="6" className="contact-form">
          <form>
            <h2 style={{color:'white'}} className="h3 text-center my-4">Contact Me :) </h2>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Send <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
        <MDBCol>
      </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default FormPage;