import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleBooking from '../SingleBooking/SingleBooking';

const AllBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [remove, setRemove] = useState(false);

    useEffect(() =>{
        fetch('https://spooky-cemetery-57161.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])


    return (
        <TableContainer sx={{marginTop: '6em'}} component={Paper}>
            {remove && <Alert sx={{marginBottom: '16px'}} severity='warning'>Deleted Successfully!</Alert>}
      <Table sx={{ maxWidth: 700, margin:'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Place Image</TableCell>
            <TableCell align="right">Place Name</TableCell>
            <TableCell align="right">Tour Cost</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking, index) => <SingleBooking bookings={bookings} setBookings={setBookings} remove={remove} setRemove={setRemove} key={index} booking={booking}></SingleBooking>)}
          </TableBody>
          </Table>
          </TableContainer>
    );
};

export default AllBookings;