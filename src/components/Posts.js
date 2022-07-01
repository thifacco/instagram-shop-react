import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from './Post'

const Posts = ({products}) => (
   <Row className="my-5">
      {products.map((product, index) => (
         <Col xs={6} md={4}>
            <Post post={product}/>
         </Col>   
      ))}
   </Row>
);

export default Posts;