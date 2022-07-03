import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

class Footer extends Component {
   render() {
      return (
         <Navbar collapseOnSelect bg="light" variant="light" fixed="bottom">
            <Container>
               <Nav className="d-flex justify-content-between">
                  <Nav.Link href="#home"><img src="/images/home_icon.svg" alt="Home" /></Nav.Link>
                  <Nav.Link href="#search"><img src="/images/search_icon.svg" alt="Pesquisar" /></Nav.Link>
                  <Nav.Link href="#user"><img src="/images/user_icon.svg" alt="Usuário" /></Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      )
   }
}

export default Footer;