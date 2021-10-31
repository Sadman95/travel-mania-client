import { Grid } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Guide from './Guide/Guide';

const Guides = () => {

    const [guides, setGuides] = useState([]);

    useEffect(() =>{
        fetch('https://spooky-cemetery-57161.herokuapp.com/guides')
        .then(res => res.json())
        .then(data => setGuides(data))
    }, [])

    return (
        <div id='guides' style={{marginBottom: '100px'}} className='mt-5 p-4 mb-5'>
            <h2 className='text-center mb-2'>Our Guides</h2>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {guides.map((guide, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Guide guide={guide}></Guide>
          </Grid>
        ))}
      </Grid>
        </div>
    );
};

export default Guides;