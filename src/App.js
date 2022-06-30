import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import Post from './components/Post';

import './App.scss';

class App extends Component {

  state = {
    posts: []
  }

  async componentDidMount() {
    try {
      const { data: posts } = await axios.get("/api/db.json");
      console.log(posts);
      this.setState({ posts });
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

          <Row className="my-5">
            <Col xs={6} md={4}>jjj <Post post={this.state.posts.stores}/></Col>
          </Row>
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
