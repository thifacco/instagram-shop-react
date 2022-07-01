import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from 'axios';
import Posts from './components/Posts';

import './App.scss';

class App extends Component {

  state = {
    stores: [],
    products: []
  }

  async componentDidMount() {
    try {
      const { data: posts } = await axios.get("/api/db.json");
      this.setState({ stores: posts.stores });
      this.setState({ products: posts.products });
      console.log('stores', this.state.stores);
      console.log('products', this.state.products);
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
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

          <Posts products={this.state.products}/>
        </Container>

        <Navbar collapseOnSelect bg="light" variant="light" fixed="bottom">
          <Container>
            <Nav className="d-flex justify-content-between">
              <Nav.Link href="#home"><img src="/images/home_icon.svg" alt="Home" /></Nav.Link>
              <Nav.Link href="#search"><img src="/images/search_icon.svg" alt="Pesquisar" /></Nav.Link>
              <Nav.Link href="#user"><img src="/images/user_icon.svg" alt="Usuário" /></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </main>
    );
  }
}

export default App;
