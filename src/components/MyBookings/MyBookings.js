import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const {user} = useAuth();
    const {id} = useParams();
    const [place, setPlace] = useState({});
    const [pending, setPending] = useState('');

    useEffect(() =>{
        fetch(`https://spooky-cemetery-57161.herokuapp.com/places/${id}`)
        .then(res => res.json())
        .then(data => {
            setPlace(data)
        })
    }, [id])

    const handlePurchase = () =>{
        setPending('Pending...')
        
    }

    const handleConfirm = () =>{
        setPending('');
        swal("Good job!", "Purchased confirmed!", "success");
        document.getElementById('place').textContent = '';
    }
console.log(place)
    return (
        <Row id='place' className='mt-5 p-5 text-dark d-flex justify-content-center align-items-center'>
                            <Col><img className='img-fluid rounded' src={place.imgUrl} alt="" /></Col>
                            <Col>
                                <p>{place.title}</p>
                            </Col>
                            <Col>
                                <h3>${place.cost}</h3>
                            </Col>
                            
                            <Col>
                                <h3>${user.email}</h3>
                            </Col>
                            <Col>
                                <button onClick={handlePurchase} className="btn btn-secondary text-light">Purchase</button>
                                <br /><span>{pending}</span> 
                            </Col>
                            <Col>
                            <button onClick={handleConfirm} className='btn btn-success text-light'>Confirm</button>
                            </Col>
                          </Row>
    );
};

export default MyBookings;