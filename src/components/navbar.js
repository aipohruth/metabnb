import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import l1 from '../Assets/logo.png';


function NavBar() {
  return (
    <Container>
    <Navbar className='header' expand="lg">
      
        <Navbar.Brand href="#"><img width='200' src={l1} alt='Metabnb'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto pt-4 mx-8 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link  href="/" >Home</Nav.Link>
            <Nav.Link  href="#">Place to stay</Nav.Link>
            <Nav.Link href="#">NFTs</Nav.Link>
            <Nav.Link href="#">Community</Nav.Link>
          </Nav>
          <div className="d-flex pt-2">
            <Button >Connect wallet</Button>
          </div>
        </Navbar.Collapse>
      
    </Navbar>
    </Container>
  );
}

export default NavBar;

