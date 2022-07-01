import React from 'react';
import Card from 'react-bootstrap/Card';
import Ratio from 'react-bootstrap/Ratio';

const Post = ({post}) => (
   <Card className="mb-md-2">
      <Ratio aspectRatio="1x1">
        <embed type="image/jpg" src={'https://instagramshop.s3.amazonaws.com/'+post.image} />
      </Ratio>
      {/* <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.description}
        </Card.Text>
      </Card.Body> */}
    </Card>
);

export default Post;