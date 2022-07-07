import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import axios from "axios";
import Posts from './Posts';
import Page2 from './Page2';
import Post from "./Post";

export default function Permalink(props) {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Product products={props.products} />} />
        <Route path="/" element={<Posts products={props.products} />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

function Product(props) {
  const {id} = useParams();
  const productSelected = props.products.filter(product => product.id === id);

  let product;
  if (typeof productSelected[0] !== 'undefined') {
    product = productSelected[0];
  }

  return (
    <div>
      <h1>Post ID: {id}</h1>
      {product?.title}

      {(product) ? <Post post={product}/> : ''}
    </div>
  );
}
