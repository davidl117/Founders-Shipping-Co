import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top">
      <Container className='link-color-fix'>
        <img className="logo-position" src="logo.svg" alt="logo" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/homePage">Home</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#dedicated">Sprinter Van Dedicated</NavDropdown.Item>
              <NavDropdown.Item href="#contract">
              Contract Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#LTL">LTL Services</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#parcel">
                Parcel Shipments
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/quoteForm">Get A Quote</Nav.Link>
            <Nav.Link href="/contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

