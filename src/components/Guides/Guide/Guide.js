import React from 'react';
import { Card } from 'react-bootstrap';
import './Guide.css'

const Guide = ({guide}) => {

    const {name, email, image} = guide;

    return (
        <Card className='guide-single'>
        <Card.Img height='100%' variant="top" src={image} />
        <div className='guide-text'>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {email}
          </Card.Text>
        </Card.Body>
        </div>
      </Card>
    );
};

export default Guide;