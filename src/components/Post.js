import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = ({post}) => (
   <Card>
      <Card.Img variant="top" src={'https://instagramshop.s3.amazonaws.com/'+post.image} />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
        </Card.Text>
      </Card.Body>
    </Card>
);

export default Post;