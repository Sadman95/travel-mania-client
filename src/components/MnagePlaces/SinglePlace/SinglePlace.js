import React from 'react';
import { TableCell, TableRow, Button } from '@mui/material';


const SinglePlace = ({places, place, setPlaces, setRemove}) => {
    const {_id, imgUrl, title, cost} = place;

    const removePlace = id =>{
        fetch(`http://localhost:5555/places/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1){
                setRemove(true);
            }
        const restPlaces = places.filter(place => place._id !== id);
        setPlaces(restPlaces);
        })
    }

    return (
        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th'>
                <img width='50%' src={imgUrl} alt="" />
              </TableCell>
              <TableCell align="right">{title}</TableCell>
              <TableCell align="right">${cost}</TableCell>
              <TableCell align="right">
                  <Button variant='contained' color='error' onClick={()=>removePlace(_id)}>Remove</Button>
              </TableCell>
            </TableRow>
    );
};

export default SinglePlace;