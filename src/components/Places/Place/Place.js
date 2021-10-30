import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Place.css'

const Place = ({place}) => {

    const {imgUrl, title, details} = place;

    return (
            <Card className='card-single bg-light'>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text className='text-secondary'>
        {details.slice(0, 200)}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant='danger' className='text-light'>Book Now</Button>
    </Card.Footer>
  </Card>
    );
};

export default Place;