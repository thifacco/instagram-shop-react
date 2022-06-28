import React from 'react';

import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './App.scss';

const App = () => (
  <main className="main-content">
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

    <Container>
      <InputGroup className="mb-3">
        <InputGroup.Text id="input-search">
          <img src="/images/search_icon.svg" alt="Pesquisar" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Pesquisar"
          aria-label="Pesquisar"
          aria-describedby="input-search"
        />
      </InputGroup>
    </Container>

    <Navbar collapseOnSelect bg="light" variant="light" fixed="bottom">
      <Container>
        <Nav className="justify-content-between">
          <Nav.Link href="#home"><img src="/images/home_icon.svg" alt="Home" /></Nav.Link>
          <Nav.Link href="#search"><img src="/images/search_icon.svg" alt="Pesquisar" /></Nav.Link>
          <Nav.Link href="#video"><img src="/images/video_icon.svg" alt="Vídeos" /></Nav.Link>
          <Nav.Link href="#bag"><img src="/images/bascket_icon.svg" alt="Sacola" /></Nav.Link>
          <Nav.Link href="#user"><img src="/images/user_icon.svg" alt="Usuário" /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </main>
);

export default App;
