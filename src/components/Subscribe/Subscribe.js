import { Alert, Button } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Subscribe.css";
import useAuth from '../../hooks/useAuth'

const Subscribe = () => {
  const {user} = useAuth();
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = e =>{
    e.preventDefault();
    
    fetch(`https://spooky-cemetery-57161.herokuapp.com/users?email=${email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({email})
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount  === 1){
        setSuccess('Subscribed successfully!');
        setError('');
      }
      else{
        setError('subscription unsuccessful!');
        setSuccess('');
      }
    })

  }

  const handleUnsubscribe = () =>{
    if(!user.email){
      setError('Register first or email is invalid!');
      return;
    }

    fetch(`https://spooky-cemetery-57161.herokuapp.com/users/${user.email}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({email: user.email})
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount === 1){
        setError('Unsubscribed successfully');
        setSuccess('')
      }
    })

  }
  

  return (
    <div id="subscribe">
        <div className='overlay'></div>
      <div className="w-50 my-4 mx-auto">
        <h2 className="text-dark">Subscribe to our newsletter</h2>
        <Form onSubmit={handleSubscribe} className="text-dark">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
          </Form.Group>
          {
            success && <Alert severity='success'>{success}</Alert>
          }
          {
            error && <Alert severity='warning'>{error}</Alert>
          }
          <br />
          <button type='submit' className="btn me-4 btn-warning rounded-pill text-dark">
            Subscribe Now
          </button>
          <Button variant='text' fontWeight='bold' color='error' onClick={handleUnsubscribe}>unsubscribe</Button>
        </Form>
      </div>
    </div>
  );
};

export default Subscribe;
