import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import axios from 'axios';
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';

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
        <Header/>

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

        <Footer/>
      </main>
    );
  }
}

export default App;
