import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function landingtop() {
  return (
    <Navbar collapseOnSelect expand="lg" className='landingnav' variant="dark">
      <Container>
        <Navbar.Brand className='brand-text'>OPENAUTO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link >+769 658 4558</Nav.Link>
            <Nav.Link>services@openauto.ca</Nav.Link>
            <Nav.Link className='link-circle'>
              Download the mobile app
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default landingtop;