import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadManageGuide from './LoadUpdateGuide/LoadManageGuide';

const ManageGuide = () => {
    const [guides, setGuides] = useState([]);

    useEffect(() =>{
        fetch('https://spooky-cemetery-57161.herokuapp.com/guides')
        .then(res => res.json())
        .then(data => setGuides(data))
    }, [])
    return (
        <div className='w-75 mt-5 pt-5 mx-auto'>
            <h2>Guides Available: {guides.length}</h2>
            <Grid>
        {guides.map((guide, index) => (
          <Grid item key={index}>
            <LoadManageGuide guide={guide}></LoadManageGuide>
          </Grid>
        ))}
      </Grid>
        </div>
    );
};

export default ManageGuide;