import { TableCell, TableRow, Button } from '@mui/material';
import React from 'react';

const SingleBooking = ({booking, setRemove, bookings, setBookings}) => {
    const {_id, image, title, price} = booking;
    

    const deleteOrder = id =>{
        fetch(`https://spooky-cemetery-57161.herokuapp.com/bookings/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount === 1){
                setRemove(true);
            }
        const restBookings = bookings.filter(booking => booking._id !== id);
        setBookings(restBookings);
        })
    }

    return (
       <>
        
        
         <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th'>
                <img width='20%' src={image} alt="" />
              </TableCell>
              <TableCell align="right">{title}</TableCell>
              <TableCell align="right">${price}</TableCell>
              <TableCell align="right">
                  <Button variant='contained' color='error' onClick={()=>deleteOrder(_id)}>Delete</Button>
              </TableCell>
            </TableRow>
       </>
    );
};

export default SingleBooking;