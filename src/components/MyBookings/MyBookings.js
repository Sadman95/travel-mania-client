import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import {Button, Typography} from '@mui/material'
import swal from 'sweetalert';
import { useParams } from 'react-router';

const MyBookings = () => {
    const {id} = useParams();
    const [place, setPlace] = useState({});

    useEffect(() =>{
        fetch(`https://spooky-cemetery-57161.herokuapp.com/places/${id}`)
        .then(res => res.json())
        .then(data => {
            setPlace(data)
        })
    }, [id])

  

    const handlePurchase = () =>{
        const booking = {
            image: place.imgUrl,
            title: place.title,
            price: place.cost
        }
        fetch(`https://spooky-cemetery-57161.herokuapp.com/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                swal("Good job!", "Purchased confirmed!", "success");
            }
        })
        // 
    
    }
console.log(place)
    return (
        <Card style={{ width: '100%', padding: '32px' }}>
  <Card.Img variant="top" src={place.imgUrl} />
  <Card.Body>
    <Card.Title>{place.title}</Card.Title>
    <Card.Text>
      {place.details}
    </Card.Text>
    <Typography variant='h3' component='div'>
          ${place.cost}
      </Typography>
    <Button onClick={()=>handlePurchase()} variant="contained">Purchase</Button>
  </Card.Body>
</Card>
    );
};

export default MyBookings;