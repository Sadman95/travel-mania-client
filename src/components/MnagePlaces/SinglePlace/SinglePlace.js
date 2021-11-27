import React from 'react';
import { TableCell, TableRow, Button } from '@mui/material';
import { Box } from '@mui/system';
import {UpdateModal} from '../UpdateModal/UpdateModal';


const SinglePlace = ({places, place, setPlaces, setRemove}) => {
    const {_id, imgUrl, title, cost} = place;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const removePlace = id =>{
        fetch(`https://spooky-cemetery-57161.herokuapp.com/places/${id}`, {
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
                  <Box sx={{display:'flex'}}>
                  <Button variant='contained' color='error' onClick={()=>removePlace(_id)}>Remove</Button>
                  <Button variant='contained' color='primary' onClick={handleOpen}>Update</Button>
                  <UpdateModal place={place} open={open} setOpen={setOpen}></UpdateModal>
                  </Box>
              </TableCell>
            </TableRow>
    );
};

export default SinglePlace;