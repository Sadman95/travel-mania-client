import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="header mb-4">
      <div className='w-25 position-absolute top-50 start-50 translate-middle'>
      <InputGroup className="mt-4">
        <FormControl
          placeholder="Search your favorite places"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="danger" id="button-addon2">
          Search
        </Button>
      </InputGroup>
      </div>
    </header>
  );
};

export default Header;
