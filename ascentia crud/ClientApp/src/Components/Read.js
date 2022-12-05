import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Read = () => {
    const [data, setData] = useState([]);


    function getData() {
        axios.get("https://637e3c76cfdbfd9a63abb460.mockapi.io/crud/crud-test")
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            });
    }
function handleDelete(id){
    axios.delete(`https://637e3c76cfdbfd9a63abb460.mockapi.io/crud/crud-test/${id}`).then(()=>{getData();
})
}

    const settoLocalStorage = (id,name,email,phoneNumber) =>{
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phoneNumber", phoneNumber);
    }
    useEffect(() => {
        getData();
    }, []);







    return (

        <div>
   
            
            <div className='d-flex justify-content-between m-1'>
              <Alert variant="info">

              <h1>Read Record</h1>
              </Alert>
        <Link to="/">
          <Button variant='info' >Create</Button>
        </Link>
          </div>
          <div className='container'>
            <Table striped variant='primary' hover>
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>phone Number</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (
                            <>
                                <tbody >
                                    <tr>
                                        <td>{eachData.id}</td>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>{eachData.phoneNumber}</td>
                                        <td>
                                            <Link to="/update">
                                            <Button variant="primary" onClick={()=>
                                                settoLocalStorage(eachData.id,eachData.name,eachData.email,eachData.phoneNumber)
                                                }>Edit </Button>
                                            </Link>
                                            </td>
                                           
                                        <td><Button variant="danger" onClick={()=>handleDelete(eachData.id)}>Delete</Button></td>
                                    </tr>
                                </tbody>

                            </>
                        )
                    })

                }
            </Table>
            </div>
           
            <Image className='d-block mx-auto img-fluid w-50' src='https://static.vecteezy.com/system/resources/previews/005/260/238/non_2x/illustration-graphic-cartoon-character-of-online-survey-vector.jpg'/>
        </div>
    )
}

export default Read;