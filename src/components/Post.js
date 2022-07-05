import React from 'react';
import Card from 'react-bootstrap/Card';
import Ratio from 'react-bootstrap/Ratio';

const Post = ({ post }) => (
  <Card className="mb-md-2">
    <a href={'/'+post.id}>
      <Ratio aspectRatio="1x1">
        <embed type="image/jpg" src={'https://instagramshop.s3.amazonaws.com/' + post.image} />
      </Ratio>
    </a>
  </Card>
);

export default Post;