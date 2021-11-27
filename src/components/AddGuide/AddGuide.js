import axios from "axios";
import React from "react";
import { useRef } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import swal from "sweetalert";

const AddGuide = () => {


    const nameRef = useRef();
    const emailRef = useRef();
    const imageRef = useRef();

    const addGuide = e =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const image = imageRef.current.value;
        const guideInfo = {
            name,
            email,
            image
        };
        axios.post('https://spooky-cemetery-57161.herokuapp.com/guides', guideInfo)
    .then(res => {
        if(res.data.insertedId){
            swal('Well Done', 'Guide added successfully!', 'success');
            e.target.reset();
        }
    })
    }

  return (
    <div className="w-50 mt-5 mx-auto pt-5">
      <h3>Add Guide</h3>
      <Form onSubmit={addGuide}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Name
          </Form.Label>
          <Col sm={9}>
            <Form.Control ref={nameRef} type="text" placeholder="Guide's Name" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={3}>
            Contact
          </Form.Label>
          <Col sm={9}>
            <Form.Control ref={emailRef} type="email" placeholder="Guide's email" />
          </Col>
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3 row">
          <Form.Label column sm={3}>
            Guide's Image
          </Form.Label>
          <Col sm={9}>
            <Form.Control ref={imageRef} type="url" placeholder="Guide's Image URL"/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10}}>
            <Button variant="success" type="submit">
              Add Guide
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddGuide;
