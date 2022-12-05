import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import React from 'react';
function FNavBar() {
  return (
    <div >

    <Navbar collapseOnSelect expand="lg" className='navbar'  >
      <Container>
      <Image style={{width:50,height:40} } src='https://images.squarespace-cdn.com/content/v1/615311c38b087c106925859e/a3070bad-39b1-4f5b-9992-9e6674e15c88/VSF_Website_Icon_nectar.png'/>
        <Navbar.Brand href="#home" style={{ color: "orange"}}>Ascentia</Navbar.Brand>
        <Navbar.Toggle href="#home"   aria-controls="responsive-navbar-nav " />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./read"style={{ color: "orange"}}><b>Show Data</b></Nav.Link>
            <Nav.Link href="#pricing"style={{ color: "orange"}}>Pricing</Nav.Link>
           
          </Nav>
          <Nav>
          <Nav.Link  activeStyle={{color: "orange",textDecoration:"none"}} />	
            <Nav.Link href="#deets"style={{color: "orange"}}>More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes"style={{ color: "orange"}}>
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </div>
  );
}

export default FNavBar;