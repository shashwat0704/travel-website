import React from "react";
import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function App() {
  return (
    <MDBFooter
      className="text-center"
      style={{ backgroundColor: "#2979FF", color: "white" }}
    >
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.facebook.com"
            target="_blank"
            role="button"
          >
            <FaFacebookF style={{ color: "white" }} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://twitter.com"
            target="_blank"
            role="button"
          >
            <FaTwitter style={{ color: "white" }} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.google.com"
            target="_blank"
            role="button"
          >
            <FaGoogle style={{ color: "white" }} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.instagram.com"
            target="_blank"
            role="button"
          >
            <FaInstagram style={{ color: "white" }} />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.linkedin.com"
            target="_blank"
            role="button"
          >
            <FaLinkedin style={{ color: "white" }} />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 - &nbsp;
        <a
          href="."
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Travelite &nbsp; | &nbsp; Developed by - Madhusudan Kumar
        </a>
      </div>
    </MDBFooter>
  );
}
