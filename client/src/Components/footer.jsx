import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function footer() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="ln-2" variant="dark">
        <Container>
          <Navbar.Brand className="brand-text">OPENAUTO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>+769 658 4558</Nav.Link>
              <Nav.Link>services@openauto.ca</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" className="ln-3" variant="dark">
        <Container>
          <p className="nav2-head">Open Auto @ all rights reserved</p>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link>
                <FontAwesomeIcon className="insta-icon" icon={faFacebook} />
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon className="insta-icon" icon={faTwitter} />
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon className="insta-icon" icon={faYoutube} />
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon className="insta-icon" icon={faLinkedin} />
              </Nav.Link>
              <Nav.Link>
                <FontAwesomeIcon className="insta-icon" icon={faInstagram} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default footer;
