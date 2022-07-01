import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Header = () => (
   <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Container>
         <Navbar.Brand href="#home">Shop</Navbar.Brand>
         <Navbar.Toggle aria-controls="header-navbar-nav" />
         <Navbar.Collapse id="header-navbar-nav">
            <Nav className="ms-auto">
               <Nav.Link href="#features"><img src="/images/bookmark_favorite_icon.svg" alt="Lista de desejos" /></Nav.Link>
               <Nav.Link href="#deets"><img src="/images/bascket_icon.svg" alt="Carrinho" /></Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Container>
   </Navbar>
);

export default Header;