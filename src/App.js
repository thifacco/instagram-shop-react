import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Permalink from './components/Permalink';

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
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main className="main-content">
        <Header />

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

          {/* <BrowserRouter>
            <Routes>
              <Route path="/" element={<Posts products={this.state.products} />} />
              <Route path="/:id" element={<Product />} />
              <Route path="/page2" element={<Page2 />} />
            </Routes>
          </BrowserRouter> */}

          <Permalink products={this.state.products}/>

        </Container>

        <Footer />
      </main>
    );
  }
}

export default App;
