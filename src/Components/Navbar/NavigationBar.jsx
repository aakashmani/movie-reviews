import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './NavigationBar.css';

const NavigationBar = () => {
  const handleSearchClick = () => {
    alert('Search clicked!');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className="navbar">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span className="ms-2">Film Review</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signin">
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create-account">
              <Nav.Link>Create Account</Nav.Link>
            </LinkContainer>
           <LinkContainer to="/films">
            <Nav.Link>Films</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/lists">
              <Nav.Link>Lists</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/members">
              <Nav.Link>Members</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/journal">
              <Nav.Link>Journal</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Account">
              <Nav.Link>Account</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex ms-3">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
              />
              <InputGroup.Text
                className="search-icon"
                onClick={handleSearchClick}
                style={{ cursor: 'pointer' }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
