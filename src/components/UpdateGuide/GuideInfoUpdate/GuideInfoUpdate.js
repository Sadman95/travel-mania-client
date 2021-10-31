import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";

const GuideInfoUpdate = () => {
  const { id } = useParams();
  const [guide, setGuide] = useState({});

  useEffect(() => {
    fetch(`https://spooky-cemetery-57161.herokuapp.com/guides/${id}`)
      .then((res) => res.json())
      .then((result) => setGuide(result));
  }, [id]);

  //name change:
  const handleNameChange = (e) => {
    const updatedNme = e.target.value;
    const updatedGuide = {
      name: updatedNme,
      email: guide.email,
      image: guide.image,
    };
    setGuide(updatedGuide);
  };

  //email change:
  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    const updatedGuide = {
      name: guide.name,
      email: updatedEmail,
      image: guide.image,
    };
    setGuide(updatedGuide);
  };

  //image change:
  const handleImageChange = (e) => {
    const updatedImg = e.target.value;
    const updatedGuide = {
      name: guide.name,
      email: guide.email,
      image: updatedImg,
    };
    setGuide(updatedGuide);
  };

  //update handler:
  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`https://spooky-cemetery-57161.herokuapp.com/guides/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(guide),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          alert("Guide is updated successfully");
          e.target.reset();
        }
      });
  };

  return (
    <div className="w-75 mt-5 pt-5 mx-auto">
      <h2 className='text-secondary mb-4'>Update This Guide</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={handleNameChange}
              value={guide.name || ""}
              type="text"
              placeholder="Update Name"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={handleEmailChange}
              value={guide.email || ""}
              type="email"
              placeholder="Update Email"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Image URL
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              onChange={handleImageChange}
              value={guide.image || ""}
              type="url"
              placeholder="Update Image URL"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10}}>
            <Button className='text-light' type="submit" variant="secondary">
              Update
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default GuideInfoUpdate;
