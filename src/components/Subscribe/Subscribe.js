import React from 'react';
import { Form } from 'react-bootstrap';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div id='subscribe'>
            <div className='w-50 my-4 mx-auto'>
            <h2 className='text-light'>Subscribe to our newsletter</h2>
            <Form className='text-light'>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <button className="btn btn-warning rounded-pill text-dark">Subscribe Now</button>
</Form>
            </div>
        </div>
    );
};

export default Subscribe;