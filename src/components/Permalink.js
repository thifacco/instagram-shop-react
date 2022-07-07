import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import Posts from './Posts';
import Page2 from './Page2';

export default function Permalink(props) {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Product />} />
        <Route path="/" element={<Posts products={props.products} />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

function Product() {
  let {id} = useParams();

  return (
    <div>
      <h1>Post ID: {id}</h1>
    </div>
  );
}
