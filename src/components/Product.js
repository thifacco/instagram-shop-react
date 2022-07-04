import React, { Component } from 'react';
import Post from './Post';

const Product = ({ id }) => (
   <>
      <h1>Teste rota dinânmica</h1>
      <p>ID: {id}</p>
      {/* <h1>{product.title}</h1> */}
      {/* <Post post={product} /> */}
   </>
);

export default Product;