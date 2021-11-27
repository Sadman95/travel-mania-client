import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Alert } from '@mui/material';
import SinglePlace from '../SinglePlace/SinglePlace';


const ManagePlaces = () => {
    const [places, setPlaces] = useState([]);
    const [remove, setRemove] = useState(false);


    useEffect(() =>{
        fetch('https://spooky-cemetery-57161.herokuapp.com/places')
        .then(res => res.json())
        .then(data => setPlaces(data))
    }, [])
    return (
        <>
{remove && <Alert sx={{marginBottom: '16px'}} severity='warning'>Place deleted!</Alert> }
<TableContainer sx={{marginTop: '6em'}} component={Paper}>
            {remove && <Alert sx={{marginBottom: '16px'}} severity='warning'>Deleted Successfully!</Alert>}
      <Table sx={{ maxWidth: 800, margin:'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Place Image</TableCell>
            <TableCell align="right">Place Name</TableCell>
            <TableCell align="right">Tour Cost</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {places.map((place, index) => <SinglePlace places={places} setPlaces={setPlaces} setRemove={setRemove} key={index} place={place}></SinglePlace>)}
          </TableBody>
          </Table>
          </TableContainer>
  
        </>  )
};

export default ManagePlaces;