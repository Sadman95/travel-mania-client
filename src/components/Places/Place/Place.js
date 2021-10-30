import { Chip } from '@mui/material';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Place.css'

const Place = ({place}) => {

    const {imgUrl, title, details, cost} = place;

    return (
            <Card className='card-single bg-light'>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text className='text-secondary'>
        {details.slice(0, 200)}
      </Card.Text>
      <Chip className='d-flex align-items-center p-4' label={<h3 className='fw-bold text-light'>${cost}</h3>} color="primary" />
    </Card.Body>
    <Card.Footer>
      <Button variant='danger' className='text-light'>Book Now</Button>
    </Card.Footer>
  </Card>
    );
};

export default Place;