import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit"; // Import the necessary components from your MDB React UI Kit library
import { Link } from "react-router-dom";

function SingUp() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://images.pexels.com/photos/5836781/pexels-photo-5836781.jpeg?cs=srgb&dl=pexels-roman-odintsov-5836781.jpg&fm=jpg"
              width={"300px"}
              margin={"2px"}
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>
          <MDBCol col="4" md="6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in </p>
              <a href="YOUR_GOOGLE_LOGIN_URL">
                <div className="icon-container google">
                  <i className="fa fa-google"></i>
                </div>
              </a>
              <a href="YOUR_LINKEDIN_LOGIN_URL">
                <div className="icon-container linkedin">
                  <i className="fa fa-linkedin"></i>
                </div>
              </a>
            </div>

            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="formControlLg"
              type="email"
              size="lg"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="formControlLg"
              type="password"
              size="lg"
            />
            <div className="d-flex justify-content-between mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>
            <div className="text-center text-md-start mt-4 pt-2">
              <MDBBtn className="mb-0 px-5" size="lg">
                Login
              </MDBBtn>
              <p className="small fw-bold mt-2 pt-1 mb-2">
                Don't have an account?{" "}
                <Link to="/singup" className="link-danger">
                  Register
                </Link>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SingUp;
