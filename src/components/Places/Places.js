import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Place from './Place/Place';

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() =>{
        fetch('https://spooky-cemetery-57161.herokuapp.com/places')
        .then(res => res.json())
        .then(data => setPlaces(data))
    }, [])
    return (
        <div id='places' className='p-4 mb-5'>
            <h2 className='text-center'>Places</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {places.map((place, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Place place={place}></Place>
          </Grid>
        ))}
      </Grid>
        </div>
    );
};

export default Places;