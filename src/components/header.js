import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import l2 from '../Assets/htop.png';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import React from "react";


function Header() {
  return (
    <Container>
      <Row className='row'>
        <Col>
        <div className="header-content">
            <h2>Rent a <span>place</span> away from <span>home</span> in the <span>Metaverse</span></h2>
            <p>We provide you access to luxury and affordable houses in the metaverse
                get a change to turn your<br/> imagination to reality at your comfort zone
            </p>
            <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
        </div>
        <input
          className="form-control my-0"
          type="text"
          placeholder="Search for location"
          aria-label="Search"
        />
        <span className="input-group-text px-4" id="basic-text1">
            <button>Search</button>
          </span>
      </div>


           {/*} <Form className="d-flex">
            <div className="imput-group-prepend">
        </div>
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"/>
                        <Button className='search' >Search</Button>
  </Form>*/}

                    </div>
        </Col>
        <Col><img width='400' className='header-img' src={l2} alt='3 boxs in 1' /></Col>
      </Row>
     
      </Container>
      
    
  );
}

export default Header;