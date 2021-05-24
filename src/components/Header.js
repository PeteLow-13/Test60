import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
        <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
              <Container>
                  <LinkContainer to='/'>
                      <Navbar.Brand>POG</Navbar.Brand>
                  </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    
                <Nav className="ml-auto">
                    <LinkContainer to='/contact'>
                        <Nav.Link >
                        <i className='fas fa-address-card'></i>Contact
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to='/places'>
                        <Nav.Link >
                        <i className='fas fa-book-open'></i>Menu
                        </Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to='/about'>
                        <Nav.Link >
                        <i className='fas fa-heart'></i>About Us
                        </Nav.Link>
                    </LinkContainer>

                    {/* <LinkContainer to='/login'>
                        <Nav.Link >
                        <i className='fas fa-user'></i>Sign In
                        </Nav.Link>
                    </LinkContainer> */}

                    <LinkContainer to='/'>
                        <Nav.Link >
                        <i className='fas fa-home'></i>Home
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>
    )
}

export default Header
