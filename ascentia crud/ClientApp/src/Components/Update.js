
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const Update = () => {

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setphoneNumber(localStorage.getItem("phoneNumber"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://637e3c76cfdbfd9a63abb460.mockapi.io/crud/crud-test/${id}`, {

      name: name,
      email: email,
      phoneNumber: phoneNumber,



    })
      .then(() => {
        navigate("/read");
        ;
      });
  }

  return (
    <div className='container' >
      <Alert variant="primary" >
      <h1>Update Details </h1>
    </Alert>
      <Form className='w-50' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {name}
{email} */}
        </Form.Group>
        <Form.Group className="w-100" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" value={phoneNumber} placeholder="Phone Number" onChange={(e) => setphoneNumber(e.target.value)} />
          {/* {name}
                                     {email} */}
        </Form.Group>


<br/>
        <Button variant="primary" type="submit"
          onClick={handleUpdate}
        >
          Update
        </Button>
        <Link to="/read">
          <Button variant="dark">
            Back
          </Button>
        </Link>

      </Form></div>
  )
}

export default Update