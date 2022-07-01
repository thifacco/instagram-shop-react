import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Posts = ({products}) => (
   <Row className="my-5">
      {products.map((product, index) => (
         <Col xs={6} md={4}>
            <img src={'https://instagramshop.s3.amazonaws.com/'+product.image} className="img-fluid"/>
            <h6>{product.title}</h6>
         </Col>   
      ))}
   </Row>
);

export default Posts;