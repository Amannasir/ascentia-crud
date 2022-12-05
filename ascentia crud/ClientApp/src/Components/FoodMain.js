
import FNavBar from './FNavBar'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import CarouselBar from './CarouselBar';
import Create from './Create';
import Cardf from './Cardf';
const FoodMain = () => {







    return (
        <div>

            <FNavBar />
            {/* <img src='https://www.langweiledich.net/wp-content/uploads/2018/10/Moataz-Mohamed_01.jpg' className='img-fluid shadow-4 w-100' alt='...' /> */}

            <div className='mask GeeksForGeeks w-100 '>

                <div className=' BrandPos position-absolute top-50 start-50 translate-middle' >
                    <div className='' >

                        <Image style={{ width: 480, height: 330 }} src='https://images.squarespace-cdn.com/content/v1/615311c38b087c106925859e/a3070bad-39b1-4f5b-9992-9e6674e15c88/VSF_Website_Icon_nectar.png' />
                        <h1 className='BrandNamePos position-absolute top-50 start-50 translate-middle'>ASCENTIA</h1>
                    </div>
                </div>
                <div className=" MainHeadingPosition position-absolute top-50 start-50 translate-middle">
                    <h1 className='fontSize'>
                        Organic food for a <span style={{ color: "orange" }}>GOLDEN LIFE.</span>

                    </h1>

                    <div className="d-grid gap-2">

                        <Button variant="success" size="lg">Read More</Button>
                    </div>
                </div>





            </div>
            {/* <div className='bg-image'>
                <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='img-fluid' alt='Sample' />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <p className='text-white mb-0'>Can you see me?</p>
                    </div>
                </div>
            </div> */}
            <hr />
            <hr />
            <div className='container'>
                <Container>

                    <Row>


                        <Col><h1 style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '20vh',
                        }}>
                            What we are offering?
                        </h1>
                            <div className='w-100'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '30vh',
                                }} >




                                <div>
                                    <div>

                                        <h4> - Weekly Lunch facility</h4>
                                        <h4> - Best tasty and organic food </h4>
                                        <h4> - Lowest rates</h4>





                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col><Image style={{ width: 740, height: 630 }} src='https://www.kindpng.com/picc/m/583-5835579_plate-of-steak-with-chimichurri-sauce-food-photography.png' /></Col>



                    </Row>
                </Container>
                <hr />
                <hr />

                <div className='w-100'>
                    <Alert varient="primary" >

                        <CarouselBar />
                    </Alert>
                </div>
                <hr />
                <hr />





                <Container>
                    <Row>

                        <Col> <Image className='w-75 d-block mx-auto'
                            src="https://www.pngkey.com/png/full/395-3950813_green-elephant-juicery-food-photography-top-view.png" /></Col>

                    </Row>
                    <Row>

                        <Col>
                            <Image style={{}} className='w-100' src='https://commplace.pl/wp-content/themes/commplace/images/pof-intro02.png' />
                        </Col>
                        <Col>
                            <div>
                                <br />
                                <br />
                                <Alert variant='primary'>

                                    <h1>Reservation: Fill the form</h1>
                                </Alert>
                                <Create />

                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col >
                            <h1 className='fontStyle' style={{ color: 'green' }}>Eat Healthy</h1>
                        </Col>


                        <Col>
                            <Image style={{}} className='w-100' src='https://www.pngmart.com/files/11/Green-Food-PNG-Transparent-HD-Photo.png' />
                        </Col>
                        <Col>
                            <h1 className='fontStyle' style={{ color: 'red' }}>Stay Healthy</h1>
                        </Col>
                    </Row>



                </Container>

                <div>

                    <Alert>
                        <h1>Services</h1>
                    </Alert>
                    <Container>

                        <Row>
                            <Col>
                                <Cardf srcName="https://static.vecteezy.com/system/resources/previews/006/102/057/original/infographics-of-online-food-ordering-and-delivery-hand-holds-smartphone-with-app-for-online-ordering-and-food-delivery-delivery-service-landing-page-template-vector.jpg" title="Tracking info" />
                            </Col>

                            <Col>
                                <Cardf srcName="https://pikoff.com/wp-content/uploads/2020/06/ai-safe-food-delivery-concept-free-vector_5ed93c8aa5dd1.jpeg" title="Safe Food " />
                            </Col>
                            <Col>
                                <Cardf srcName="https://i.pinimg.com/originals/c1/0c/84/c10c8408fa8e5727814f1c0b99ddb285.jpg" title="Quick Delievery  " />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <hr /><hr />
            </div>
        </div>
    )
}

export default FoodMain


