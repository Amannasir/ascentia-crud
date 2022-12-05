import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState(0);

  const header = { "Access-Control-Allow-Origin": "*" };

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    axios.post('https://637e3c76cfdbfd9a63abb460.mockapi.io/crud/crud-test', {

      name: name,
      email: email,
      phoneNumber: phoneNumber,
      header,

    }).then(() => {
      history("/read");
    });

  }

  return (

    <div className='container'>
      {/* <div className='d-flex justify-content-between m-1'>
        <Alert>
        <h4>Create Record </h4>
        </Alert>
        <Link to="/read">
          <Button variant='prima
          ry' >Show Data</Button>
        </Link>
      </div> */}
      <div className='container'>
        <Form className='w-50' >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
            {/* {name}
       {email} */}
          </Form.Group>
          <Form.Group className="w-100" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number" onChange={(e) => setphoneNumber(e.target.value)} />
            {/* {name}
                                     {email} */}
          </Form.Group>

<br/>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>

      </div>

    </div>
  )
}

export default Create;