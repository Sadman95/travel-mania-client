import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='p-5'>
            <Box sx={{borderRadius: 5}} className='row mt-5 overflow-hidden'>
            <div className='col-2 bg-warning p-4'>
                <NavLink className='text-decoration-none' to='/admin/addPlace'>
                    <Button className='text-white fw-bold' variant='text' color='info'>Add Place</Button>
                </NavLink>
            </div>
            <div className='col-10 bg-secondary'>
                <h1>This is Admin</h1>
            </div>
        </Box>
        </div>
    );
};

export default Admin;