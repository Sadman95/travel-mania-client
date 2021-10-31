import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Admin.css'

const Admin = () => {

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5555/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const {isLoading} = useAuth();

    if(isLoading){
        return <h4>Loading...</h4>
    }
    
    return (
        <div className='p-5'>
            <Box sx={{borderRadius: 5}} className='row mt-5 overflow-hidden'>
            <div className='col-2 bg-warning p-4'>
                <NavLink className='text-decoration-none' to='/admin/addPlace'>
                    <Button className='text-white fw-bold mb-4' variant='text' color='info'>Add Place</Button>
                </NavLink>
                <br />
                <NavLink className='text-decoration-none' to='/admin/addGuide'>
                    <Button className='text-white fw-bold mb-4' variant='text' color='info'>Add Guide</Button>
                </NavLink>
                <br />
                <NavLink className='text-decoration-none' to='/admin/guides/manageGuide'>
                    <Button className='text-white fw-bold mb-4' variant='text' color='info'>Manage Guides</Button>
                </NavLink>
            </div>
            <div className='col-10 bg-secondary'>
                <h1 className='text-light mb-4'>Users</h1>
                <div className="row">
                    {
                        users.map(user => <Row className='mb-4 text-light d-flex align-items-center' key={user._id}>
                            <Col><img className='userImg' src={user.img} alt="" /></Col>
                            <Col>
                                <p>{user.name}</p>
                            </Col>
                            <Col>
                                <p>{user.email}</p>
                            </Col>
                            <Col>
                                <button className="btn btn-danger text-light">Delete</button>
                            </Col>
                          </Row>)
                    }
                </div>
            </div>
        </Box>
        </div>
    );
};

export default Admin;